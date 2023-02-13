import {Canvas} from './canvas'
import {Player} from './player'


//INIT

//screen setup
const canvas = new Canvas()
canvas.width = 300
canvas.height = 200

//player setup
const gridScalePx = 30
const player = new Player(canvas, {
    width: gridScalePx,
     height: gridScalePx,
    position: [0,0],
    color: 'white'
})

console.log(canvas, player) 



//LOOP   
canvas.loop(() => {
    console.log('sdf')
    if(player.x > canvas.width + player.w)
        player.x = 0

    if(player.y > canvas.height + player.h)
        player.y = 0

    player.setXSpeed(1)
    player.setYSpeed(1)    
})
