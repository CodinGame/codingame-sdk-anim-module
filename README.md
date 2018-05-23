This project is a set of sample modules for the creation of a game using the Game Engine Toolkit of [CodinGame](https://codingame.com).

Modules make it possible add create client-side logic to the viewer, making your game perform better. With modules you also have acces to the entire `PIXI` api to manipulate the viewer as yo usee fit.

It is used with the [Codingame SDK](https://github.com/CodinGame/codingame-game-engine).

All modules work in their own layer of the viewer, you can order them by changing the order they appear in `config.js`.

## TooltipModule

Can be used to assign some data to an entity from the [GraphicEntityModule](https://github.com/CodinGame/codingame-game-engine/tree/master/engine/modules/entities). The data will be displayed in a tooltip when the mouse cursor hovers over the entity on screen.

You may change the assigned data of each entity once per game turn.

The majority of the text to display should be written into your copy of the tooltip module to reduce the amount of data the Referee must produce.

## EndScreenModule

Requires game engine version 1.35 or higher.

Can be used to display the ranking of a multiplayer game with any additional info you choose. The ranking will appear at the very end of the replay.

To guarantee the correct ranking, you must set this module's score property in your Referee's `onEnd()` method.

### Example
`Referee.java`
```java
  @Override
  public void onEnd() {
      endScreenModule.setScores(gameManager.getPlayers().stream().mapToInt(p -> p.getScore()).toArray());
  }
```

## AnimModule

Useful for games with a lot of AnimatedSprites overlayed over the rest of the game.

Instead of have the Referee output the entire sequence of images for each new animation, you may have it reference a pre-existing animation as defined in `AnimData.js` and configured in `AnimModule.js`.

### Example
`Referee.java`
```java
  // Perform animation labelled "death" starting at t and lasting till end of frame
  double t = 0.2;
  Anim anim = animModule.createAnimationEvent('death', t);
  anim.getParams().put("duration", 1 - t);
```
`AnimModule.js`
```javascript
  anim.started = {frame: number, t: anim.t};
  anim.duration = 
    anim.params.duration // If duration is given, use it
    || 
    DURATIONS[a.id] // Else use predefined duration for this anim id
    || 
    1; // Else animate it for the length of 1 frame
  
```
