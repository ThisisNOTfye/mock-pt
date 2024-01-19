controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ....................
        ....................
        ........8888........
        ......ff8888ff......
        ......ffbccbff......
        ......ff.55.ff......
        ........2552........
        .......225522.......
        .......258852.......
        .......258852.......
        .......25ff52.......
        .......225522.......
        .......222222.......
        .......222222.......
        ........2222........
        ......ff.22.ff......
        ......ff3223ff......
        ......ff.22.ff......
        ......22222222......
        .......222222.......
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ...fff.........fff2.
        ...fff.2222222.fff22
        ..88b.225552222.3.22
        ..88c55588f522222222
        ..88c55588f522222222
        ..88b.225552222.3.22
        ...fff.2222222.fff22
        ...fff.........fff2.
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        .......222222.......
        ......22222222......
        ......ff.22.ff......
        ......ff3223ff......
        ......ff.22.ff......
        ........2222........
        .......222222.......
        .......222222.......
        .......225522.......
        .......25ff52.......
        .......258852.......
        .......258852.......
        .......225522.......
        ........2552........
        ......ff.55.ff......
        ......ffbccbff......
        ......ff8888ff......
        ........8888........
        ....................
        ....................
        `],
    50,
    false
    )
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
// THIS THE BOOST
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ....................
        ....................
        ........8888........
        ......ff8888ff......
        ......ffbccbff......
        ......ff.55.ff......
        ........2552........
        .......225522.......
        .......258852.......
        .......258852.......
        .......25ff52.......
        .......225522.......
        .......222222.......
        .......222222.......
        ........2222........
        ......ff.22.ff......
        ......ff3223ff......
        ......ff.22.ff......
        ......22222222......
        .......222222.......
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        .2fff.........fff...
        22fff.2222222.fff...
        22.3.222255522.b88..
        222222225f88555c88..
        222222225f88555c88..
        22.3.222255522.b88..
        22fff.2222222.fff...
        .2fff.........fff...
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `],
    50,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ....................
        ....................
        ........8888........
        ......ff8888ff......
        ......ffbccbff......
        ......ff.55.ff......
        ........2552........
        .......225522.......
        .......258852.......
        .......258852.......
        .......25ff52.......
        .......225522.......
        .......222222.......
        .......222222.......
        ........2222........
        ......ff.22.ff......
        ......ff3223ff......
        ......ff.22.ff......
        ......22222222......
        .......222222.......
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ...fff.........fff2.
        ...fff.2222222.fff22
        ..88b.225552222.3.22
        ..88c55588f522222222
        ..88c55588f522222222
        ..88b.225552222.3.22
        ...fff.2222222.fff22
        ...fff.........fff2.
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `],
    50,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        .......222222.......
        ......22222222......
        ......ff.22.ff......
        ......ff3223ff......
        ......ff.22.ff......
        ........2222........
        .......222222.......
        .......222222.......
        .......225522.......
        .......25ff52.......
        .......258852.......
        .......258852.......
        .......225522.......
        ........2552........
        ......ff.55.ff......
        ......ffbccbff......
        ......ff8888ff......
        ........8888........
        ....................
        ....................
        `,img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ...fff.........fff2.
        ...fff.2222222.fff22
        ..88b.225552222.3.22
        ..88c55588f522222222
        ..88c55588f522222222
        ..88b.225552222.3.22
        ...fff.2222222.fff22
        ...fff.........fff2.
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        `,img`
        ....................
        ....................
        ........8888........
        ......ff8888ff......
        ......ffbccbff......
        ......ff.55.ff......
        ........2552........
        .......225522.......
        .......258852.......
        .......258852.......
        .......25ff52.......
        .......225522.......
        .......222222.......
        .......222222.......
        ........2222........
        ......ff.22.ff......
        ......ff3223ff......
        ......ff.22.ff......
        ......22222222......
        .......222222.......
        `],
    50,
    false
    )
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level0`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 200, 200)
tiles.placeOnTile(mySprite, tiles.getTileLocation(37, 213))
Render.setViewMode(ViewMode.tilemapView)
