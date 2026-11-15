function unlilarSoni(s) {
    let unlilar = "aeiou";
    let son = 0;
    let kichikSatr = s.toLowerCase();
    for (let i = 0; i < kichikSatr.length; i++) {
        if (unlilar.includes(kichikSatr[i])) {
            son++;
        }
    }
    return son;
}
console.log(unlilarSoni("Dasturlash")); // kutilgan: 3[cite: 15]
console.log(unlilarSoni("OSMON"));      // kutilgan: 2[cite: 15]
console.log(unlilarSoni("JavaScript"));  // kutilgan: 3 (o'z misolim)
console.log(unlilarSoni(""));          // kutilgan: 0 (chegaraviy holat)
