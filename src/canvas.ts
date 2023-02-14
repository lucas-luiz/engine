import type { Obj } from "./object"

export class Canvas  {

    
    reference: HTMLCanvasElement
    context: CanvasRenderingContext2D
    objects: Obj[]
    width: number
    height: number


    constructor(private window: Window, private querySelect, width = 100, height = 100){
         
        this.reference = this.window.document.querySelector(querySelect)

        this.context = this.reference.getContext('2d')
        
        this.width = width
        this.height = height

        this.reference.setAttribute('width', width.toString())
        this.reference.setAttribute('height', height.toString())
            
        this.objects = []
    
    }


    setSize(width, height){
    
        this.reference.width = width
        this.reference.height = height
    
    }

    
    getWidth(){
    
        return this.reference.width
    
    }


    getHeight(){
    
        return this.reference.height
    
    }
    

    addObject(object){
    
        this.objects.push(object)
    
    }

    loop(callback){
    
        setInterval(()=>{
        
            this.context.clearRect(0, 0, this.width, this.height)
            callback()

            handleCollisions(this.objects)
            drawObjects(this.objects)
            
        
        }, (getInMilliseconds(1, 'second') / 60))

        function handleCollisions(objs){ 
            //sort by position
            for(const obj of objs){
                if(obj.isTranslucid === false){
                    //logica de collision e reposition
                }
            }
        }
    
        function drawObjects(objs){
            objs.forEach((obj)=> obj.draw())
        }
        
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

