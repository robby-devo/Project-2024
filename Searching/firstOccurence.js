let arr = [5, 10, 10, 20, 20];

let x = 20;

// function firstOccur(arr,x){

//     let low =0;
//     let high = arr.length-1;

//     while(low<=high){
//         let mid = Math.floor((low+high)/2)

//         if(arr[mid] == x){
//             if(mid==0 || arr[mid-1] !==x){
//                 return mid;

//             }else{
//                 high=mid-1;
//             }

//         }else if(x >arr[mid]){
//             low=mid+1;

//         }else if(x<arr[mid]) {
//             high=mid-1

//         }

//     }

// }

// function firstOccur(arr,x){
//   let low = 0;
//   let high = arr.length-1;

//   while(low<=high){
//     let mid = Math.floor((low+high)/2)

//     if(arr[mid] === x){

//       if(mid==0 || arr[mid-1]!==x){
//         return mid

//       }else{
//         high = mid-1
//       }



//     }else if(x > arr[mid]){
//       low = mid+1;

//     }else if(x<arr[mid]){
//       high = mid-1;


//     }

//   }
// }


function firstOccur(arr,x){
  let low =0;
  let high = arr.length-1

  while(low<=high){
    let mid = Math.floor((low+high)/2)

    if(arr[mid]==x){
      if(mid==0 || arr[mid-1]!==x){
        return mid

      }else{
        high=mid-1
      }

    }else if(x>arr[mid]){
      low=mid+1;

    }else if(x<arr[mid]){
      high=mid-1

    }
  }
}

console.log(firstOccur(arr, x));
