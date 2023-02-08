// strings 
//javascript methods .include .split
//Split the string with the needle?
// #split needle and hay
// #compare the first letter of needle to fl of haystack
// const idxNeedle = 0
// const idxStack = 0
// while loop conditon idx less than stack.length
// check to see if they match loo
//LOOP 1 : while idxNeedle > needle.length
// if they dont loop 2
//increment idxStack reset idxNeedle to 0
// if they do match increment needle and stack
// maybe reuse code
// 
//slice out a chunk matching needle length
function strStr(haystack, needle) {
    const needleLength = needle.length
    let idxStack = 0
    let hayArr = haystack.split("")
    let needleArr = needle.split("")
    while (idxStack < haystack.length) {
        console.log(`Wendy ${idxStack} needleArr.join => ${needleArr.join("")} hayArr => ${hayArr.slice(idxStack, idxStack + needleLength).join("")}`)
        
        if (needleArr.join("") === hayArr.slice(idxStack, idxStack + needleLength).join("")) {
            console.log(`Bill ${idxStack}`)
            return idxStack
        }
        else {
            idxStack += 1
        }

    }
    return -1
}

var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};