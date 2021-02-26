// A2 Ethan Hall

let valuesArray = []

let messages = ["wear a warm coat, hat, scarf and gloves",
                "wear a warm coat but you won't need a hat, scarf or gloves",
                "wear your warmest coat, a warm hat, a scarf, and warm gloves",
                "wear a warm coat, hat and gloves. Maybe a scarf too"]

let userFirstName = prompt('First Name:')
let userState = prompt('Enter State Abbreviation (i.e TX):').toUpperCase()
let userTemp = parseInt(prompt('Enter Current Temperature(F)'))

valuesArray.push(userFirstName)
valuesArray.push(userState)
valuesArray.push(userTemp)

if (valuesArray[1] = 'NE' && valuesArray[2] < 32)
    console.log(`${valuesArray[0]} ${messages[0]}.`)
else if (valuesArray[1] = 'NE' && valuesArray[2] >= 32 && valuesArray[2] < 50)
    console.log(`${valuesArray[0]} ${messages[1]}.`)
else if (valuesArray[1] = 'FL' && valuesArray[2] >= 32 && valuesArray[2] < 50)
    console.log(`${valuesArray[0]} ${messages[2]}.`)
else if (valuesArray[1] = 'FL' && valuesArray[2] >= 50 && valuesArray[2] < 70)
    console.log(`${valuesArray[0]} ${messages[3]}.`)
else
    console.log(`${valuesArray[0]} I can't help you.`)