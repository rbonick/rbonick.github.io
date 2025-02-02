const now = new Date()
const start = new Date(now.getFullYear(), 0, 0)
const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
const oneDay = 1000 * 60 * 60 * 24
const day = Math.floor(diff / oneDay)
console.log('Day of year: ' + day)

const chosenBackground = backgrounds[day % backgrounds.length]

console.log(`choosing image ${chosenBackground}`)

document.addEventListener("DOMContentLoaded", function () {
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundImage = `url('${chosenBackground}')`
})