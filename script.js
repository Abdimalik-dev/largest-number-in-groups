function A(list){
    let LargestArray = [];

    for(let i=0; i<list.length; i++)
    {
        LargestArray.push(Math.max(...list[i]))
    
        
    }

    return (LargestArray)
}

console.log(A([[7, 3, 8, 15], [54, 12, 43, 99], [21, 11, 8]]))
console.log(A([[22, 59, 12], [45, 66, 90], [28, 5, 11]])) ;