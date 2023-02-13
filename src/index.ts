import { Canvas } from './canvas'
import { Keyboard } from './keyboard'
import { Player } from './player'


//INIT

//screen setup
const canvas = new Canvas(window, '#canvas', 200, 200)

//keyboard setup
const keys =  new Keyboard(window)

//player setup
const gridScalePx = 30
const player = new Player(canvas, {
    w: gridScalePx,
    h: gridScalePx,
    x: 10,
    y: 10,
    color: 'white'
})

//LOOP   
canvas.loop(() => {

    if (player.x > canvas.width )
        player.x = -player.w
    else if (player.x < -player.w)
        player.x = canvas.width 

    if (player.y > canvas.height)
        player.y = -player.h
    else if (player.y < -player.h)
        player.y = canvas.height 

    if(keys.check('W'))
        player.y--
    if(keys.check('A'))
        player.x--
    if(keys.check('S'))
        player.y++
    if(keys.check('D'))
        player.x++
})
