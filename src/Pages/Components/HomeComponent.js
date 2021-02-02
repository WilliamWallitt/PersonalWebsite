import React from 'react'
import Sketch from "react-p5";

export default class RectAnimation extends React.Component {

    angle = 90;
    rectHeight=5;
    diff=25;

    setup = (p5, canvasParentRef) => {

        p5.createCanvas(window.innerWidth, window.innerHeight).parent(canvasParentRef);
        p5.noStroke();
        p5.rectMode(p5.CENTER);
        p5.frameRate(60);
        this.windowResized(p5)

    };

    windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);

    }

    draw = p5 => {

        p5.background(255);
        p5.blendMode(p5.MULTIPLY);
        p5.push();
        p5.translate(p5.width/2, p5.height/2);

        this.firstrect(p5)
        this.secondrect(p5)
        this.thirdrect(p5)
        this.fourthrect(p5)
        this.fifthrect(p5);
        this.sixthrect(p5);
        this.seventhrect(p5);
        this.eightrect(p5);
        this.ninethrect(p5);
        this.thenthrect(p5);

        // NOTE: Do not use setState in draw function or in functions that is executed in draw function... pls use normal variables or class properties for this purposes
        p5.blendMode(p5.BLEND);
        this.rectHeight = this.rectHeight + this.diff;
    };

    firstrect = p5 => {
        this.angle = this.angle + 0.0001;
        p5.rotate(p5.degrees(this.angle));
        p5.rect(150, 0, 180, this.rectHeight);
    }

    secondrect = p5 => {
        //translate(width/8, height/8);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(192, 178, 157);
        // p5.fill(0, 0, 0)
        p5.rect(150, 0, 180, this.rectHeight);
    }

    thirdrect = p5 => {
        //translate(width/16, height/16);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(239, 201, 76);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    fourthrect = p5 => {
        //translate(width/32, height/32);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(226, 122, 63);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    fifthrect = p5 => {
        //translate(width/64, height/64);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(223, 73, 73);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    sixthrect = p5 => {
        //translate(width/6, height/6);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(51, 77, 92);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    seventhrect = p5 => {
        //translate(width/8, height/8);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(92, 178, 157);
        p5.rect(150, 0, 180, this.rectHeight);
    }
    eightrect = p5 => {
        //translate(width/16, height/16);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(239, 201, 76);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    ninethrect = p5 => {
        //translate(width/32, height/32);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(226, 122, 63);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    thenthrect = p5 => {
        //translate(width/64, height/64);
        p5.rotate(p5.degrees(this.angle));
        p5.fill(223, 73, 73);
        p5.rect(150, 0, 180, this.rectHeight);
    }

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />;
    }

}
