arr = [2,4,6,8];
console.log(arr);
arr.push(9); // add from last //
console.log(arr);
arr.pop(); // delete from the last //
console.log(arr);
arr.unshift(1); // add from the first //
console.log(arr);
arr.shift(1); // delete from the first //
console.log(arr);
l = arr.length;
for(i=0;i<=l-1;i++){
    console.log(arr[i]);
}

for(i=0;i<=l-1;i++){
    arr[i]=arr[i]*2;
}
console.log(arr);