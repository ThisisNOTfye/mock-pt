scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
	
})
function movement () {
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 200, 200)
}
function spawn_point () {
    tiles.placeOnTile(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), tiles.getTileLocation(27, 219))
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
function camera_movement () {
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
}
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
    	
    }
})
