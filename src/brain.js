
export class brain {

    static getVector([x,y, a,b,c]){
        return brain.getRandomInt(-1,1)
    }

    static getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}