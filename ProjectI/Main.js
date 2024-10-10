window.onload = main

const dataLoadPromise = new Promise((resolve, reject) => {
    try {
        dataLoad()
        resolve('Success')
    } catch {
        reject('Fail')
    }
})

function main() {
    dataLoadPromise.then(() => {
        console.log('Hello')
    }).catch(() => {
        console.log('Failed')
    })
}

function dataLoad() {
    
}