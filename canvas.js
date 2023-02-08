class Canvas {

    reference
    context
    window
    objects

    constructor(query_selector, window){
        
        this.reference = document.querySelector(query_selector)
        this.context = this.reference.getContext('2d')
        this.window = window
        this.objects = []
    
    }

    
    addObject(object){
    
        this.objects.push(object)
    
    }

    
    init(callback){
    
        callback.bind(this.window)()
    
    }


    loop(callback){
    
        setInterval(()=>{
        
            callback.bind(this.window)()
            this.context.clearRect(0, 0, this.reference.width, this.reference.height)
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