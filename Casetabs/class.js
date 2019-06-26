class Sample {
    constructor (hash) {
        let keys = Object.keys(hash)
        // keys.forEach (key => this[key] = hash[key])
        for (let i = 0; i < keys.length; i++) {
            this[keys[i]] = hash[keys[i]]
        }
    }
}

// h = {"this" => [1,2,3,4,5,6], "that" => ['here', 'there', 'everywhere'], :other => 100}
let h = {
            "this": [1,2,3,4,5,6],
            "that": ['here', 'there', 'everywhere'],
            "other": 100
        }
let example = new Sample (h)

console.log("this", example.this)
console.log("that", example.that)
console.log("other", example.other)
