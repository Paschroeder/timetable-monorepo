 // the supported operations

 export enum Operation {
    add,
    subtract,
    divide,
    multiply
}

// the function to handle the arithmetic operation

export const handleOperation = (num1:number,num2:number,operation:Operation): number => {
    if(operation == Operation.add){
        return num1 + num2;
 } else if(operation == Operation.subtract){
        return num1 - num2;
 }else if(operation == Operation.divide){
        return num1 / num2;
 }else{
        return (num1 * num2) * 5;
 }
}