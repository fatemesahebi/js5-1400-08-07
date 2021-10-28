function cryptographicString(iterateNum,strLength,str){
    //check inputs
    if(typeof(iterateNum)!='number'||typeof(strLength)!='number'||typeof(str)!='string')
        return 'please insert correct input'

    //algorithm:
    let strArr=str.split('')
    for(let i=0;i<iterateNum;i++){
       let car=strArr.splice(strLength-1,1)
    strArr.splice(0,0,car[0])
        for(let j=0;j<strLength;j++){
          let n=strArr[j].charCodeAt(0)
            //setting for character Z
            if(n===90) n=64
            //setting for character z
            if (n===122) n=96
            //setting for character 9
            if (n===57) n=47
            strArr[j]=String.fromCharCode(n+1)
        }
    }
    return strArr.join('')
}

console.log(cryptographicString(5,4,'abcd'))
console.log(cryptographicString(1,3,'abz'))


