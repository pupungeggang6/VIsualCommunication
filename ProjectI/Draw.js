function draw3DGraph() {
    let keys = Object.keys(data)
    drawPolygon(UI.firstGraphRect[0], '#EFEFEF')
    drawPolygon(UI.firstGraphRect[1], '#CFCFCF')
    drawPolygon(UI.firstGraphRect[2], '#AFAFAF')
}

function drawLineGraph() {
    
}


function drawPolygon(points, color) {
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
