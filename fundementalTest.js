const sum = (a, b) => a + b
const subtract = (a, b) => a - b

/**
 * Testing
 */
test('sum adds two numbers', sumTest)

function sumTest() {
    let result = sum(1,2)
    let expected = 3
    expect(result).toBe(expected)
}



/**
 * library
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
                console.log(`expected ${expected} result was ${actual}`)
                throw new Error(`${actual} is not equal to ${expected}`)
            } else {
                console.log(`%c ${actual} is equal to ${expected}, success`, 'background: #bada55; color: #111');
            }
        },
        toEqual(expected) {},
        toBeGreaterThan(expected) {}
    }
}