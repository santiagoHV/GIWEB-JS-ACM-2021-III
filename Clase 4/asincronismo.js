const miPromesa = new Promise((resolve, recject) => {
    setTimeout(() => {
        recject('Error');
    }, 1000);

    setTimeout(() => {
        resolve({
            nombre: 'Juan',
            edad: 30
        })
    }, 2000)
})

miPromesa
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })