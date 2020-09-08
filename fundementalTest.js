const sum = (a, b) => a + b
const subtract = (a, b) => a - b

function sumTest() {
    let result = sum(1,2)
    let expected = 3
    expect(result).toBe(expected)
}
test('sum adds numbers', sumTest)
/**
 * simple way
 * 
 */

// let result = sum(3, 7)
// let expected = 10 
// if(result !== expected) throw new Error(`${result} is not equal to ${expected}`)
//     else console.log('working')

// result = subtract(10, 5)
// expected = 5
// if(result !== expected) throw new Error(`${result} is not equal to ${expected}`)
//     else console.log('working')


/**
 * simple library
 * 
 */

function test(title, callback) {
    try {
        callback()
        console.log(`✔ ${title}`)
    } catch {
        console.error(`✘ ${title}`)
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if(actual !== expected) {
                throw new Error(`${actual} is not equal to ${expected}`)
            } else {
                console.log(`%c ${actual} is equal to ${expected}, success`, 'background: #bada55; color: #111');
            }
        },
        toEqual(expected) {},
        toBeGreaterThan(expected) {}
    }
}