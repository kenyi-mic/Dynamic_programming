const bestSum = (targetSum, numbers) =>{
 
    if(targetSum === 0) return []
    if(targetSum < 0) return null;

    let shortestCombination = null;

    for(let num of numbers){
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if(remainderCombination !== null){
            const combination = [...remainderResult, num]
            if()
        }
    }
}