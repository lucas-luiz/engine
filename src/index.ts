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
const obs_w = canvas.width - playerScale - 5
const obs_h = 30
const obs_x1 = 0
const obs_x2 = playerScale + 5

const player = new Player(canvas, {
    w: playerScale,
    h: playerScale,
    x: 10,
    y: 10,
    color: 'white'
})
/* 
const obstacle = new Obj(canvas, {
    color: 'black',
    w: playerScale * 2,
    h: playerScale * 2,
    x: (300 - 50) / 2,
    y: (300 - 50) / 2
}) */

/* 
const obstacle2 = new Obj(canvas, {
    color: 'black',
    w: playerScale / 2,
    h: playerScale / 2,
    x: (450 - 50) / 2,
    y: (450 - 50) / 2
}) */
const obstacle4 = new Obj(canvas, {
    w: obs_w,
    h: obs_h,
    x: obs_x2,
    y: 70
})
const obstacle5 = new Obj(canvas, {
    w: obs_w,
    h: obs_h,
    x: obs_x1,
    y: 135
})
const obstacle6 = new Obj(canvas, {
    w: obs_w,
    h: obs_h,
    x: obs_x2,
    y: 200
})
const obstacle7 = new Obj(canvas, {
    w: obs_w - 50,
    h: obs_h +100,
    x: obs_x1,
    y: 265
})


const imgs = []

imgs[0] = new Image()
imgs[1] = new Image()
imgs[2] = new Image()

imgs[0].src = './matheus.jpeg'
imgs[1].src = './matheus_2.jpeg'
imgs[2].src = './matheus_3.jpeg'



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


    if (player.x > canvas.width - player.w) {
        mateuzin()
    }
    else if (player.x < 0) {
        mateuzin()
    }
    if (player.y > canvas.height- player.h) {
        mateuzin()
    }
    else if (player.y < 0) {
        mateuzin()
    }

    if (player.isColliding(obstacle6) || player.isColliding(obstacle4) || player.isColliding(obstacle5)|| player.isColliding(obstacle7)) {

        mateuzin()

    }

    function mateuzin() {
        const index =  Math.floor(Math.random() * 3)

        const img = imgs[index] 

        canvas.context.drawImage(img, 0, 0)

        console.log('imageDrawn')

        canvas.sleep(2000, () => {

            player.x = 20
            player.y = 20

        })
    }
})
