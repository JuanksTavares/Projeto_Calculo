let intervals = []
let intervalsDefault = []

let roots = []

let order = 0
let functionOrder = 0
let numbers = []

let expression = ""

let stopCriteria = 1
let precision = 0.1

function getNumbers() {
    numbers = []

    for (let i = 0; i <= order; i++) {
        numbers[i] = parseFloat(document.getElementById(String.fromCharCode(i + 65)).value)
    }
}

function getPrecision() {
    precision = parseFloat(document.getElementById("getPrecision").value)
}

function calculateIntervals() {
    intervals = []
    intervalsDefault = []

    for(let i = -6; i < 6; i++) {
        let elevate = order

        let numA = 0
        let numB = 0

        let k = i + 1

        while(elevate >= 1) {
            for(let j = 0; j < numbers.length ; j++) {
                numA += numbers[j]*(i**(elevate))
                numB += numbers[j]*(k**(elevate))

                if(numA < 0 && numB > 0) {
                    intervals.push([i, k])

                    if (i < j) {
                        intervalsDefault.push([i, k])
                    }

                    if (i > j) {
                        intervalsDefault.push([j, k])
                    }
                }

                if(numA > 0 && numB < 0) {
                    intervals.push([k, i])

                    if (i < j) {
                        intervalsDefault.push([i, k])
                    }

                    if (i > j) {
                        intervalsDefault.push([j, k])
                    }
                }

                elevate--
            }
        }
    }
}