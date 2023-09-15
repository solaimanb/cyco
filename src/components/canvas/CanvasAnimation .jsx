import React, { Component } from "react";

class CanvasAnimation extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef(); // Create a ref for the canvas element
  }

  componentDidMount() {
    const canvas = this.canvasRef.current; // Access the canvas element using the ref
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.2, "yellow");
    gradient.addColorStop(0.4, "green");
    gradient.addColorStop(0.6, "cyan");
    gradient.addColorStop(0.8, "blue");
    gradient.addColorStop(1, "magenta");

    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        this.characters = `
          CYCO`;
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.canvasHeight = canvasHeight;
      }
      draw(context) {
        this.text = this.characters.charAt(
          Math.floor(Math.random() * this.characters.length)
        );
        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        );
        if (
          this.y * this.fontSize > this.canvasHeight &&
          Math.random() > 0.99
        ) {
          this.y = 0;
        } else {
          this.y += 1;
        }
      }
    }

    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontSize = 19;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
      }

      #initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(i, 0, this.fontSize, this.canvasHeight);
        }
      }
      resize(width, height) {
        this.canvasWidth = width;
        this.canvasHeight = height;
        this.columns = this.canvasWidth / this.fontSize;
        this.symbols = [];
        this.#initialize();
      }
    }

    const effect = new Effect(canvas.width, canvas.height);
    let lastTime = 0;
    const fps = 1;
    const nextFrame = 1000 / fps;
    let timer = 0;

    const animate = (timeStamp) => {
      const deltaTime = timeStamp - lastTime;
      lastTime = timeStamp;
      if (timer > nextFrame) {
        ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
        ctx.textAlign = "center";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = gradient;
        ctx.font = effect.fontSize + "px monospace";
        effect.symbols.forEach((symbol) => symbol.draw(ctx));
      } else {
        timer += deltaTime;
      }

      requestAnimationFrame(animate);
    };

    animate(0);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      effect.resize(canvas.width, canvas.height);
    });
  }

  render() {
    return (
      <div className="relative">
        <canvas ref={this.canvasRef}></canvas>
        <div className="absolute top-0 left-0 w-full h-full z-10">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CanvasAnimation;
