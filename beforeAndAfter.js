input = [
    'mission statement',
    'a quick bite to eat',
    'a chip off the old block',
    'chocolate bar',
    'mission impossible',
    'a man on a mission',
    'block party',
    'eat my words',
    'bar of soap'
]

function beforeAndAfter(input) {
    let sentences = []
    let firstWords = {}
    let lastWords = {}

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(" ")
        if (!firstWords[line[0]]){
            firstWords[line[0]] = [i]
        }  else {
            firstWords[line[0]].push(i)
        }
        if (!lastWords[line.length-1]){
            lastWords[line[line.length-1]] = [i]
        }  else {
            lastWords[line[line.length-1]].push(i)
        }
    }

    
    console.log(lastWords)

}

const a = beforeAndAfter(input)