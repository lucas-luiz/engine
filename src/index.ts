import { Canvas } from './canvas'
import { Keyboard } from './keyboard'
import { Obj } from './object'
import { Player } from './player'
import { sleep } from './utils'


//INIT

//screen setup
const canvas = new Canvas(window, '#canvas', 300, 300)

//keyboard setup
const keys = new Keyboard(window)

//player setup
const playerScale = 30
const playerVel = 0.6

const player = new Player(canvas, {
    w: playerScale,
    h: playerScale,
    x: 10,
    y: 10,
    color: 'white'
})

const obstacle = new Obj(canvas, {
    color: 'black',
    w: playerScale * 2,
    h: playerScale * 2,
    x: (300 - 50) / 2,
    y: (300 - 50) / 2
})


const obstacle2 = new Obj(canvas, {
    color: 'black',
    w: playerScale / 2,
    h: playerScale / 2,
    x: (450 - 50) / 2,
    y: (450 - 50) / 2
})

const interval = setInterval(() => { console.log(obstacle2.x, obstacle2.y) }, 1000)

//LOOP   
canvas.loop(async () => {
    player.color = 'white'
    if (keys.check('W') || keys.check('ARROWUP'))
        player.y -= playerVel
    if (keys.check('A') || keys.check('ARROWLEFT'))
        player.x -= playerVel
    if (keys.check('S') || keys.check('ARROWDOWN'))
        player.y += playerVel
    if (keys.check('D') || keys.check('ARROWRIGHT'))
        player.x += playerVel


    if (player.x > canvas.width)
        player.x = -player.w
    else if (player.x < -player.w)
        player.x = canvas.width
    if (player.y > canvas.height)
        player.y = -player.h
    else if (player.y < -player.h)
        player.y = canvas.height

    if (player.isColliding(obstacle2)) {
        const img = new Image()
        img.src = './matheus.jpeg'

        canvas.context.drawImage(img, 0, 0)

        await sleep(1000)

        player.x = 20
        player.y = 20

    }
})
