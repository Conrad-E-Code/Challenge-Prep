const singleNumber = function(nums) {
    let found = {}
    for (let i of nums) {
        if (found[i] == null) found[i] = 0
        found[i]++
    }
    for (let key in found) {
        if(found[key] === 1 ) return Number(key)
    }

}