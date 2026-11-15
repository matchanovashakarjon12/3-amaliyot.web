function engKopTakrorlangan(arr) {
    if (arr.length === 0) return null; 
    let chastota = {};
    let maxElement = arr[0];
    let maxSoni = 0;

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        chastota[element] = (chastota[element] || 0) + 1;
        
        if (chastota[element] > maxSoni) {
            maxSoni = chastota[element];
            maxElement = element;
        }
    }
    return maxElement;
}

console.log(engKopTakrorlangan([3, 7, 3, 1, 7, 3]));  
console.log(engKopTakrorlangan(["a", "b", "b", "a"])); 
console.log(engKopTakrorlangan([10, 20, 10, 30]));    
console.log(engKopTakrorlangan([5]));                
