

let arr = [10,8,20,5]



// const bubbleSort = (arr) =>{

//     let n = arr.length;


//     for(let a=0;a<n-1;a++){

//         for(let b=0;b<n-1-a;b++){

//             if(arr[b]>arr[b+1]){
//                 [arr[b],arr[b+1]]  = [arr[b+1],arr[b]]



//             }

//         }

//     }

//     return arr
   
// }

// const bubbleSort =(arr) =>{
//     let n = arr.length;
//     for(let a=0;a<n;a++){
//         for(let b=0;b<n-1-a;b++){
//             if(arr[b]>arr[b+1]){
//                 [arr[b],arr[b+1]]  = [arr[b+1],arr[b]]



//             }

//         }

//     }
//     return arr
// }


const bubbleSort=(arr) =>{

    let n = arr.length;

    for(let a=0;a<n;a++){

        for(let b=0;b<n-1-a;b++){
            if(arr[b]>arr[b+1]){

                [arr[b],arr[b+1]] = [arr[b+1],arr[b]]



            }

        }


    }
return arr
}


console.log(
    bubbleSort(arr)
)