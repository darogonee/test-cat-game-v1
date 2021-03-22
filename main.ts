// add restart menu
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy = -175
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (player1.vy == 0) {
        player1.vy = -175
    }
})
let player1: Sprite = null
scene.setBackgroundColor(9)
player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f f . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f f 5 f 
    f f f f f f f f f f f f f f f f 
    . . . . f f f f f f f f f f . . 
    . . . . f f f f f f f f f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . f . f . . . f . f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1, 100, 0)
tiles.setTilemap(tilemap`level1`)
player1.ay = 375
scene.cameraFollowSprite(player1)
