let s1 = "ABEF";
let s2 = "AF";

// function subseq(s1,s2){
//     let j= 0;

//     for(i=0;i<s1.length && j<s2.length;i++){

//         if(s1[i]==s2[j]){
//             j++

//         }

//     }
//     if(j==s2.length){
//         return true

//     }
// }

function subseq(s1, s2) {
  let j = 0;

  for (let i = 0; i < str1.length && str2.length; i++) {
    if (s1[i] === s2[j]) {
      j++;
    }
  }

  if(j==s2.length){
    return true

  }
}

console.log(subseq(s1, s2));
