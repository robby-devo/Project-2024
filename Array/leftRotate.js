let arr = [1, 2, 3, 4];

// function leftRotate(arr){
// let first = arr[0]

//     for(let a=1;a<arr.length;a++){

// arr[a-1] =arr[a];

//     }

// arr[arr.length-1] = first

//     return arr
// }


function leftRotate(arr){
    let x= arr[0]

    for(let a=1;a<arr.length;a++){
        arr[a-1] = arr[a]


    }
    arr[arr.length-1] = x
    return arr
}

console.log(leftRotate(arr));
