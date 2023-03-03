
function clock() {
    const hoursArrow = document.querySelector('.hours')
    const minutesArrow = document.querySelector('.minutes')
    const secondsArrow = document.querySelector('.seconds')
    const deg = 6

    setInterval(() => {
        const day = new Date()

        const hours = day.getHours() * 30 //в круге 360 градусов 
        const minutes = day.getMinutes() * deg // сдвигаемся на 6 градусов
        const seconds = day.getSeconds() * deg // сдвигаемся на 6 градусов

        hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
        minutesArrow.style.transform = `rotateZ(${minutes}deg)`
        secondsArrow.style.transform = `rotateZ(${seconds}deg)`
    }, 0)

}
clock()



