function formateTime(time) {
    const year = time.getFullYear()
    const month = (time.getMonth() + 1)  < 10 ?`0${time.getMonth() + 1}` : time.getMonth() + 1
    const day = time.getDate() < 10 ? `0${time.getDate()}` : time.getDate()

    return `${year}-${month}-${day}`
}

module.exports = {formateTime}