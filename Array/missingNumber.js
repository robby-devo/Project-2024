


// let arr=[1,2,3,6]
let arr = [1, 2, 4, 6, 3, 7, 8,10,5]


function missingNumber(arr){

    let missArr = [];

    let minNum = Math.min(...arr)

    let maxNum = Math.max(...arr)

    for(let i=minNum;i<maxNum;i++){

        if(arr.indexOf(i)<0){
            missArr.push(i)


        }

    }

    return missArr

}


console.log(missingNumber(arr))