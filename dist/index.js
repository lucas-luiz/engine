define("object_models", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("object", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Obj = void 0;
    class Obj {
        w;
        h;
        position;
        x;
        y;
        color;
        canvasReference;
        xSpeed;
        ySpeed;
        constructor(canvasEntity, objectRenderOptions) {
            canvasEntity.addObject(this);
            this.w = objectRenderOptions.width;
            this.h = objectRenderOptions.height;
            this.x = objectRenderOptions.x;
            this.y = objectRenderOptions.y;
            this.color = objectRenderOptions.color;
            this.canvasReference = canvasEntity;
        }
        getPosition() {
            return {
                x: this.x,
                y: this.y
            };
        }
        setWidth(w) {
            this.w = w;
        }
        setHeight(h) {
            this.h = h;
        }
        setXSpeed(speed) {
            this.xSpeed = speed;
        }
        setYSpeed(speed) {
            this.ySpeed = speed;
        }
        updatePosition() {
            const lastX = this.position.x;
            const lastY = this.position.y;
            this.position = {
                x: lastX + this.xSpeed,
                y: lastY + this.ySpeed
            };
        }
        draw() {
            this.updatePosition();
            const ctx = this.canvasReference.context;
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.fillRect(this.x, this.y, this.w, this.h);
            ctx.closePath();
        }
    }
    exports.Obj = Obj;
});
define("canvas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Canvas = void 0;
    class Canvas extends HTMLCanvasElement {
        context;
        window;
        objects;
        constructor() {
            super();
            console.log(this.innerHTML, this.outerHTML, this);
            this.context = this.getContext('2d');
            this.window = this.window;
            this.objects = [];
        }
        setSize(width, height) {
            this.width = width;
            this.height = height;
        }
        getWidth() {
            return this.width;
        }
        getHeight() {
            return this.height;
        }
        addObject(object) {
            this.objects.push(object);
        }
        loop(callback) {
            setInterval(() => {
                callback.bind(this.window)();
                this.context.clearRect(0, 0, this.width, this.height);
                this.objects.forEach((obj) => obj.draw());
            }, (getInMilliseconds(1, 'second') / 60));
        }
    }
    exports.Canvas = Canvas;
    function getInMilliseconds(number, format) {
        switch (format) {
            case ('seconds'):
                return number * 1000;
            case ('minutes'):
                return number * 60000;
        }
    }
});
define("player", ["require", "exports", "object"], function (require, exports, object_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Player = void 0;
    class Player extends object_1.Obj {
        constructor(canvas, objectRenderOptions) {
            super(canvas, objectRenderOptions);
        }
    }
    exports.Player = Player;
});
define("index", ["require", "exports", "canvas", "player"], function (require, exports, canvas_1, player_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //INIT
    //screen setup
    const canvas = new canvas_1.Canvas();
    canvas.width = 300;
    canvas.height = 200;
    //player setup
    const gridScalePx = 30;
    const player = new player_1.Player(canvas, {
        width: gridScalePx,
        height: gridScalePx,
        position: [0, 0],
        color: 'white'
    });
    console.log(canvas, player);
    //LOOP   
    canvas.loop(() => {
        console.log('sdf');
        if (player.x > canvas.width + player.w)
            player.x = 0;
        if (player.y > canvas.height + player.h)
            player.y = 0;
        player.setXSpeed(1);
        player.setYSpeed(1);
    });
});
