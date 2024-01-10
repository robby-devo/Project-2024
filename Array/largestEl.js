let arr = [39, 98, 47, 87, 55, 101];

// let arr = [67, 90, 22, 8955, 56, 109, 78, 666];
// let arr = [5,20,40,10];

// function largestIndex(arr) {
//   for (let a = 0; a < arr.length; a++) {
//     let flag = true;
//     for (let b = 0; b < arr.length; b++) {
//       if (arr[a] < arr[b]) {
//         flag = false;
//         break;
//       }
//     }

//     if(flag==true){
//         return a;

//     }
//   }

//   return -1;
// }

function largestIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        flag = false;
        break;
      }
    }

    if(flag==true){
      return i

    }
  }
  return -1
}
console.log(largestIndex(arr));
