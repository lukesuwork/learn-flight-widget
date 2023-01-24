const tableBody = document.getElementById('table-body')

let flights = [
    {
        time: "08:11",
        destination: "TAIPEI",
        flight: "CI 232",
        gate: "B 21",
        remarks: "ON TIME"
    },
    {
        time: "08:51",
        destination: "BRISBANE",
        flight: "QA 232",
        gate: "A 31",
        remarks: "ON TIME"
    },
    {
        time: "15:50",
        destination: "SYDNEY",
        flight: "JS 232",
        gate: "A 51",
        remarks: "ON TIME"
    },
    {
        time: "16:13",
        destination: "NEW YORK",
        flight: "UN 232",
        gate: "C 01",
        remarks: "DELAYED"
    },
    {
        time: "18:11",
        destination: "SEOUL",
        flight: "KR 232",
        gate: "A 31",
        remarks: "ON TIME"
    },
]

const destinations = ["TOKYO", "FRANKFURT", "DUBAI", "LONDON", "SYDNEY", "TAIPEI"]
const remarks = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
    for (const flight of flights) {
        const tableRow = document.createElement("tr")

        for(const flightDetail in flight) {
           const tableCell = document.createElement("td")
            const word = Array.from(flight[flightDetail])

            for(const [index,letter] of word.entries()) {
                const letterElement = document.createElement('div')

                setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
                },100 * index)
            }
            tableRow.append(tableCell)
        }
        tableBody.append(tableRow)
    }
}

populateTable()

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRTSUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}

function generateRandomNumber(maxNumber) {
    const numbers = "0123456789"
    if (maxNumber) {
        const newNumbers = numbers.slice(0, maxNumber + 1)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    }
    return numbers.charAt(Math.floor(Math.random() * numbers.length))
}

function generateTime() {
    let displayHour = hour
    if (hour <24) {
        hour++
    }
    if (hour >= 24) {
        hour = 1
        displayHour=hour
    }
    if (hour <10) {
        displayHour = "0" + hour
    }
    return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber()+generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber(),
        remarks: remarks[Math.floor(Math.random() * remarks.length)]
    })
    tableBody.textContent = ""
    populateTable()
}

setInterval(shuffleUp, 10000)

