let str = "ABCCBA";

// let str = "ABCDBA";



// function palindrome(str){
//     let begin = 0;

//     let end = str.length-1;

//    while(begin<end){
//     if(str[begin]!==str[end]){
//         return false;

//     }

//     begin++;
//     end--;
//    }

//    return true

// }

function palindrome(str){
    let i=0;
    let j= str.length-1;

    while(i<j){

        if(str[i]!==str[j]){
            return false

        }

        i++;
        j--

    }
    return true
}



console.log(
    palindrome(str)
)