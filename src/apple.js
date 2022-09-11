import { point } from "./point.js"


export class apple {

    body = []

    constructor(x = 3, y = 3){
        this.position = new point(x, y, '()', 'green')
        this.body.push(this.position)
    }
} 