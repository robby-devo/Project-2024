let arr = [10, 20, 30, 40];

// function reverseArr(arr){

//    let low=0;

//    let high = arr.length-1;

//    while(low<high){
//     [arr[low],arr[high]] = [arr[high],arr[low]]
//     low++;
//     high--;

//    }

//    return arr

// }

function reverseArr(arr){
    let low =0;
    let high = arr.length-1;

    while(low<high){

        [arr[low],arr[high]]  = [arr[high],arr[low]]
        low++;
        high--

    }
    return arr
}

console.log(reverseArr(arr));
