// objects is kind of like map / dictionary where we have "Key-value" pairs

let x={
    name:"Prabhat Singh",
    Branch:"Cse(AI)",
    Roll: 42,
    ismarried : false
}
console.log(x);
console.log(x.Branch);
for (const key in x) {  // forin loop //
    if (Object.prototype.hasOwnProperty.call(x, key)) {
       console.log(key,x[key]);
        
    }
}