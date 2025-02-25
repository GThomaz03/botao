const button = document.getElementById("button");
const text = document.getElementById("text");
const porcent = document.getElementById("porcentagem");
const melhor = document.getElementById("melhor");

let val = 0
let valPorcent = 100
let best = 0

button.addEventListener("click", () => {
    let a = randNum()
    console.log(a);
    if (val >= a) {
        if (val > best) {
            best = val
            melhor.innerHTML = best
        }
        val = 0
        valPorcent = 100
        text.innerHTML = val
        porcent.innerHTML = valPorcent + "%"
    } else {
        val += 1;
        text.innerHTML = val
        valPorcent -= 1
        porcent.innerHTML = valPorcent + "%"
    }
})

function randNum() {
    return Math.floor(Math.random() * 100)
} 