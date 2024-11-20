let Player = sprites.create(assets.image`Player`, SpriteKind.Player)
game.onUpdate(function () {
    if (controller.right.isPressed()) {
        Player.x += 5
    }
    if (controller.left.isPressed()) {
        Player.x += -5
    }
    if (controller.up.isPressed()) {
        Player.y += -5
    }
    if (controller.down.isPressed()) {
        Player.y += 5
    }
})
forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
