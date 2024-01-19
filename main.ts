let mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level0`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(37, 212))
