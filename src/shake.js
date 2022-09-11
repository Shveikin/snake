import { brain } from "./brain.js"
import { point } from "./point.js"



export class snake {

    body = []
    vector = 1

    constructor(x, y, board, color = 'blue',vector = 1){

        this.vector = vector
        this.newHead(x, y)
        this.world = board
        this.color = color
        


        // const xPos = this.pointof(3, -1)
        // this.body.push(new point(xPos[0], xPos[1], '++', 'red'))
    }

    newHead(x, y){
        this.head = new point(x, y, '  ', this.color)
        this.body.push(this.head)
        this.updateVector()
    }

    updateVector(){
        // switch(this.vector){
        //     case 1:
        //         this.head.symbol = '/\\'
        //     break;
        //     case 2:
        //         this.head.symbol = '< '
        //     break;
        //     case 3:
        //         this.head.symbol = '\\/'
        //     break;
        //     case 4:
        //         this.head.symbol = ' >'
        //     break;
        // }
    }

    eat(appl) {
        this.appl = appl

        // const alpPos = this.pointof(...this.getApplOffset())
        // this.body.push(new point(alpPos[0], alpPos[1], '@@'))
    }

    pointof(frontshift, rightshift){
        let corx = 0
        let cory = 0
        switch (this.vector){
            case 1:
                cory = frontshift *-1
                corx = rightshift
            break;
            case 2:
                corx = frontshift *-1
                cory = rightshift *-1
            break;
            case 3:
                cory = frontshift
                corx = rightshift *-1
            break;
            case 4:
                corx = frontshift
                cory = rightshift
            break;
        }
        return [this.head.x + corx, this.head.y + cory]
    }

    getApplOffset(){
        const apl = this.appl.position
        const front = this.head.y - apl.y 
        const side = apl.x - this.head.x

        let f = front
        let s = side
        
        switch (this.vector){
            case 2:
                f = side*-1
                s = front
            break;
            case 3:
                f = front*-1
                s = side*-1
            break;
            case 4:
                s = front*-1
                f = side
            break;
        }

        return [f, s]
    }

    find(){

        const [applfront, applside] = this.getApplOffset()
	
        const a = this.world.isset(this.pointof(0, -1))
        const b = this.world.isset(this.pointof(-1, 0))
        const c = this.world.isset(this.pointof(0, +1))

	
        return [applfront, applside, a, b, c]
    }


    think(){
        const insert = this.find()
        const newVector = this.vector + brain.getVector(insert)
        if (newVector>4)
            this.vector = 1
        else if (newVector<1)
            this.vector = 4
        else
            this.vector = newVector
    }



    move(){
        const [x, y] = this.pointof(1, 0)
        let stop = false
        

        if (this.appl.position.x==x && this.appl.position.y==y){
            this.appl.position.y = 6;
        } else {
            
            if (this.world.isset([x, y])){
                this.world.stop()
                this.head.symbol = 'XX'
                stop = true
            } else {
                this.body.shift()
            }

        }

        if (!stop)
            this.newHead(x, y)

    }
} 
