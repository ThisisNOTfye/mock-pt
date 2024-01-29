function monaco_map () {
    tiles.setCurrentTilemap(tilemap`level4`)
}
function movement () {
    controller.player1.moveSprite(p1, 200, 200)
    controller.player3.moveSprite(p3, 200, 200)
    controller.player2.moveSprite(p2, 200, 200)
    controller.player4.moveSprite(p4, 200, 200)
}
function spawn_point () {
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(27, 219))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(28, 219))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(29, 219))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(30, 219))
}
function spawn_point_nurburgring () {
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(37, 213))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(38, 215))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(39, 217))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(40, 219))
}
function nuburgring_map () {
    tiles.setCurrentTilemap(tilemap`level0`)
}
function tile_map () {
    tiles.setCurrentTilemap(tilemap`level`)
}
function spawn_point2 () {
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(8, 94))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), tiles.getTileLocation(9, 96))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)), tiles.getTileLocation(10, 98))
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)), tiles.getTileLocation(11, 100))
}
function camera_movement () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
}
let camera_sprite: Sprite = null
let p4: Sprite = null
let p3: Sprite = null
let p2: Sprite = null
let p1: Sprite = null
let myMenu = miniMenu.createMenu(
miniMenu.createMenuItem("The Nurburgring"),
miniMenu.createMenuItem("Autodromo nazionale"),
miniMenu.createMenuItem("Circuit de Monaco")
)
myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 150)
myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
    myMenu.close()
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`myImage`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`myImage1`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(assets.image`myImage2`, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(assets.image`myImage0`, SpriteKind.Player))
    p1 = sprites.create(assets.image`myImage`, SpriteKind.Player)
    p2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    p3 = sprites.create(assets.image`myImage2`, SpriteKind.Player)
    p4 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    camera_sprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . b . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . b b . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(camera_sprite)
    if (selectedIndex == 0) {
        camera_movement()
        nuburgring_map()
        spawn_point_nurburgring()
        movement()
    }
    if (selectedIndex == 1) {
        camera_movement()
        tile_map()
        spawn_point()
        movement()
    }
    if (selectedIndex == 2) {
        camera_movement()
        monaco_map()
        spawn_point2()
        movement()
    }
})
game.onUpdate(function () {
    camera_sprite.setPosition((p2.x + (p3.x + (p1.x + p4.x))) / 4, (p2.y + (p3.y + (p1.y + p4.y))) / 4)
})
