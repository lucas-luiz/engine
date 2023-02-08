import { Canvas } from "./canvas";
import { ObjectRenderOptions, Position2D } from "./object_models";
export declare class Obj {
    w: any;
    h: any;
    private position;
    x: number;
    y: number;
    private color;
    private canvasReference;
    private xSpeed;
    private ySpeed;
    constructor(canvasEntity: Canvas, objectRenderOptions: ObjectRenderOptions);
    getPosition(): Position2D;
    setWidth(w: any): void;
    setHeight(h: any): void;
    setXSpeed(speed: any): void;
    setYSpeed(speed: any): void;
    private updatePosition;
    draw(): void;
}
