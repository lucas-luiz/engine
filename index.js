const screen = new Canvas('canvas', this)

screen.init(() => {
    screen.reference.width = 300
    screen.reference.height = 300
    gridScalePx = 30
    player = new Player(screen, {
        width: gridScalePx,
        height: gridScalePx,
        position: [0,0],
        color: 'white'
    })
    console.log(this, player)
})

screen.loop(() => {
    
    if(player.position[0] == 0 )
        player.position[0] = 1

    if(player.position[1] == 0 )
        player.position[1] = 1

    if(player.position[0] > screen.reference.width || player.position[1] > screen.reference.height)
        player.position = [0,0]

    player.position = [player.position[0] * 1.01  , player.position[1] * 1.01 ]
    console.log(player.position)
})