class Object {

    width
    height
    position
    color
    canvasReference


    constructor(canvasEntity, objectRenderOptions) {
        
        canvasEntity.addObject(this)
        
        this.canvasReference = canvasEntity.reference
        
        this.width = objectRenderOptions.width
        this.height = objectRenderOptions.height
        this.position = objectRenderOptions.position
        
        this.color = objectRenderOptions.color
    
    }


    draw() {

        console.log('drawing obj')
        
        const ctx = this.canvasReference.getContext('2d')
        
        ctx.beginPath();
        ctx.fillStyle = 'white'
        ctx.rect(...this.position, this.width, this.height)
        ctx.fill()

    }
}