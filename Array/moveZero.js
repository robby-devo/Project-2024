let arr = [10, 0, 0, 7, 8, 0];

// function moveZero(arr){
//     for(let a=0;a<arr.length;a++){

//         if(arr[a]==0){
//             for(let b=a+1;b<arr.length;b++){
//                 if(arr[b]!==0){
//                     [arr[a],arr[b]] = [arr[b],arr[a]]
//                     break;

//                 }

//             }

//         }

//     }
//     return
// }

function moveZero(arr){
  for(let a=0;a<arr.length;a++){
    if(arr[a]==0){
      for(let b=a+1;b<arr.length;b++){
        if(arr[b]!==0){
          [arr[a],arr[b]] = [arr[b],arr[a]]
          break

        }

      }

    }

  }
  return arr
}

console.log(moveZero(arr));
