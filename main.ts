namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false)
})
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    music.baDing.play()
    otherSprite.destroy()
})
let small_coin: Sprite = null
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
info.setLife(3)
info.setScore(0)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    small_coin = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . f 5 5 5 4 4 4 4 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 4 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 4 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 4 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 4 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 4 5 5 5 5 5 5 5 5 5 5 5 f 
        . f 5 4 5 5 5 5 5 5 5 5 5 5 5 f 
        . . f 5 5 5 4 4 5 5 5 5 5 5 f . 
        . . f 5 5 5 5 5 5 5 5 5 5 5 f . 
        . . . f f 5 5 5 5 5 5 5 f f . . 
        . . . . . f f f f f f f . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(small_coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
