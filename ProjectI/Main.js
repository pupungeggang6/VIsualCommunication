window.onload = main
window.oncontextmenu = rightClick

function main() {
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
        console.log(data)
    }).then(() => {
        console.log('Hello')
        valueConnectLines = document.querySelector('#ValueConnectLines')
        window.addEventListener('mouseup', mouseUp, false)
        requestAnimationFrame(draw3DGraph)
    }).catch((error) => {
        console.log(error)
    })
}

function mouseUp(event) {
    let x = event.clientX
    let y = event.clientY
    let button = event.button

    if (button === 2) {
        alert(`${x}, ${y}`)
    }
}

function rightClick() {
    return false
}