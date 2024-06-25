// function decoration
// function experation


function doOperation(operation,a,b){
    return operation(a,b)
}
const operate=function(a,b){
    return operation a*b
}
console.log(doOperation(operate,5,6));