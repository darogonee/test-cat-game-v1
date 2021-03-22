let player1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . f f f . 
    . . . . . . . . . . . . f 5 1 . 
    . . . . . . . . . . . . f f f . 
    . . . . f f f f f f f f f . . . 
    . . . . f f f f f f f f f . . . 
    . . . . f f . . . . . f f . . . 
    . . . . f f . . . . . f f . . . 
    . . . . f f . . . . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(player1)
