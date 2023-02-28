import type { Obj } from "./object"

export class Canvas {


    reference: HTMLCanvasElement
    context: CanvasRenderingContext2D
    objects: Obj[]
    width: number
    height: number
    timeoutRef

    private currLoopCallback
    private currLoopInterval
    callback: any


    constructor(private window: Window, private querySelect, width = 100, height = 100) {

        this.reference = this.window.document.querySelector(querySelect)

        this.context = this.reference.getContext('2d')

        this.width = width
        this.height = height

        this.reference.setAttribute('width', width.toString())
        this.reference.setAttribute('height', height.toString())

        this.objects = []

    }


    setSize(width, height) {

        this.reference.width = width
        this.reference.height = height

    }


    getWidth() {

        return this.reference.width

    }


    getHeight() {

        return this.reference.height

    }


    addObject(object) {

        this.objects.push(object)

    }

    sleep(milli: number, sleepCallback) {
        clearTimeout(this.timeoutRef)
        setTimeout(() => {
            sleepCallback()
            this.loop(this.callback)
        }, milli)
    }

    loop(callback) {

        this.timeoutRef = setTimeout(() => {

            this.loop(callback)

        }, (getInMilliseconds(1, 'second') / 60))

        this.callback = callback
        
        
        this.context.clearRect(0, 0, this.width, this.height)
        
        this.handleCollisions(this.objects)
        
        this.drawObjects(this.objects)
        
        this.callback()


    }

    //timeout
    handleCollisions(objs) {

        const alreadyCollidedMap = new Map<Obj, Obj>()

        for (const targetObj of objs) {

            if (targetObj.isTranslucid === false) {

                const possibleCollidedObjects = this.filterPossibleCollisions(targetObj, objs)
                for (const obj of possibleCollidedObjects) {

                    if (targetObj != obj && this.isColliding(targetObj, obj)) {
                        this.applyCollisionRules(targetObj, obj)
                    }
                }

            }

        }

    }


    filterPossibleCollisions(target: Obj, objs: Obj[]): Obj[] {

        return objs

    }


    isColliding(objA: Obj, objB: Obj): boolean {

        if (
            objA.x + objA.w >= objB.x &&
            objA.x <= objB.x + objB.w &&
            objA.y + objA.h >= objB.y &&
            objA.y <= objB.y + objB.h
        )
            return true
        else
            return false

    }


    applyCollisionRules(objA: Obj, objB: Obj): void {

        //compare weights
        const [havierObj, lighterObj] = objA.weight > objB.weight ? [objA, objB] : [objB, objA]

        const diffX = lighterObj.getCenterX() - havierObj.getCenterX()
        const diffY = lighterObj.getCenterY() - havierObj.getCenterY()

        //colisao horizontal
        if (Math.abs(diffX) > Math.abs(diffY)) {
            //handle pra esquerda
            if (diffX < 0) {
                lighterObj.x = havierObj.x - lighterObj.w
            }
            //handle pra direita
            else {
                lighterObj.x = havierObj.x + havierObj.w
            }
        } else {
            //handle pra cima
            if (diffY < 0) {
                lighterObj.y = havierObj.y - lighterObj.h
            }
            //handle pra baixo
            else {
                lighterObj.y = havierObj.y + havierObj.w
            }
        }

    }


    drawObjects(objs): void {

        objs.forEach((obj) => obj.draw())

    }


}

function getInMilliseconds(number, format) {
    switch (format) {
        case ('seconds'):
            return number * 1000
        case ('minutes'):
            return number * 60000
    }
}

