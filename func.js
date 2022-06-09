const prompt = require('prompt-sync')();

let number =  Math.floor(Math.random() * 2) + 1;
const username = prompt('please input your username ');
console.log(`welcome ${username}`);
let point =  0;

function game(number) {
    for(let i = 0; i = 5; i--) {
        let guess = prompt('Please guess a number ');
        if(guess != number) {
            console.log('your guess is wrong');
            break;
        } else {
            console.log('yor guess is correct')
            point++
        }
        if(point > 1) {
            console.log('welcome to stage 1')
            number = Math.floor(Math.random() * 3) + 1;
            guess = prompt('Please input your guess ');
            if(guess != number) {
                console.log('your guess is wrong');
                 break;
            }
            else {
                console.log('yor guess is correct ')
                point++
            }
        }

        if( point > 2) {
            console.log('welcome to stage 2')
            number = Math.floor(Math.random() * 4) + 1;
            guess = prompt('Please input your guess  ');
            if(guess != number) {
                console.log('your guess is wrong');
                 break;
            }
            else {
                console.log('your guess is correct you have won');
                break;
            }

        }

    }
    
}
console.log(game(1));