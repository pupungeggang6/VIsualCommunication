window.onload = main

function main() {
    drawLine()
    fillBarGraph()
    fillGraphDate()
    drawImage()
}

function drawLine() {
    let DOMLineGraph = document.getElementById('LineGraph')
    DOMLineGraph.innerHTML = ''

    let dateList = ['09-23', '09-25', '09-27', '09-29', '10-01', '10-03', '10-05']

    for (let i = 0; i < 6; i++) {
        DOMLineGraph.innerHTML += `<line x1="${320 - data[dateList[i]]['TodoTotal'] * 300 / 40}" y1="${56 + 111 * i}" x2="${320 - data[dateList[i + 1]]['TodoTotal'] * 300 / 40}" y2="${56 + 111 * (i + 1)}" class="LineGraphTotal"/>`
        DOMLineGraph.innerHTML += `<line x1="${320 - data[dateList[i]]['TodoAchieved'] * 300 / 40}" y1="${56 + 111 * i}" x2="${320 - data[dateList[i + 1]]['TodoAchieved'] * 300 / 40}" y2="${56 + 111 * (i + 1)}" class="LineGraphAchieved"/>`
        DOMLineGraph.innerHTML += `<line x1="${320 - data[dateList[i]]['TodoRatio'] * 300 / 100}" y1="${56 + 111 * i}" x2="${320 - data[dateList[i + 1]]['TodoRatio'] * 300 / 100}" y2="${56 + 111 * (i + 1)}" class="LineGraphRatio"/>`
    }
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
        DOMBarGraph.innerHTML += `<tr><td><div class="Bar" style="background-color: ${colorInsert}; width: ${percentageInsert}%;"></div></td></tr>`
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

function drawImage() {
    let DOMGraphRight = document.getElementById('GraphRightElement')

    DOMGraphRight.innerHTML = ''

    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20240923.jpg"></td><td class="Description">Started project.</td></tr>`
    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20240925.png"></td><td class="Description">Changed direction.</td></tr>`
    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20240927.png"></td><td class="Description">Field display.</td></tr>`
    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20240929.png"></td><td class="Description">Adventure page.</td></tr>`
    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20241001.png"></td><td class="Description">Battle page.</td></tr>`
    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20241003.png"></td><td class="Description">Information page.</td></tr>`
    DOMGraphRight.innerHTML += `<tr><td style="width:40%;"><img src="Resource/20241005.png"></td><td class="Description">Added colors to display.</td></tr>`}
