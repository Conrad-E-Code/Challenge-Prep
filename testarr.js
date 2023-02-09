let arrOut = ["1", "2","10"]
//iterate through the array and carry the onemptied
//let arrOut = [0]
for (let i = arrOut.length - 1; i >= 0; i-- ) {
    console.log("Begin for loop")
    console.log(arrOut[i])
    if (arrOut[i] >= 10){
        arrOut[i-1] += parseInt(arrOut[i]/10)
    }
    // console.log(arrOut)
    // if(num >= 10){
    //     arrOut[arrOut.length -1] += parseInt(num/10)
    //     console.log(parseInt(num/10))
    //     arrOut.push(num%10)
    //     console.log("Bill")
    // }
    // else
    // {
    //     console.log("Bob")
    //     arrOut.push(num)
    // }
    // console.log(arrOut)
}
console.log(arrOut)