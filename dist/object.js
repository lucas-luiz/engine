export class Obj {
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
