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
// let topArr = ["5","1","2","3"]
// let botArr = ["1","2","3"]


let topLength = topArr.length
let botLength = botArr.length
let topMultiplier = 1
let botMultiplier = 1

// train computer to assembnle bottom number as shortest number of digits

let topNumber = []
let botNumber = []
for (let topIdx = topArr.length -1 ; topIdx >= 0; topIdx--) {
   topNumber.unshift(`${topArr[topIdx]*topMultiplier}`);
  topMultiplier *= 10
}

for (let botIdx = botArr.length -1 ; botIdx >= 0; botIdx--) {
  botNumber.unshift(`${botArr[botIdx]*botMultiplier}`);
 botMultiplier *= 10
}

console.log(topNumber)
 console.log(botNumber)
// for (let )
// for loop through top number by the bottom number
// let counter = 1
// for (let botIdx = botArr.length -1; botIdx >= 0; botIdx --)
// {
//   //
//   total += botArr[botIdx]*botMultiplier*topArr[topArr.length - counter]
//   console.log(`step ${botArr[botIdx]*botMultiplier*topArr[topArr.length - counter]}`)
//   console.log(total)
//   botMultiplier *= 10
// }
// iterate over bottom array to multiply each element of botNum by every element of topNum
let subTot = 0
let total = 0
// for (let botNum of botNumber) {
//   botNum * 
// }

 botNumber.reverse().forEach((num)=> {
  console.log(num)
  //num * each value in topNum
  topNumber.forEach((topNum) => {
    total += topNum * num
  })
  console.log(total)
 })

//   topNumber.reverse().forEach((topNum) => {
//     subTot += num * topNum 
//     //console.log(num)
//   })
//total += subTot
// console.log(subTot)
// })
// console.log("BILLY")
// console.log(subTot)
}

testFunction(["1","2","3","4","5","6","7","8","9"], ["9","8","7","6","5","4","3","2","1"])