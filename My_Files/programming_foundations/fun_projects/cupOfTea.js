// Lets make a cup of hot beverege, Gus.

let ingredients = ['water', [ 'lipton tea', 'milk', 'sugar'], ['chocolate powder', 'instant coffee'] ];
let tools = ['boiler', 'cup', 'tea-spoon'];
// Steps to make a cup of tea
const cupOfTea = () => {
    console.log('Put ' + ingredients[0] + ' in the ' + tools[0]);
    console.log('Fill 3/4 of the ' + tools[1] + ' with hot ' + ingredients[0]);
    console.log('Insert a bag of ' + ingredients[1][0] + ' in the ' + tools[1] + '.');
    console.log('Add 1-3 ' + tools[2] + ' of ' + ingredients[1][2] + ' in the ' + tools[1] + ' of tea.');
    console.log('Fill the remaining 1/4 with ' + ingredients[1][1] + ' in the ' + tools[1] + ' of tea.');
    console.log('stir it around, and enjoy!');
}
//Steps to make some hot cocoa
const hotCoco = () => {
    console.log('Put ' + ingredients[0] + ' in the ' + tools[0]);
    console.log('Fill 3/4 of the ' + tools[1] + ' with hot ' + ingredients[0]);
    console.log('Add 3 ' + tools[2] + ' of ' + ingredients[2][0] + '.');
    console.log('Fill the remaining 1/4 with ' + ingredients[1][1] + ' in the ' + tools[1] + ' of cocoa.');
    console.log('stir it around, and enjoy!');
}
//Steps to make a nice cup of coffee
const coffee= () => {
    console.log('Put ' + ingredients[0] + ' in the ' + tools[0]);
    console.log('Fill the ' + tools[1] + ' with hot ' + ingredients[0]);
    console.log('Add 1 ' + tools[2] + ' of ' + ingredients[2][1] + '.');
    console.log('stir the ' + tools[2] + ' in the ' + tools[1] + ' and enjoy your coffee' + ingredients[1][1] + ' in the ' + tools[1] + ' of cocoa.');
}
//Function algorithm to determine what type of beverege gus wants to make
const gusChoice = (choice) => {
    if (choice == 'tea') {
        return cupOfTea();
    } else if ( choice == 'hot cocoa') {
        return hotCoco();
    } else if ( choice == 'coffee') {
        return coffee();
    } else { 
        return ('Please Gus, write either tea, hot cocoa or coffee');
    }
} 
//Invoke of the function above.
gusChoice(prompt("Would you like coffee, hot cocoa or tea, Gus?"));