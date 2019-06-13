let res = [0, 2, 3, 4, 5, 6, 2, 4, 1, 10, 0, 3, 6, 7, 2, 3, 6, 4, 2, 1, 5];
let fin = 0;
let sum = 0;
let turnos = 10;
let a = 0;
for (let i = 1; i < res.length; i++) {
    let b = 0;
    b = res[i] + res[i + 1];
    if (res[i] == 10) {
        b = res[i+2] + res[i+3]+ res[i+4];
    }
    if (res[i]+res[i+1] == 10) {
        b = res[i] + res[i+1] + res[i+2];
    }
    sum += b;
    i++;
}
console.log(sum);