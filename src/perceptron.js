
export class perceptron {

    weights = []

    constructor(layouts){
        layouts.forEach(length => {
            const row = []
            for (let i = 0; i < length; i++) {
                row.push(1 / length)
            }
            this.weights.push(row)
        });
    }

    do(input){
        const row2 = this.network(input, 0)
        const row3 = this.network(row2, 1)

    }

    network(inputs, id){
        const row2 = []

        for (let w2 = 0; w2 < this.weights[id+1].length; w2++) {
            let summ = 0

            inputs.forEach((val, key) => {
                summ += val * this.weights[id][key]
            })
            
            row2.push(this.activation(summ))
        }

        return row2
    }

    activation(val){
        return Math.tanh(val)
    }

    

    print(){
        console.log(JSON.stringify(this.weights, '', '   '))
    }

}