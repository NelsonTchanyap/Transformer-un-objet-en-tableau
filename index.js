
const population = {

    Douala : 10000000,
    Bepanda : 5000000,
    Bertoua : 3000000,
    Ebolowa : 4000000,
    Limbé : 2500000

}

const wages = {

    Bernard : '150 000 fcfa' ,
    Sebastien : ' 200 000 fcfa' , 
    Hendrick : ' 100 000 fcfa ' ,
    Martin : '140 000 fcfa' ,
    Esteban : '120 000 fcfa'

}

document.querySelector("#population").innerHTML = JSON.stringify(population)
document.querySelector("#wages").innerHTML = JSON.stringify(wages)

document.querySelector("#Pop-keys").innerHTML = Object.keys(population)
document.querySelector("#Pop-values").innerHTML = Object.values(population)
document.querySelector("#Pop-entries").innerHTML = Object.entries(population)

document.querySelector("#wages-keys").innerHTML = Object.keys(population)
document.querySelector("#wages-values").innerHTML = Object.values(population)
document.querySelector("#wages-entries").innerHTML = Object.entries(population)


console.log(Object.entries(population))
console.log(Object.entries(wages))