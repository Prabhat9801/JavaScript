arr = [2,3,4,5,6];
for (const element of arr) {  // forof loop //
console.log(element);  
}
arr.forEach((element,i,arr) => {  // foreach loop //
    console.log(element,i,arr);
});