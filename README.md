# Snake Client Project 🐍

![Gif of the snake game](https://raw.githubusercontent.com/taniarascia/snek/master/snek.gif)

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from here. 

## Final Product

---

### View of connection screen:

!["Connection Screen"](https://github.com/lighthouse-labs/snek-multiplayer/assets/131313586/fd6362a9-3dd6-437e-83f0-60686520bc93)

### Sending "EAT MY DUST!" to the server:

!["Message: EAT MY DUST!"](https://github.com/lighthouse-labs/snek-multiplayer/assets/131313586/15ac3c75-7ce6-41ee-9d7b-3cd28743d94e)

### Sending "OHH NOO!" to the server:
!["Message: OHH NOO!](https://github.com/lighthouse-labs/snek-multiplayer/assets/131313586/e77ab72b-89c0-4e08-8ad5-92b22f16414f)

### Sending "GOOD GAME!" to the server:

!["Message: Good Game!"](https://github.com/lighthouse-labs/snek-multiplayer/assets/131313586/171adc95-7332-4eeb-9db2-2eca5890bc65)



## Getting Started

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side.
- Run the development snake client using the `node play.js` command.


### *Movement Commands:*

Use W A S D to navigate the snake up, down, left, or right. Eat the red dot to gain points. If the snake collides with the wall or its own tail, it's game over. Press CTRL + C to quit the game.

- Press W to "Move: up" - move up one square (unless facing down)
- Press S to "Move: down" - move down one square (unless facing up)
- Press A to "Move: left" - move left one square (unless facing right)
- Press D to "Move: right" - move left one square (unless facing left)

### *Sending Default Messages:*

- Press B to say: EAT MY DUST!
- Press N to say: OHH NOO!
- Press M to say: GOOD GAME!


## Acknowledgements

This project was not built from scratch. It was inspired and started from snek (blog post). [Tania Rascia](https://github.com/taniarascia) is the original author.

## License

This project is open source and available under the [MIT License](https://github.com/taniarascia/snek/blob/master/LICENSE).

