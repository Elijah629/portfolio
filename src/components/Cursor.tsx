"use client";

import { Variants, motion } from "framer-motion";
import React from "react";

import { parents } from "../utils/helper/DOMGetParents";
import { accentColor, primaryColor } from "../utils/tailwind/themeVariables";

type CursorVarient = "default" | "hover" | "active" | "clicked" | "invisible";

interface CursorState {
	varient: CursorVarient;
}

// eslint-disable-next-line @typescript-eslint/ban-types
export class Cursor extends React.Component<{}, CursorState> {
	mouseX = 0;
	mouseY = 0;
	mouseisDown = false;
	mouseisInWindow = true;

	// eslint-disable-next-line @typescript-eslint/ban-types
	constructor(props: {}) {
		super(props);

		this.state = {
			varient: "default"
		};

		this.mouseMove = this.mouseMove.bind(this);
		this.mouseEnter = this.mouseEnter.bind(this);
		this.mouseLeave = this.mouseLeave.bind(this);
		this.mouseDown = this.mouseDown.bind(this);
		this.mouseUp = this.mouseUp.bind(this);

		this.updateCursor = this.updateCursor.bind(this);
	}

	componentDidMount(): void {
		window.addEventListener("mousemove", this.mouseMove);
		window.addEventListener("mousedown", this.mouseDown);
		window.addEventListener("mouseup", this.mouseUp);
		document.addEventListener("mouseenter", this.mouseEnter);
		document.addEventListener("mouseleave", this.mouseLeave);
		this.updateCursor();
	}

	componentWillUnmount(): void {
		window.removeEventListener("mousemove", this.mouseMove);
		window.addEventListener("mousedown", this.mouseDown);
		window.addEventListener("mouseup", this.mouseUp);
		document.removeEventListener("mouseenter", this.mouseEnter);
		document.removeEventListener("mouseleave", this.mouseLeave);
	}

	updateCursor() {
		let varient: CursorVarient = "default";

		const hoverElement = document.elementFromPoint(
			this.mouseX,
			this.mouseY
		);

		if (!hoverElement) return;

		const interactable = parents(hoverElement)
			.map(e => e.hasAttribute("data-interactable"))
			.some(x => x);

		if (!this.mouseisInWindow) {
			varient = "invisible";
		} else if (this.mouseisDown && interactable) {
			varient = "clicked";
		} else if (interactable) {
			varient = "hover";
		} else if (this.mouseisDown) {
			varient = "active";
		}

		this.setState({
			varient: varient
		});
	}

	mouseDown() {
		this.mouseisDown = true;
		this.updateCursor();
	}

	mouseUp() {
		this.mouseisDown = false;
		this.updateCursor();
	}

	mouseMove(e: MouseEvent) {
		this.mouseX = e.clientX;
		this.mouseY = e.clientY;
		this.updateCursor();
	}

	mouseLeave() {
		this.mouseisInWindow = false;
		this.updateCursor();
	}

	mouseEnter() {
		this.mouseisInWindow = true;
		this.updateCursor();
	}

	render() {
		const cursorMotion: Variants = {
			default: {
				opacity: 0.6,
				scale: 1,
				backgroundColor: accentColor,
				x: this.mouseX,
				y: this.mouseY
			},
			active: {
				opacity: 1,
				scale: 1.2,
				x: this.mouseX,
				y: this.mouseY,
				backgroundColor: accentColor
			},
			hover: {
				opacity: 0.8,
				scale: 1,
				x: this.mouseX,
				y: this.mouseY,
				backgroundColor: primaryColor
			},
			clicked: {
				opacity: 1,
				scale: 1.2,
				x: this.mouseX,
				y: this.mouseY,
				backgroundColor: primaryColor
			},
			invisible: {
				opacity: 0,
				scale: 0,
				x: this.mouseX,
				y: this.mouseY
			}
		};
		return (
			<motion.span
				animate={this.state.varient}
				variants={cursorMotion}
				initial="default"
				transition={{ type: "spring", stiffness: 500, damping: 28 }}
				className="pointer-events-none fixed z-10 h-3 w-3 origin-center rounded-[50%]"
				style={{
					transform: `translate(${this.mouseX}px, ${this.mouseY}px)`
				}}></motion.span>
		);
	}
}
