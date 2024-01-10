let arr = [10, 54, 87, 63, 99];
// let arr = [67,90,22,8955,56,109,78,666];

// function largestIndex(arr){

//     let res= 0;

//     for(let a=1;a<arr.length;a++){

//         if(arr[res]<arr[a]){
//             res=a;

//         }

//     }

//     return res;

// }

function largestIndex(arr){
  let res=0;

  for(let a=1;a<arr.length;a++){
    if(arr[a]>arr[res]){
      res=a;

    }

  }
  return res
}

console.log(largestIndex(arr));
