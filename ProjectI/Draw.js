function draw3DGraph() {
    let keys = Object.keys(data)

    drawGraph('Canvas3DGraphInsert', 'Inserted', color.insertedMin, color.insertedMax)
    drawGraph('Canvas3DGraphDelete', 'Deleted', color.deletedMin, color.deletedMax)

    valueConnectLines.innerHTML = ''
    drawBox([[400, 172], [472, 100], [672, 100]])
    drawBox([[815, 435], [850, 400], [1052, 400]])
}

function drawGraph(id, aspect, colorMin, colorMax) {
    let tempCanvas = document.createElement('canvas')
    let tempContext = tempCanvas.getContext('2d')
    tempCanvas.width = 800
    tempCanvas.height = 800
    tempCanvas.setAttribute('id', id)
    tempCanvas.setAttribute('class', 'Canvas3DGraph')

    let bottom = JSON.parse(JSON.stringify(UI.graphBottomRect))
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 2; k++) {
                bottom[i][j][k] += UI.graphStart[k]
            }
        }
    }

    drawPolygon(tempContext, bottom[0], '#EFEFEF')
    drawPolygon(tempContext, bottom[1], '#AFAFAF')
    drawPolygon(tempContext, bottom[2], '#CFCFCF')

    let i = 0

    for (const [key, value] of Object.entries(data)) {
        row = Math.floor(i / 7)
        column = i - row * 7
        
        let rectBottom = [
            UI.barStart[0] + UI.barIntervalColumn[0] * column + UI.barIntervalRow[0] * row + UI.graphStart[0],
            UI.barStart[1] + UI.barIntervalColumn[1] * column + UI.barIntervalRow[1] * row + UI.graphStart[1]
        ]
        
        let tempRect = []
        let barHeight = UI.barMaxHeight / lineMax * value[aspect]

        for (let i = 0; i < 4; i++) {
            tempRect.push([rectBottom[0] + UI.topFace[i][0], rectBottom[1] + UI.topFace[i][1]])
        }

        for (let i = 0; i < 4; i++) {
            tempRect.push([rectBottom[0] + UI.topFace[i][0], rectBottom[1] + UI.topFace[i][1] - barHeight])
        }

        let colorTop = `hsl(${colorMax[0]} ${colorMax[1]}% ${colorMin[2] + (colorMax[2] - colorMin[2]) * (value[aspect] / lineMax)}%)`
        let colorLeft = `hsl(${colorMax[0]} ${colorMax[1]}% ${colorMin[2] + (colorMax[2] - colorMin[2]) * (value[aspect] / lineMax) - 10}%)`
        let colorRight = `hsl(${colorMax[0]} ${colorMax[1]}% ${colorMin[2] + (colorMax[2] - colorMin[2]) * (value[aspect] / lineMax) - 20}%)`

        drawPolygon(tempContext, [tempRect[4], tempRect[5], tempRect[6], tempRect[7]], colorTop)
        drawPolygon(tempContext, [tempRect[7], tempRect[6], tempRect[2], tempRect[3]], colorLeft)
        drawPolygon(tempContext, [tempRect[2], tempRect[6], tempRect[5], tempRect[1]], colorRight)

        i += 1
    }

    document.querySelector('#DivCanvasGraph').appendChild(tempCanvas)
}

function drawPolygon(context, points, color) {
    context.fillStyle = color

    context.beginPath()
    context.moveTo(points[0][0], points[0][1])

    for (let i = 1; i < points.length; i++) {
        context.lineTo(points[i][0], points[i][1])
    }

    context.lineTo(points[0][0], points[0][1])
    context.closePath()
    context.fill()
}

function drawBox(lines) {
    for (let i = 0; i < lines.length - 1; i++) {
        valueConnectLines.innerHTML += `<line x1="${lines[i][0]}" y1="${lines[i][1]}" x2="${lines[i + 1][0]}" y2="${lines[i + 1][1]}" style="stroke:black;stroke-width:2"/>`
    }

    valueConnectLines.innerHTML += `<circle cx="${lines[0][0]}" cy="${lines[0][1]}" r="8" fill="Black"/>`
    valueConnectLines.innerHTML += `<circle cx="${lines[0][0]}" cy="${lines[0][1]}" r="4" fill="White"/>`
}
