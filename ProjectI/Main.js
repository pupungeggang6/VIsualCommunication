window.onload = main

function main() {
    fillBarGraph()
    fillGraphDate()
}

function fillBarGraph() {
    let DOMBarGraph = document.getElementById('BarGraph')

    let dateList = ['09-23', '09-25', '09-27', '09-29', '10-01', '10-03', '10-05']

    DOMBarGraph.innerHTML = ''

    for (let i = 0; i < 7; i++) {
        let percentageInsert = data[dateList[i]]['Insert'] / 400 * 100
        let percentageDelete = data[dateList[i]]['Delete'] / 400 * 100
        let colorInsert = `hsl(240, 100%, ${80 - 60 * percentageInsert / 100}%)`
        let colorDelete = `hsl(0, 100%, ${80 - 60 * percentageDelete / 100}%)`
        DOMBarGraph.innerHTML += `<tr><td><div class="Bar" border: 2px solid black;></div></td></tr>`
        DOMBarGraph.innerHTML += `<tr><td><div class="Bar" style="background-color: ${colorInsert}; width: ${percentageInsert}%; "></div></td></tr>`
        DOMBarGraph.innerHTML += `<tr><td><div class="Bar" style="background-color: ${colorDelete}; width: ${percentageDelete}%;"></div></td></tr>`
        DOMBarGraph.innerHTML += `<tr><td><div class="Bar" border: 2px solid black;></div></td></tr>`
    }
}

function fillGraphDate() {
    let DOMGraphDate = document.getElementById('GraphDate')
    DOMGraphDate.innerHTML = ''

    let dateList = ['09-23', '09-25', '09-27', '09-29', '10-01', '10-03', '10-05']
    
    for (let i = 0; i < 7; i++) {
        DOMGraphDate.innerHTML += `<tr><td><div class="DateElement">${dateList[i]}</div></td></tr>`
    }
}
