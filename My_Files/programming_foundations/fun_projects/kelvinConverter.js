// Kelvin set.
const kelvin = 293;

// Celsius set,
let celsius = kelvin - 273;

// fahrenheit calculation formula.
let fahrenheit = celsius * (9/5) + 32;

// celsius converted to Newton.
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`)

// rounded up fahrenheit to get a whole number.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)