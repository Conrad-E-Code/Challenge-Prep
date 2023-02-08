// [1,2,3] top number top number.last is the ones place
// topArrEnd = topArr[topArr.length -1]

// identify the end of the array
// topArr[0]
// while topArrEnd 
// [1,2,3] bottom number
function testFunction(nums1, nums2) {
  //condiotional for small number on bottom and big number top
  let topArr = []
  let botArr = []
 function assignPlaces(nums1, nums2) {
    if (nums1.length > nums2.length) {
       topArr = nums1
       botArr = nums2
    }
    else {
     topArr = nums2
      botArr = nums1
    }
  }
 assignPlaces(nums1, nums2)
 console.log(`PLaces Assigned topArr=${topArr} OOOOO botArr=${botArr}`)
 console.log(topArr)
 console.log(botArr)
// let topArr = ["5","1","2","3"]
// let botArr = ["1","2","3"]


// train computer to assemble bottom number as shortest number of digits
botIdx = botArr.length -1
topIdx = topArr.length -1
let zerocunt = 0
console.log("X_____________________________________")
botArr.forEach((botDigit) => {
  let currentLineArr = []
  topArr.reverse().forEach((digit)=>{
    currentLineArr.unshift(digit*botArr[botIdx])
    
  })
  // add zerocount number of zeros to the array.
let zerocounter = zerocunt
while(zerocounter > 0) {
  currentLineArr.push(0)
  zerocounter -= 1
}
  console.log(currentLineArr)
  // console.log(zerocunt)
  zerocunt +=1
})

// let firstLine = botArr[botIdx]* topArr[topIdx]

// firstLineArr.unshift(firstLine)
//console.log(firstLineArr)


}

testFunction(["1","2","3","4","5"], ["1","2","3"])


// i'm thinking we structure the whole thing in arrays
//We're gonna run through it more humanlike