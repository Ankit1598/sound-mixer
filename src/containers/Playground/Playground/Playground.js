import { Howl } from "howler";
import Konva from "konva";
import React, { Component } from "react";
import { Circle, Layer, Stage } from "react-konva";
import { Spring } from "react-spring/renderprops";
import { v4 as uuidv4 } from "uuid";

class Playground extends Component {
	constructor(props) {
		super(props);

		this.state = {
			circles: [],
		};
	}

	componentDidMount() {
		window.addEventListener("keydown", (event) => this.onKeyDown(event));
	}

	onKeyDown(event) {
		const array = this.state.circles;
		const keyData = {
			q: {
				sound: new Howl({
					src: ["sounds/bubbles.mp3"],
				}),
			},
			w: {
				sound: new Howl({
					src: ["sounds/clay.mp3"],
				}),
			},
			e: {
				sound: new Howl({
					src: ["sounds/confetti.mp3"],
				}),
			},
			r: {
				sound: new Howl({
					src: ["sounds/corona.mp3"],
				}),
			},
			t: {
				sound: new Howl({
					src: ["sounds/dotted-spiral.mp3"],
				}),
			},
			y: {
				sound: new Howl({
					src: ["sounds/flash-1.mp3"],
				}),
			},
			u: {
				sound: new Howl({
					src: ["sounds/flash-2.mp3"],
				}),
			},
			i: {
				sound: new Howl({
					src: ["sounds/flash-3.mp3"],
				}),
			},
			o: {
				sound: new Howl({
					src: ["sounds/glimmer.mp3"],
				}),
			},
			p: {
				sound: new Howl({
					src: ["sounds/moon.mp3"],
				}),
			},
			a: {
				sound: new Howl({
					src: ["sounds/pinwheel.mp3"],
				}),
			},
			s: {
				sound: new Howl({
					src: ["sounds/piston-1.mp3"],
				}),
			},
			d: {
				sound: new Howl({
					src: ["sounds/piston-2.mp3"],
				}),
			},
			f: {
				sound: new Howl({
					src: ["sounds/prism-1.mp3"],
				}),
			},
			g: {
				sound: new Howl({
					src: ["sounds/prism-2.mp3"],
				}),
			},
			h: {
				sound: new Howl({
					src: ["sounds/prism-3.mp3"],
				}),
			},
			j: {
				sound: new Howl({
					src: ["sounds/splits.mp3"],
				}),
			},
			k: {
				sound: new Howl({
					src: ["sounds/squiggle.mp3"],
				}),
			},
			l: {
				sound: new Howl({
					src: ["sounds/strike.mp3"],
				}),
			},
			z: {
				sound: new Howl({
					src: ["sounds/suspension.mp3"],
				}),
			},
			x: {
				sound: new Howl({
					src: ["sounds/timer.mp3"],
				}),
			},
			c: {
				sound: new Howl({
					src: ["sounds/ufo.mp3"],
				}),
			},
			v: {
				sound: new Howl({
					src: ["sounds/veil.mp3"],
				}),
			},
			b: {
				sound: new Howl({
					src: ["sounds/wipe.mp3"],
				}),
			},
			n: {
				sound: new Howl({
					src: ["sounds/zig-zag.mp3"],
				}),
			},
			m: {
				sound: new Howl({
					src: ["sounds/moon.mp3"],
				}),
			},
		};

		const newId = uuidv4();
		const newCircle = {
			x: Math.floor(Math.random() * (window.innerWidth + 1)),
			y: Math.floor(Math.random() * (window.innerHeight + 1)),
			color: Konva.Util.getRandomColor(),
			duration: (Math.random() * 1.7 + 0.5) * 500,
			id: newId,
		};

		if (keyData[event.key]) {
			array.push(newCircle);
			this.setState({ circles: array });
			keyData[event.key].sound.play();

			setTimeout(() => {
				if (newCircle.id === newId) {
					const array = this.state.circles;
					const updateArr = array.filter((x) => x !== newCircle);
					this.setState({ circles: updateArr });
				}
			}, newCircle.duration);
		}
	}

	render() {
		return (
			<Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
					{this.state.circles.map((circle) => (
						<Spring
							key={circle.id}
							config={{ duration: circle.duration }}
							from={{ radius: 200 }}
							to={{ radius: 0 }}
						>
							{(props) => [
								<Circle
									radius={props.radius}
									x={circle.x}
									y={circle.y}
									fill={circle.color}
								/>,
								<Circle
									radius={props.radius + 5}
									x={circle.x}
									y={circle.y}
									stroke={"white"}
								/>,
								<Circle
									radius={props.radius + 15}
									x={circle.x}
									y={circle.y}
									stroke={circle.color}
								/>,
								<Circle
									radius={props.radius + 20}
									x={circle.x}
									y={circle.y}
									stroke={"white"}
								/>,
							]}
						</Spring>
					))}
				</Layer>
			</Stage>
		);
	}
}

export default Playground;
