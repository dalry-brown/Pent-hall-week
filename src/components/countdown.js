const pentDate = "19 May, 2024"

const countdown = () => {
    const currentDate = new Date()
    const desinationDate = new Date(pentDate)
    const totalSeconds = (desinationDate - currentDate) / 1000

    const seconds = Math.floor(totalSeconds % 60)
    const minutes = Math.floor((totalSeconds / 60) % 60)
    const hours = Math.floor((totalSeconds / 3600) % 24)
    const days = Math.floor(totalSeconds / 3600 /24)

    const dateData = { days, hours, minutes, seconds }
    return dateData
}

   console.log(JSON.stringify(countdown()))