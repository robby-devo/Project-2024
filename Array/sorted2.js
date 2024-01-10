// let arr = [8, 12, 15];
let arr = [100,20,200];
// let arr = [100,20,200];


// let arr = [100,20,200];



// function isSorted(arr){
//     for(let a=1;a<arr.length;a++){
//         if(arr[a]<arr[a-1]){
//             return false

//         }

//     }
//     return true;
// }


function isSorted(arr){
    for(let a=1;a<arr.length;a++){
        if(arr[a]<arr[a-1]){
            return false

        }

    }
    return true
}

console.log(isSorted(arr))