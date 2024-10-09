window.onload = main

function main() {
    fillGraphDate()
}

function fillGraphDate() {
    let DOMGraphDate = document.getElementById('GraphDate')
    DOMGraphDate.innerHTML = ''

    let dateList = ['09-23', '09-25', '09-27', '09-29', '10-01', '10-03', '10-05']
    
    for (let i = 0; i < 7; i++) {
        DOMGraphDate.innerHTML += `<tr><td><div class="DateElement">${dateList[i]}</div></td></tr>`
    }
}
