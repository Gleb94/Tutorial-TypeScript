const arrauOfNumbers: Array<number> = [1,1,2,3,5]
const arrauOfStrings: Array<string> = ['Hello', 'Vladelen']

function reverse<T>(array: T[]):T[]{
    return array.reverse()
}

reverse(arrauOfNumbers);
reverse(arrauOfStrings);