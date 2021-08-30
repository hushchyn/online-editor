function getSel(selector) {
    return document.querySelector(selector)
}

getSel('.btn-bold').addEventListener('click', function (event) {
    getSel('.content').style.fontWeight = (getSel('.content').style.fontWeight === 'bold') ? 'normal' : 'bold';
})

getSel('.btn-italic').addEventListener('click', function () {
    getSel('.content').style.fontStyle = (getSel('.content').style.fontStyle === 'italic') ? 'normal' : 'italic'
})

getSel('.btn-underline').addEventListener('click', function () {
    getSel('.content').style.textDecoration = (getSel('.content').style.textDecoration === 'underline') ? '' : 'underline'
})

getSel('.btn-strikethrough').addEventListener('click', function () {
    getSel('.content').style.textDecoration = (getSel('.content').style.textDecoration === 'line-through') ? '' : 'line-through';
})

getSel('.bi.bi-text-left').addEventListener('click', function () {
    getSel('.content').style.textAlign = 'left'
})

getSel('.bi.bi-text-center').addEventListener('click', function () {
    getSel('.content').style.textAlign = 'center'
})

getSel('.bi.bi-text-right').addEventListener('click', function () {
    getSel('.content').style.textAlign = 'right'
})

getSel('.btn-font').addEventListener('click', function () {
    getSel('.drop-font').classList.toggle('drop-font-block')
})

getSel('.drop-font').addEventListener('click', function (event) {
    getSel('.content').style.fontFamily = event.target.innerHTML
})

getSel('.btn-fontSize').addEventListener('click', function () {
    getSel('.font-size').classList.toggle('font-size-block')
})

getSel('.font-size').addEventListener('click', function (event) {
    getSel('.content').style.fontSize = event.target.innerHTML
    getSel('.font-size').classList.toggle('font-size-block')
})

getSel('.btn-color-text').addEventListener('click', function () {
    getSel('#myModal').style.display = 'block'
})

getSel('.colors').addEventListener('click', function (event) {
    getSel('.content').style.color = getComputedStyle(event.target).backgroundColor
})

getSel('.close').addEventListener('click', function (event) {
    event.stopPropagation()
    getSel('#myModal').style.display = 'none'
})

getSel('.btn-backgrounds').addEventListener('click', function () {
    getSel('#myModal-back').style.display = 'block'
})

getSel('.colors-back').addEventListener('click', function (event) {
    document.body.style.background = getComputedStyle(event.target).backgroundColor
})

getSel('.img-btn').onclick = function (event) {
    event.stopPropagation()
    getSel('.colors-back').classList.add('colors-back-none')
    getSel('.images-background').classList.add('images-background-block')
    getSel('.files').style.display = 'none'
    getSel('.img-btn').style.color = 'blue'
    getSel('.color-btn').style.color = 'black'
    getSel('.file-btn').style.color = 'black'

}

getSel('.images-background').addEventListener('click', function (event) {
    document.body.style.background = getComputedStyle(event.target).backgroundImage
})

getSel('.color-btn').onclick = function () {
    getSel('.colors-back').classList.remove('colors-back-none')
    getSel('.images-background').classList.remove('images-background-block')
    getSel('.files').style.display = 'none'
    getSel('.file-btn').style.color = 'black'
    getSel('.img-btn').style.color = 'black'
    getSel('.color-btn').style.color = 'blue'
}

getSel('.file-btn').addEventListener('click', function (event) {
    event.stopPropagation()
    getSel('.colors-back').classList.add('colors-back-none')
    getSel('.images-background').classList.remove('images-background-block')
    getSel('.files').style.display = 'block'
    getSel('.file-btn').style.color = 'blue'
    getSel('.img-btn').style.color = 'black'
    getSel('.color-btn').style.color = 'black'
})

getSel('.close-modal').addEventListener('click', function (event) {
    event.stopPropagation()
    getSel('#myModal-back').style.display = 'none'
})


getSel('#getImage').addEventListener('change', readURL, true)

function readURL() {
    let file = getSel('#getImage').files[0];
    let reader = new FileReader();
    reader.onloadend = function () {
        document.body.style.backgroundImage = "url(" + reader.result + ")";
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {}
}


getSel('.btn-lock').addEventListener('click', function () {
    getSel('.sign-In').style.display = 'block'
})

getSel('.btn-signIn').addEventListener('click', function () {
    if (getSel('.form-signIn').email.value === '' && getSel('.form-signIn').pass.value === '') {
        getSel('.form-signIn').email.classList.add('form-control-wrong')
        getSel('.form-signIn').pass.classList.add('form-control-wrong')
        getSel('.valueEmpty').style.display = 'block'
    } else if (getSel('.form-signIn').email.value !== 'admin' && getSel('.form-signIn').pass.value !== '1111') {
        getSel('.form-signIn').email.classList.add('form-control-wrong')
        getSel('.form-signIn').pass.classList.add('form-control-wrong')
        getSel('.check').style.display = 'block'
        getSel('.valueEmpty').style.display = 'none'
    } else {
        getSel('.sign-In').style.display = 'none'
        getSel('.btn-tag').disabled = false
        getSel('.btn-lock').style.display = 'none'
        getSel('.btn-unlock').style.display = 'block'
        getSel('.bi-unlock-fill').style.display = 'block'
        getSel('.bi-lock-fill').style.display = 'none'

    }
})


getSel('.btn-tag').addEventListener('click', function () {
    getSel('.fist-navigation').style.display = 'none'
    getSel('.content').style.display = 'none'
    getSel('.txtArea').style.display = 'block'
    getSel('.second-tollBar').style.display = 'block'
})

getSel('.txtArea').textArea.value = getSel('.content').innerHTML


getSel('.btn-save').addEventListener('click', function () {
    getSel('.content').innerHTML = getSel('.txtArea').textArea.value
    getSel('.fist-navigation').style.display = 'block'
    getSel('.content').style.display = 'block'
    getSel('.txtArea').style.display = 'none'
    getSel('.second-tollBar').style.display = 'none'
})

getSel('.btn-tbl').addEventListener('click', function () {
    getSel('.table').style.display = 'block'
})

getSel('.close-modalTable').addEventListener('click', function () {
    getSel('.table').style.display = 'none'
})


function createTable() {
    let table = document.createElement('table')
    for (let i = 1; i <= getSel('.createTable').countTR.value; i++) {
        let tr = document.createElement('tr')
        for (let b = 1; b <= getSel('.createTable').countTD.value; b++) {
            let td = document.createElement('td')
            td.textContent = 'TD'
            td.style.width = getSel('.createTable').widthTD.value + 'px'
            td.style.height = getSel('.createTable').heighTD.value + 'px'
            td.style.border = getSel('.createTable').widtBorder.value + 'px'
            td.style.borderStyle = getSel('.createTable').borderStyle.value
            td.style.borderColor = getSel('.createTable').borderColor.value
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    getSel('.txtArea').textArea.value += table.outerHTML
    getSel('.table').style.display = 'none'
}


let regExpCountTable = /^\d{1,3}$/
let regExpParamTable = /^\d{1,5}$/
let regExpStyleTable = /^\w{1,12}$/


getSel('.btn-createTable').addEventListener('click', function () {
    if (regExpCountTable.test(getSel('.createTable').countTR.value) && regExpCountTable.test(getSel('.createTable').countTD.value) &&
        regExpParamTable.test(getSel('.createTable').widthTD.value) &&
        regExpParamTable.test(getSel('.createTable').heighTD.value) &&
        regExpStyleTable.test(getSel('.createTable').widtBorder.value) &&
        regExpStyleTable.test(getSel('.createTable').borderStyle.value) &&
        regExpStyleTable.test(getSel('.createTable').borderColor.value)
    ) {
        getSel('.createTable').countTR.classList.remove('form-control-wrong')
        createTable()
    } else {
        if (regExpCountTable.test(getSel('.createTable').countTR.value)) {
            getSel('.createTable').countTR.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').countTR.classList.add('form-control-wrong')
        }
        if (regExpCountTable.test(getSel('.createTable').countTD.value)) {
            getSel('.createTable').countTD.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').countTD.classList.add('form-control-wrong')
        }
        if (regExpParamTable.test(getSel('.createTable').widthTD.value)) {
            getSel('.createTable').widthTD.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').widthTD.classList.add('form-control-wrong')
        }
        if (regExpParamTable.test(getSel('.createTable').heighTD.value)) {
            getSel('.createTable').heighTD.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').heighTD.classList.add('form-control-wrong')
        }
        if (regExpParamTable.test(getSel('.createTable').widtBorder.value)) {
            getSel('.createTable').widtBorder.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').widtBorder.classList.add('form-control-wrong')
        }
        if (regExpParamTable.test(getSel('.createTable').borderStyle.value)) {
            getSel('.createTable').borderStyle.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').borderStyle.classList.add('form-control-wrong')
        }
        if (regExpParamTable.test(getSel('.createTable').borderColor.value)) {
            getSel('.createTable').borderColor.classList.remove('form-control-wrong')
        } else {
            getSel('.createTable').borderColor.classList.add('form-control-wrong')
        }
    }
})

getSel('.btn-reset').addEventListener('click', function () {
    getSel('.createTable').reset()
})

getSel('.btn-save').addEventListener('click', function () {
    getSel('.content').innerHTML = getSel('.txtArea').textArea.value
})

getSel('.btn-ol').addEventListener('click', function () {
    getSel('.mod-Ol').style.display = 'block'
})

getSel('.close-modalOl').addEventListener('click', function () {
    getSel('.mod-Ol').style.display = 'none'
})

getSel('.btn-rst').addEventListener('click', function () {
    getSel('.create-Ol').reset()
})

let regExpSelect = /^\w{1,7}\-\w{1,7}$/

getSel('.btn-ctrateList').addEventListener('click', function () {
    if (regExpCountTable.test(getSel('.create-Ol').li.value) &&
        regExpSelect.test(getSel('.create-Ol').markList.value)) {
        createOl()
        getSel('.valueEmptyOl').style.display = 'none'
        getSel('.create-Ol').li.classList.remove('form-control-wrong')
        getSel('.create-Ol').markList.classList.remove('form-control-wrong')
    } else {
        if (regExpCountTable.test(getSel('.create-Ol').li.value)) {
            getSel('.create-Ol').li.classList.remove('form-control-wrong')
            getSel('.valueEmptyOl').style.display = 'none'
        } else {
            getSel('.create-Ol').li.classList.add('form-control-wrong')
            getSel('.valueEmptyOl').style.display = 'block'
        }
        if (regExpCountTable.test(getSel('.create-Ol').markList.value)) {
            getSel('.create-Ol').markList.classList.remove('form-control-wrong')
        } else {
            getSel('.create-Ol').markList.classList.add('form-control-wrong')
        }
    }
})

function createOl() {
    let ol = document.createElement('ol')
    for (let i = 1; i <= getSel('.create-Ol').li.value; i++) {
        let li = document.createElement('li')
        li.textContent = 'item' + i
        li.style.listStyleType = getSel('.create-Ol').markList.value
        ol.appendChild(li)
    }
    getSel('.txtArea').textArea.value += ol.innerHTML
}

getSel('.btn-ul').addEventListener('click', function () {
    getSel('.mod-Ul').style.display = 'block'
})

getSel('.close-modalUl').addEventListener('click', function () {
    getSel('.mod-Ul').style.display = 'none'
})

getSel('.btn-rstUl').addEventListener('click', function () {
    getSel('.create-Ul').reset()
})

getSel('.btn-ctrateListUl').addEventListener('click', function () {
    if (regExpCountTable.test(getSel('.create-Ul').li.value) &&
        regExpStyleTable.test(getSel('.create-Ul').markList.value)) {
        createUl()
        getSel('.valueEmptyOl').style.display = 'none'
        getSel('.create-Ul').li.classList.remove('form-control-wrong')
        getSel('.create-Ul').markList.classList.remove('form-control-wrong')
    } else {
        if (regExpCountTable.test(getSel('.create-Ul').li.value)) {
            getSel('.create-Ul').li.classList.remove('form-control-wrong')
            getSel('.valueEmptyOl').style.display = 'none'
        } else {
            getSel('.create-Ul').li.classList.add('form-control-wrong')
            getSel('.valueEmptyUl').style.display = 'block'
        }
        if (regExpCountTable.test(getSel('.create-Ul').markList.value)) {
            getSel('.create-Ul').markList.classList.remove('form-control-wrong')
        } else {
            getSel('.create-Ul').markList.classList.add('form-control-wrong')
        }
    }
})


function createUl() {
    let ul = document.createElement('ul')
    for (let i = 1; i <= getSel('.create-Ul').li.value; i++) {
        let li = document.createElement('li')
        li.textContent = 'item' + i
        li.style.listStyleType = getSel('.create-Ul').markList.value
        ul.appendChild(li)
    }
    getSel('.txtArea').textArea.value += ul.innerHTML
}


getSel('.btn-unlock').addEventListener('click', function () {
    getSel('.sign-Out').style.display = 'block'
})

getSel('.sign-Out').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-cencel')) {
        getSel('.sign-Out').style.display = 'none'
    } else {
        getSel('.sign-Out').style.display = 'none'
        getSel('.btn-unlock').style.display = 'none'
        getSel('.bi-unlock-fill').style.display = 'none'
        getSel('.bi-lock-fill').style.display = 'block'
        getSel('.btn-lock').style.display = 'block'
        getSel('.btn-tag').disabled = true
    }
})