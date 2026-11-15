function raqamlarKopaytmasi(n) {
    if (n === 0) return 0;
    let kopaytma = 1;
    let temp = n;
    while (temp > 0) {
        let qoldiq = temp % 10;
        kopaytma *= qoldiq;
        temp = Math.floor(temp / 10);
    }
    return kopaytma;
}

console.log(raqamlarKopaytmasi(2345)); // kutilgan: 120
console.log(raqamlarKopaytmasi(105));  // kutilgan: 0
console.log(raqamlarKopaytmasi(7));   // kutilgan: 7 (o'z misolim)
console.log(raqamlarKopaytmasi(0));   // kutilgan: 0 (chegaraviy holat)
