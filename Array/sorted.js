// let arr = [8, 12, 15];
let arr = [100, 20, 200];
// let arr = [100, 20, 200];

// let arr = [100,20,200];

// function isSorted(arr) {
//   for (let a = 0; a < arr.length; a++) {
//     for (let b = a + 1; b < arr.length; b++) {
//       if (arr[a] > arr[b]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

function isSorted(arr){
  for(let a=0;a<arr.length;a++){
   for(let b=a+1;b<arr.length;b++){
    if(arr[a]>arr[b]){
      return false

    }

   }

  }
  return true
}

console.log(isSorted(arr));
