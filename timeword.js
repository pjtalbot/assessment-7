const makeRange = function(int)  {
    let range = Array.from(new Array(int), (h, i) => i+1)
    return range;
}
const timeWord = (date) => {

    // edgecases -
        // midnight
        // noon
        // "oh one" 00-01

    // patterns (on the hour = '${wordArr[hour + 1]} o'clock`)

    // spit by ":" to use numbers
    let wordArr = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let tenPlaces = ["twenty", 'thirty', "forty", "fifty"]
    let hour = +(date).split('-')[0]
    let minute = +(date).split('-')[1]
    let answerArr = []

    // midnightCase

    // first check if Hour is > 12
    // add am or pm to array


    // handle edgecases of "midnight" and "noon"
    if ((hour == 0 || hour==12) && minute == 0) {
        if (hour == 0){
            return "midnight"
        } else {
            return "noon"
            }
        }
    
    if (hour < 12) {
        answerArr.push('am')
        if (minute == 0) {
            answerArr.push("o'clock")
            answerArr.push(wordArr[hour])
            return answerArr.reverse().join(' ')
        }
    } else {
        answerArr.push('pm')
        if (minute == 0) {
            answerArr.push("o'clock")
            answerArr.push(wordArr[hour])
            return answerArr.reverse().join(' ')
        }
    }

    // "Switch case construct" - 


    if (minute < 10) {
        answerArr.push(`oh ${wordArr[minute]}`)
        // try switch cases here
    } 
    else if (minute < 20) {
        answerArr.push(`${wordArr[minute]}`)
    } else if (minute >= 20 && minute % 10 == 0){
        answerArr.push(`${tenPlaces[(minute/10) - 2]}`)
    } else {
        answerArr.push(`${tenPlaces[(Math.floor(minute / 10)) - 2]}${wordArr[minute.toString().split('')[1]]}`)
    }

    if (hour > 12) {
        answerArr.push(`${wordArr[hour -12]}`)

    } else {
        answerArr.push(`${wordArr[hour]}`)
    }
    return answerArr.reverse().join(' ')

}



module.exports = timeWord 