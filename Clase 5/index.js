let globalData = {}

let principalContainer = document.getElementById('principal-container')

function updatePage() {
    console.log(globalData);

    Object.entries(globalData).forEach(([key, value]) => {
        // console.log(heroe)
        principalContainer.innerHTML += `<div class="card" style="width: 18rem;" id="${value.id}">
                                            <img src="${value.imagen}" class="card-img-top" alt="...">
                                            <div class="card-body">
                                            <h5 class="card-title">${key}</h5>
                                            <p class="card-text">nombre: ${value.nombre}</p>
                                            <a href="#" class="btn btn-primary">Detalles</a>
                                            </div>
                                        </div>`
    })
}

// ----------------------------------------------------------------------

// const fetchData = () => {
//     fetch('https://peticiones-giweb-3-default-rtdb.firebaseio.com/heroes.json')
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// const requestHeroe = async(settings, id = null) => {
//     if (id) {
//         const response = await fetch(`${globalURL}/${id}.json`, settings)
//         const data = await response.json()
//         console.log(data)
//         return data
//     } else {
//         const response = await fetch(`${globalURL}.json`, settings)
//         const data = await response.json()
//         console.log(data)
//         return data
//     }
// }

const API = 'https://peticiones-giweb-3-default-rtdb.firebaseio.com/heroes'

const getAll = async() => {
    const response = await fetch(API + '.json')
    const data = await response.json()
    globalData = data
    console.log(data)

    updatePage()
}

const getHeroe = async(id) => {
    const URL = `${API}/${id}.json`
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data);
    // return data
}

const addHeroe = async(heroe) => {
    const response = await fetch(API + '.json', {
        method: 'POST', // POST, PUT, DELETE
        body: JSON.stringify(heroe),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()

    console.log(data);
}

const updateHeroe = async(id, heroe) => {
    const response = await fetch(`${API}/${id}.json`, {
        method: 'PUT', // POST, PUT, DELETE
        body: JSON.stringify(heroe),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    console.log(data);
}

const deleteHeroe = async(id) => {
    const response = await fetch(`${API}${id}.json`, {
        method: 'DELETE', // POST, PUT, DELETE
    })

}

// deleteHeroe('-Mvsy4RyyxvI4k8pJQYT')

// updateHeroe('-Mvsy4RyyxvI4k8pJQYT', {
//     heroe: 'deadpool',
//     nombre: 'Wade Wilson',
//     edad: '45',
// })

// addHeroe({
//     heroe: 'deadpool',
//     nombre: 'Wade Wilson',
//     edad: '35',
// })

// getHeroe('batman')
getAll()