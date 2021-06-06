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
definition of a pure function can be stipulated as, a function that always returns same output for same arguments, and it does not depend on any state, or external data change during execution, it simply just depends on it's input arguments
a function does not produce any observable side effects such as network requests, input and output or data mutation
observable side effects is/are any interaction with outside scope from within a function, that could be from changing a variable that exists outside function scope, to calling another method from within function scope.
a pure function calling another pure function is not a side effect and calling function is still pure
side effects include, but are not limited to, making a http request, mutating data, printing to a screen or console, DOM query/manipulation, Math.random(), getting current time, event though side effects are often required but pure function must not contain any of those
// pure function
let afterTax = prodPrice => (prodPrice * .2) + prodPrice;
// impure function
let tax = 20; 
let afterTax = prodPrice => (prodPrice * tac/100) + prodPrice; // dependen on an external variable value, otherwise a pure function
not all functions need to be a or should be a pure function, e.g. an event handler for a button press that manipulates DOM is not a good candidate for pure function, but it can certainly call on other pure functions which will reduce number of impure functions in our application
another reason to use pure functions where possible is testing and refactoring, it makes code more maintainable and refactoring becomes much easier, cause in pure functions we dont have to worry about any side effects, thus produces better quality of code

Mocking
there are a couple of solutions to tightly coupled problem, first of, is to simply remove those depnedencies from our code as we did above with our guessing game refactoring for pure function version, which is not always possible, and secondly we can use 'mocking', as in writing a fake version of a function that always behaves exactly how we want it to be, e.g. if we are testing a function that gets information from a DOM input, we dont really habe to setup an website and dynamically insert something into input field to run our tests, with a mock function we could just create a fake version of input grabbing function that always returns a specific value and use that in our tests
a mock is capable of assertions about how it was implemnted during test run, it's test double, and tightly coupled to, therefore, all mocks are an indication of coupling and there may be an opportunity to simplify implementation and improve quality of code under test, and same time eliminating need for mocking can radically simplify tests themselves, because we wont have to construct mocks
coupling takes different forms:
<> subclass coupling: subclasses are dependent on implementation and entire hierarchy of parent class, which is tightest form of coupling available in oop
<> control dependencies: code that controls its dependencies by telling them what to do, e.g. passing method names, if control API of dependency changes, dependent code will break
<> mutable state dependecies: code that shares mutable state with other code, e.g. can change properties on a shared object, if relative timing of mutations change, it could break dependent code, if timing is nondeterministic, it may be possible to acheive program correctbess without a complete overhaul of all dependent units, there may be an irreparable tangle of race conditions, fixing a single bug could lead to others in dependent units
<> state shape dependencies: code that shares data structures with other code and only uses a subset of structure, if shape of shared structure changes, it could break dependent code
<> event/message coupling: code that communicates with other units via passing of messages, events and as such

causes of tight coupling:
<> mutation vs immutability
<> side-effects vs purity/isolated side-effects
<> responsibility overload vs do one thing (DOT)
<> procedural instructions vs describing structure
<> class inheritance vd composition
imperative and object oriented code is more suceptible to tight coupling than functional code, as it uses pure functions as element unit of compositions and they are less vulnerable to tight coupling in nature

how pure functions reduce tight coupling:
<> immutability: pure functions dont mutate existing values, they return new one's instead
<> no side effects: only observable effect of a pure function is its return value, so there's no chance for it interfere with operation of other functions that may be observing external state such as screen, DOM, console, standard out, network or disk
<> do one thing: pure functions just do one thing, map some input to some corresponding ouput, avoiding responsibility overload that tends to plague object and class based code
<> structure, not instruction: pure functions can be safely memoized, meaning that, if system had inifinite memory, any pure functions could be replaced with a lookup table that uses functions input as an index to retrive a corresponding value from table, in other words, pure functions describe structural relationships between data, not instructions for computer to follow, so two different sets of conflict8ing instructions running simulatanously without causing any troubles for others
tightly coupling examples: class inheritance, gloabal variables, other mutable global state, mosule import with side effcts, implicit dependencies from compositions, dependency injection containers/parameters, control/mutable parameters
loosely coupling examples: module imports without side effcts, message passing / pubsub, immutable parameters
where tightly coupled codes are encouraged to be avoided, loosely coupled codes are preferred in healthy application,  generaly more often
to remove coupling we can make use of, pure functions, isolate side effects e.g. no mixing of logics with i/o, network, ui, logging etc, and removal of dependent logic, so that they can become declarative compositions which font need their own unit tests, as in if there is no logic ther is no need for to unit test
which means for our networks requenst, event handlers wont need unit test but rather integration tests for those instead, where it's perfectly okay to mock and fake for integration tests.