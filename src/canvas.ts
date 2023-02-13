import type { Obj } from "./object"

export class Canvas extends HTMLCanvasElement {

    context: CanvasRenderingContext2D
    window: Window
    objects: Obj[]


    constructor(){
         
        super() 
        console.log(this.innerHTML, this.outerHTML, this)

            
        this.context = this.getContext('2d')
        this.window = this.window


        this.objects = []
    
    }


    setSize(width, height){
    
        this.width = width
        this.height = height
    
    }

    
    getWidth(){
    
        return this.width
    
    }


    getHeight(){
    
        return this.height
    
    }
    

    addObject(object){
    
        this.objects.push(object)
    
    }

    loop(callback){
    
        setInterval(()=>{
        
            callback.bind(this.window)()
            this.context.clearRect(0, 0, this.width, this.height)
            this.objects.forEach((obj)=> obj.draw())
        
        }, (getInMilliseconds(1, 'second') / 60))
        
    }
}

function getInMilliseconds(number, format){
    switch(format){
        case('seconds'):
            return number * 1000
        case('minutes'):
            return number * 60000
    }
}

customElements.define("canvas-window", Canvas, {extends: 'canvas'});