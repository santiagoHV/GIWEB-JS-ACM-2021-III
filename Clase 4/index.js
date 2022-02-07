//CLOSURES

const miFuncion = function(a) {
    return a
}



// console.log(miFuncion(10))

// const moneyBox = (coins) => {
//     let savedCoins = 0;

//     savedCoins += coins;
//     console.log(`MoneyBox: $${savedCoins}`)
// }

// moneyBox(5)
// moneyBox(10)
// moneyBox(15)

const moneyBox = () => {
    let savedCoins = 0;

    const countCoins = (coins) => {
        savedCoins += coins;
        console.log(`MoneyBox: $${savedCoins}`)
    }

    return countCoins
}

let myMoneyBox = moneyBox()

// myMoneyBox(5)
// myMoneyBox(10)
// myMoneyBox(100)

//SIMULAR ATRIBUTOS PRIVADOS

const person = () => {
    let name = 'name'
    return {
        getName: () => {
            return name
        },
        setName: (value) => {
            name = value
        }
    }
}

const juan = person()
console.log(juan.getName())

juan.setName('Juan')
console.log(juan.getName())