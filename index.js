import { apple } from "./src/apple.js";
import { board } from "./src/board.js";
import { snake } from "./src/shake.js";


const brd = new board(15,15)


const appl = new apple(7, 8)
const snk  = new snake(7, 10, brd)
const snk2 = new snake(13, 5, brd, 'orange', 2)



snk.eat(appl)
snk2.eat(appl)


brd.add(appl)
brd.add(snk)
brd.add(snk2)



brd.start()