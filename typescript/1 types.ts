const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

const numberArray: number[] = [1, 1, 2, 3, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 8, 13];

const words: string[] = ['Hello', 'Typescript'];

// Tuple
const contact: [string, number] = ['Vladelen', 1234567];

// Тип Any
let variable: any = 42;
//...
variable = 'New String';
variable = [];

// ====
// function sayMyName (name: string): void{
//     console.log(name);
// }
// sayMyName(name:'Хайзенберг')

//Never
function throwError (message: string): never{
    throw new Error(message);
}