let arr = [10,20,30,40,50,60,70,80,90,100];

let data = 80


// function bSearch(arr,data){

//     let low=0;
//     let high = arr.length-1;

//     while(low<=high){

//         let mid = Math.floor((low+high)/2)
//         if(data > arr[mid]){
//             low = mid+1;

//         }else if(data<arr[mid]){
// high=mid-1;

//         }else{
//             console.log(mid)
//             return
//         }

//     }
// return -1
// }

function bSearch(arr,data){
    let low =0;
    let high = arr.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2)

        if(data>arr[mid]){
            low=mid+1;

        }else if(data<arr[mid]){
            high=mid-1

        }else{
            return mid
        }

    }
    return -1
}



console.log(bSearch(arr,data))