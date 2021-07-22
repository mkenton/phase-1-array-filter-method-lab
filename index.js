const { arrayContaining } = require("expect")

function findMatching(arr, string) {
    string = string.toUpperCase()
    return arr.filter(function (x) {return x.toUpperCase() === string})
}

function fuzzyMatch(arr, prefix) {
    return arr.filter(el => el.startsWith(prefix))
}
   
function matchName(arr,string) {
    return arr.filter(el => el.name === string)
}