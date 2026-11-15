function takrorsizBirlashtir(a, b) {
    let birlashgan = [...a, ...b];
    let natija = [];
    for (let i = 0; i < birlashgan.length; i++) {
        if (!natija.includes(birlashgan[i])) {
            natija.push(birlashgan[i]);
        }
    }
    return natija;
}

console.log(takrorsizBirlashtir([1, 2, 3], [2, 3, 4]));       // kutilgan: [1, 2, 3, 4][cite: 15]
console.log(takrorsizBirlashtir(["html"], ["css", "html"]));   // kutilgan: ["html", "css"][cite: 15]
console.log(takrorsizBirlashtir([5, 6], [5, 7, 8]));           // kutilgan: [5, 6, 7, 8] (o'z misolim)
console.log(takrorsizBirlashtir([], []));                      // kutilgan: [] (chegaraviy holat)
