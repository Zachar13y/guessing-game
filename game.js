'use strict'

// let score = 0;

// var username = prompt("So, what\'s your name?");
// var message = "Hello, " + username + ".";
// if (username !== 'a,e,i,o,u,y') {
//     alert('That sure is a weird name. Well "' + username + '", let\'s continue I guess.')
// } else {
//     alert(message)
// };

// if (username == "" || undefined) {
//     alert('You must enter your name!')
//     username = prompt("So, what\'s your name?");
// } else { 
//     alert(message)
// };

// var wantsToGuess = confirm('Play the guessing game to know moar about me. You will be scored on your answers! Click OK to continue or Cancel to start over');
// if (wantsToGuess == true) {
// } else {
//     alert('Fine then!')
//     username = prompt("So, what\'s your name?");
//     console.log ('Username = ', username);
// }


/////////Problems////////////////////
    function askAge() {
        var ageAnswer = prompt('How many years old am I?');
        while ((isNaN(ageAnswer)) || (ageAnswer == undefined)) {
            alert('That\'s not a valid response format; you must answer using numbers.');
            ageAnswer = prompt('How old am I?');
        } if (ageAnswer < 29) {
            alert('Wrong, go higher.');
            askAge();
        }
    }
    
    function askPizza() {
        var pizza = prompt('Do I love pizza?').toLowerCase();
        if (pizza === ('yes' || 'y' || 'yeah' || 'sure' || 'affirmative' || 'ja')) {
            score++
            alert("That\'s correct! Your score is " + score + " points.")
        } if (pizza == undefined) {
            alert('Well I usually like my pizza blank!')
            askPizza();
            console.log('Pizza guessed ', pizza);
        } if (pizza == ('no' || 'n' || 'nah' || 'nope' || 'negative' || 'nein'))
        alert('Are you kidding? I do love pizza!')
    }
    

        
        // var ageAnswer = prompt('Question one: How many years old am I?');
        // ageAnswer = parseInt(ageAnswer);

        // while (isNaN(ageAnswer)) {
        //     alert('That\'s not a valid response format; you must answer using numbers.');
        //     ageAnswer = prompt('Question one: How old am I?');
        // }
        
        // while (ageAnswer < 29) {
        //     alert('Wrong, go higher.');
        //     ageAnswer = prompt('Question one: How old am I?');
        // }
        
        // while (ageAnswer > 29) {
        //     alert('Hey! I\'m not that old! Try again.');
        //     ageAnswer = prompt('Question one: How old am I?');
        // }
        
        // if (ageAnswer == 29) {
        //     score++
        //     alert('You got it! You have ' + score + ' point!');
        // }
        //     console.log('Age guessed ',  ageAnswer);
        
        
        // console.log('User\'s score: ', score);