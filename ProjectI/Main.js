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
        canvas = document.querySelector('#Canvas3DGraph')
        context = canvas.getContext('2d')
        graphSVG = document.querySelector('#CanvasLineGraph')

        requestAnimationFrame(draw3DGraph)
    }).catch(() => {
        console.log('Failed')
    })
}

function dataLoad() {
    fetch('Data.csv').then((response) => {
        return response.text()
    }).then((csv) => {
        let strCSV = csv.toString()
        let arrCSV = strCSV.split('\n')
        let keys = arrCSV[0].slice(0, -1).split(',')

        for (let i = 1; i < arrCSV.length - 1; i++) {
            let tempSplit = arrCSV[i].slice(0, -1).split(',')
            data[tempSplit[0]] = {}

            for (let j = 0; j < tempSplit.length; j++) {
                if (!isNaN(tempSplit[j]) === true){
                    tempSplit[j] = Number(tempSplit[j])
                }
                data[tempSplit[0]][keys[j]] = tempSplit[j]
            }
        } 
    })
}
