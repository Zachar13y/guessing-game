'use strict'

let score = 0;

/////Prints message to screen//////
function showAnswer() {
    document.getElementById('q4').innerHTML = "You rock!";
    var picture = document.getElementById('lima');
    console.log(picture);
    picture.innerHTML = '<img id="black-car" src="./assets/Bmw-135i.jpg" width="45%" height="49%">';
}
function showAgeAnswer() {
    document.getElementById('q1').innerHTML = "Still a twenty somthin\'!";
    var picture = document.getElementById('zulu');
    console.log(picture);
    picture.innerHTML = '<img id="gif-29" src="./assets/age-29.gif">';
}




// var username = prompt("So, what\'s your name?");
// var message = "Hello, " + username + ".";
// if (username !==  ('a' || 'e' || 'i' || 'o' || 'u' || 'y')) {
//     alert('That sure is a weird name. Well "' + usernamZze + '", let\'s continue I guess.')
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


/////////Question Age////////////////////
    function askAge() {
        var ageAnswer = prompt('How many years old am I?');
        while ((isNaN(ageAnswer)) || (ageAnswer == undefined)) {
            alert('That\'s not a valid response format; you must answer using numbers.');
            ageAnswer = prompt('How old am I?');
        } if (ageAnswer < 29) {
            alert('Wrong, go higher.');
            askAge();
        } if (ageAnswer > 29) {
            alert('Hey! I\'m not that old.');
            askAge();
        }
        else if (ageAnswer == 29) {
            score++
            showAgeAnswer();
            alert('You got it! You have ' + score + ' point!');
        }
        console.log('Age guessed ', ageAnswer);
    }

/////////////Question Pizza////////////
    function askPizza() {
        var pizza = prompt('Do I love pizza?').toLowerCase();
        if (pizza === ('yes' || 'y' || 'yeah' || 'sure' || 'affirmative' || 'ja')) {
            score++
            alert("That\'s correct! Your score is " + score + " points.")
        } if (pizza == undefined) {
            alert('Well I don\'t usually like my pizza blank!')
            askPizza();
        } if (pizza == ('no' || 'n' || 'nah' || 'nope' || 'negative' || 'nein'))
        alert('Are you kidding? I do love pizza!')
        
        console.log('Pizza guessed ', pizza);
    }

///////////////Question City///////////
    function askCity() {
        let guessedCities = i; {
            for (i=0; i <= 1; i++);
        }
        var city = prompt('You only have two guesses on this one. Which of these cities was I born in? Kansas City, Houston, Phoenix, Portland, Seattle.').toLowerCase()
        if (city == ('seattle')) {
            score++;
            alert('That is correct!')
        } else { alert('That is not correct. Guess again.')
        guessedCities++
        if (guessedCities === 1) { 
            break;
        }
        askCity();
        console.log(guessedCities);
        }
        console.log('City guessed: ', city);
    }
            
        
    console.log('User\'s score: ', score);

//////////Question Car/////////////
    function askCar() {
        var car = prompt('What is one my favorite make of car?').toLowerCase();
        var carList = ['bmw', 'honda', 'porsche', 'toyota', 'subaru', 'daihatsu'];
        var i;
        for (i = 0; carList.length < 4; i++) {
        
        }
        console.log(car);
        if (car == 'bmw' || 'porsche' || 'honda') {
            alert('Correct!');
            score++
            showAnswer();
        }
    }
