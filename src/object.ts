import type { Canvas } from "./canvas"
import type { ObjectRenderOptions } from "../types/object"

export class Obj {

    public w
    public h

    public x: number
    public y: number

    //public xSpeed
    //public ySpeed

    public isTranslucid

    public weight

    public color

    private canvasReference: Canvas

    private objectsCollidiing: Obj[]

    constructor(canvasEntity: Canvas, objectRenderOptions: ObjectRenderOptions) {

        canvasEntity.addObject(this)


        this.w = objectRenderOptions.w

        this.h = objectRenderOptions.h

        this.weight = this.w * this.h

        this.x = objectRenderOptions.x

        this.y = objectRenderOptions.y

        this.isTranslucid = false

        //this.xSpeed = 0

        //this.ySpeed = 0

        this.color = objectRenderOptions.color ?? 'black'

        this.canvasReference = canvasEntity

    }


    public isColliding(objB: Obj): boolean {

        if (
            this.x + this.w >= objB.x &&
            this.x <= objB.x + objB.w &&
            this.y + this.h >= objB.y &&
            this.y <= objB.y + objB.h
        )
            return true
        else
            return false

    }


    public getCenterX(): number {

        return this.x + (this.w / 2)

    }


    public getCenterY(): number {

        return this.y + (this.h / 2)

    }


    draw(): void {

        //this.updatePosition()



        const ctx: CanvasRenderingContext2D = this.canvasReference.context

        ctx.beginPath();
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h)
        ctx.closePath();
    }
}