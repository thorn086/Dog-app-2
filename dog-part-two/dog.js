'use strick';


function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        userInput();
        resetForm();
    });
}

function userInput() {
    let numChoice = document.getElementById("photos").value;
    fetch('https://dog.ceo/api/breeds/image/random/' + numChoice)
        .then(dogImage => dogImage.json())
        .then(dogImageJson => console.log(dogImageJson));
}

function resetForm(){
    $('form').trigger('reset');
}

userInput();
$(function () {
    console.log('app loaded, ready for submition');
    submitForm();
});