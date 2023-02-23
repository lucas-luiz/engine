import { Canvas } from './canvas'
import { Keyboard } from './keyboard'
import { Obj } from './object'
import { Player } from './player'


//INIT

//screen setup
const canvas = new Canvas(window, '#canvas', 300, 300)

//keyboard setup
const keys = new Keyboard(window)

//player setup
const gridScalePx = 60
const player = new Player(canvas, {
    w: gridScalePx,
    h: gridScalePx,
    x: 10,
    y: 10,
    color: 'white'
})

const obstacle = new Obj(canvas, {
    color: 'black',
    w: 50,
    h: 50,
    x: (300 - 50)/2,
    y: (300 - 50)/2 
})


const obstacle2 = new Obj(canvas, {
    color: 'black',
    w: 20,
    h: 20,
    x: (450 - 50)/2,
    y: (450 - 50)/2 
})

const interval = setInterval(()=>{console.log(obstacle2.x, obstacle2.y)},1000)

//LOOP   
canvas.loop(() => {
    player.color = 'white'
    if (keys.check('W') || keys.check('ARROWUP'))
        player.y--
    if (keys.check('A') || keys.check('ARROWLEFT'))
        player.x--
    if (keys.check('S') || keys.check('ARROWDOWN'))
        player.y++
    if (keys.check('D') || keys.check('ARROWRIGHT'))
        player.x++

    
    if (player.x > canvas.width)
        player.x = -player.w
    else if (player.x < -player.w)
        player.x = canvas.width
    if (player.y > canvas.height)
        player.y = -player.h
    else if (player.y < -player.h)
        player.y = canvas.height
})
