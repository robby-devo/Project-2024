let arr = [10, 8, 0, 0, 12, 0,14];

// function moveZero(arr) {
//   let count = 0;

//   for (let a = 0; a < arr.length; a++) {
//     if (arr[a] !== 0) {
//       [arr[a], arr[count]] = [arr[count], arr[a]];
//       count++;
//     }
//   }

//   return arr;
// }



function moveZero(arr){
    let count =0;
    for(let a=0;a<arr.length;a++){
        if(arr[a]!==0){
[arr[a],arr[count]] = [arr[count],arr[a]]
count++
        }

    }
    return arr
}
console.log(moveZero(arr));
