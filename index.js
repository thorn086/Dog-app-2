'use strick';


function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        userInput();
    });
}

function userInput() {
    let numChoice = document.getElementById("photos").value;
    fetch('https://dog.ceo/api/breeds/image/random/' + numChoice)
        .then(dogImage => dogImage.json())
        .then(dogImageJson => console.log(dogImageJson));
}


$(function () {
    console.log('app loaded, ready for submition');
    submitForm();
});