an important basic concept in testing is 'isolation'
we should only test one method at a time, and our test method should not depend on external function behaving correctly or not.
if a test that we have, depends on several other functions, it can be hard to tell exactly what went wrong.

Pure Functions
TDD helps us write better code, even though it might not be obvious at begining
tightly coupled code is hard to test, consider this function below

function guessingGame() {
    let magicNumber = 22;
    let guess = prompt('guess number');
    if(guess > magicNumber) alert('too big')
    else if(guess < magicNumber) alert('too small')
    else if(guess === magicNumber) alert('darn right')
}
making that testable requires us to split all different things that are happening.
first we don't need to test prompt and alert functions, because it's built in with browser.
what we do need to test is number logic, when we untangle it from other functions it becomes mnuch easier to test

function evaluateGuess(magicNumber, guess) {
    if(guess > magicNumber) alert('too big')
    else if(guess < magicNumber) alert('too small')
    else if(guess === magicNumber) alert('darn right')
}

function guessingGame() {
    let magicNumber = 22;
    let guess = prompt('guess number');
    let message = evaluateGuess(magicNumber, guess);
    alert(message);
}

guessingGame();

as we can see only thing that we need to test is evaluateGuess(), it takes clear input and returns starightforward output, no external function calling is required and easier to extend as well
if we wanted to make user to guess repeatedly to guess right, we could also do so much easily than previous tangled version
that's why TDD is very likely is very helpful to make us see which things coupled together and should be held together and untagled tightly coupled codes
TDD encourages better program architecture, because it makes us write Pure Functions.