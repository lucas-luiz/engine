import type { Canvas } from "./canvas"
import type { ObjectRenderOptions, Position2D } from "../types/object"

export class Obj {

    public w
    public h
    private position : Position2D 

    public x : number
    public y : number 
    private color
    private canvasReference : Canvas
    private xSpeed
    private ySpeed

    constructor(canvasEntity: Canvas, objectRenderOptions: ObjectRenderOptions) {

        canvasEntity.addObject(this)

        this.w = objectRenderOptions.width

        this.h = objectRenderOptions.height

        this.x = objectRenderOptions.x

        this.y = objectRenderOptions.y

        this.color = objectRenderOptions.color

        this.canvasReference = canvasEntity
    }


    getPosition(): Position2D{

        return {
            x: this.x,
            y: this.y
        }

    }


    setWidth(w): void {

        this.w = w

    }


    setHeight(h): void {

        this.h = h

    }


    setXSpeed(speed): void {

        this.xSpeed = speed 

    }


    setYSpeed(speed): void {

        this.ySpeed = speed

    }


    private updatePosition(): void {
        
        const lastX = this.x
        const lastY = this.y

        this.position = {
            x : lastX + this.xSpeed,
            y : lastY + this.ySpeed
        }

    }


    draw(): void {

        this.updatePosition()

        const ctx: CanvasRenderingContext2D = this.canvasReference.context

        ctx.beginPath();
        ctx.fillStyle = 'white'
        ctx.fillRect(this.x, this.y , this.w, this.h)
        ctx.closePath();

    }
}