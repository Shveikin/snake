
export class brain {


    weight = [
        [.5, .5, .5, .5, .5],
        [.5, .5, .5, .5, .5, .5, .5, .5],
        [.5, .5, .5],
    ]

    getVector([x,y, a,b,c]){



        return this.getRandomInt(-1,1)
    }

    network(inp, id){
        let result = 0

        for (let i = 0; i < inp.length; i++) {
            result += inp[i] * this.weight[id][i]
        }
        
        return result
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}