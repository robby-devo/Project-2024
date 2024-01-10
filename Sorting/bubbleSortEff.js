let arr = [5,3,20,10]


const bubbleSort = (arr) =>{
let n = arr.length
    for(let a=0;a<n-1;a++){
        let swapped = false
        for(let b=0;b<n-1-a;b++){
            if(arr[b]>arr[b+1]){
                [arr[b],arr[b+1]] = [arr[b+1],arr[b]]
                swapped=true

            }

        }

        if(swapped==false){
            break

        }

    }

return arr

}


console.log(bubbleSort(arr))