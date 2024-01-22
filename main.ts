controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
// THIS THE BOOST
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
Render.setViewMode(ViewMode.raycastingView)
let mySprite = Render.getRenderSpriteInstance()
tiles.placeOnTile(mySprite, tiles.getTileLocation(37, 213))
mySprite.setVelocity(50, 50)
Render.move(mySprite, 80)
tiles.setCurrentTilemap(tilemap`level0`)
controller.moveSprite(mySprite, controller.dx(100), controller.dy(100))
Render.moveWithController(17)
