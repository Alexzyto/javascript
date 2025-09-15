let num = [5, 8, 2, 9, 3]
num.push(7)

console.log(`O vetor tem ${num.length} posições`) 
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}
console.log(`O valor 8 está na posição ${pos}`)
console.log(`O vetor tem ordem crescente fica ${num.sort()}`)
console.log(`O primeiro valor do vetor, após colocar em ordem crescente, é ${num[0]}`)

