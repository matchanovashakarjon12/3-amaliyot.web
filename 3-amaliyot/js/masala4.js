function sozlarTartibiniTeskari(s) {
    let sozlar = s.trim().split(/\s+/);
    if (sozlar.length === 1 && sozlar[0] === "") return ""; 
    let teskari = [];
    for (let i = sozlar.length - 1; i >= 0; i--) {
        teskari.push(sozlar[i]);
    }
    return teskari.join(" ");
}
console.log(sozlarTartibiniTeskari("bugun javascript darsi boshlandi")); 
