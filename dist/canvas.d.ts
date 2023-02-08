import { Obj } from "./object";
export declare class Canvas extends HTMLCanvasElement {
    context: CanvasRenderingContext2D;
    window: Window;
    objects: Obj[];
    constructor();
    setSize(width: any, height: any): void;
    getWidth(): number;
    getHeight(): number;
    addObject(object: any): void;
    loop(callback: any): void;
}
