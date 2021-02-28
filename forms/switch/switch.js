// A2 Ethan Hall

let valuesArraySwitch = []

let messagesSwitch = ["wear a warm coat, hat, scarf and gloves",
                "wear a warm coat but you won't need a hat, scarf or gloves",
                "wear your warmest coat, a warm hat, a scarf, and warm gloves",
                "wear a warm coat, hat and gloves. Maybe a scarf too"]

let userFirstNameSwitch = prompt('First Name:')
let userStateSwitch = prompt('Enter State Abbreviation (i.e TX):').toUpperCase()
let userTempSwitch = parseInt(prompt('Enter Current Temperature(F)'))

valuesArraySwitch.push(userFirstNameSwitch)
valuesArraySwitch.push(userStateSwitch)
valuesArraySwitch.push(userTempSwitch)

switch () {
    case :
        
        break;
    case :
        
        break;
    case :
        
        break;
    case :
        
        break;
}


if (valuesArraySwitch[1] = 'NE' && valuesArraySwitch[2] < 32)
    console.log(`${valuesArraySwitch[0]}, ${messagesSwitch[0]}.`)
else if (valuesArraySwitch[1] = 'NE' && valuesArraySwitch[2] >= 32 && valuesArraySwitch[2] < 50)
    console.log(`${valuesArraySwitch[0]}, ${messagesSwitch[1]}.`)
else if (valuesArraySwitch[1] = 'FL' && valuesArraySwitch[2] >= 32 && valuesArraySwitch[2] < 50)
    console.log(`${valuesArraySwitch[0]}, ${messagesSwitch[2]}.`)
else if (valuesArraySwitch[1] = 'FL' && valuesArraySwitch[2] >= 50 && valuesArraySwitch[2] < 70)
    console.log(`${valuesArraySwitch[0]}, ${messagesSwitch[3]}.`)
else
    console.log(`${valuesArraySwitch[0]}, I can't help you.`)