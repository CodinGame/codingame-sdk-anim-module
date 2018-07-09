# CodinGame SDK Modules

This project is a set of sample modules for the creation of a game using the Game Engine Toolkit of [CodinGame](https://codingame.com).

Modules make it possible add create client-side logic to the viewer, making your game perform better. With modules you also have acces to the entire `PIXI` api to manipulate the viewer as yo usee fit.

It is used with the [Codingame SDK](https://github.com/CodinGame/codingame-game-engine).

All modules work in their own layer of the viewer, you can order them by changing the order they appear in `config.js`.

# How to use modules

1. Create a new project base on the [Game skeleton](https://github.com/CodinGame/game-skeleton) or an [Example](https://tech.io/playgrounds/25775/codingame-sdk-documentation/introduction-4), or use your existing project.
2. Copy the `.java` files of the chosen module into `src/main/java/`
3. Copy the `.js` files of the chosen module into `src/main/resources/view`
4. If not already present, create a `config.js` file in `src/main/resources/view` based on the example in this repository. Import the `.js` file you need and add it to the `modules` array.
5. See the [CodinGame SDK Documentation](https://tech.io/playgrounds/25775/codingame-sdk-documentation) for more details on each module