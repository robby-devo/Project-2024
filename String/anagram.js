let str1 = "hello";

let str2 = "ehlok";

function isAnagram(str1,str2){

    let obj ={}

    for(let a=0;a<str1.length;a++){

        if(obj[str1[a]]==undefined){
            obj[str1[a]]=1

        }else {
            obj[str1[a]]++
        }

    }

    // return obj
    for(let items of str2){

        if(!obj[items]){
            return false

        }
        obj[items]--
    }

return true

}



console.log(isAnagram(str1,str2))