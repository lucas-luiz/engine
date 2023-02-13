import type { ObjectRenderOptions } from 'types/object'
import type { Canvas } from './canvas'
import {Obj} from './object'
export class Player extends Obj{
    
    constructor(canvas: Canvas, objectRenderOptions: ObjectRenderOptions){
        super(canvas, objectRenderOptions)
    }
}