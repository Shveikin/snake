import { Canvas } from "terminal-canvas";
import {point} from './point.js';

export class board {

	layers = []

	constructor(sizex, sizey){
		this.size = [sizex, sizey]
		this.canvas = Canvas.create();
		this.canvas.hideCursor()
		this.reset()
	}

	start(){
		this.render()

		this.time = setInterval(() => {
			this.layers.forEach(snake => {
				if ('move' in snake){
					snake.think()
					snake.move()
				}
			})
			this.render()
		
		}, 500)
	}

	stop(){
		clearInterval(this.time)

		this.drwp(0, this.size[1]+6, 'red')
		console.log('stop')
	}

	reset(){
		this.drawboard()
		this.canvas.background('white')
	}
	
	add(element){
		this.layers.push(element)
	}

	drwp(x,y,color = 'white'){
		this.drw(new point(x,y,'  ', color))
	}

	drw(point){
		const y = point.y
		const x2 = point.x*2

		this.canvas.background(point.color)

		this.canvas.moveTo(x2, y)
		this.canvas.write(point.symbol[0])
		
		this.canvas.moveTo(x2+1, y)
		this.canvas.write(point.symbol[1])
	}

	render(){
		this.reset();
		

		this.layers.forEach(layer => {
			layer.body.forEach(itm => {
				this.drw(itm)
			})
		})

		this.drwp(0, this.size[1]+5, 'red')
		this.canvas.flush()
	}


	drawboard(){
		for (let x = 0; x <= this.size[0]; x++) {
			for (let y = 0; y <= this.size[1]; y++) {
				let color = 'black'
				if (x==0 || y==0 || x==this.size[0] || y==this.size[1])
					color = 'white'
				
				this.drwp(x, y, color)
			}
		}
	}


	isset([x, y]){
		if (x<=0 || x>=this.size[0]) return true
		if (y<=0 || y>=this.size[1]) return true

		for (const layer of this.layers) {
			for (const itm of layer.body){
				if (itm.x==x && itm.y==y)
					return true
			}
		}
		
		return false
	}

}

