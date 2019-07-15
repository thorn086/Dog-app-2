'use strick';


function submitForm() {
    $('form').submit(event => {
        event.preventDefault();
        userInput();
        resetForm();
    });
}

function startImages(){
    fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(dogImage => dogImage.json())
    .then(dogImageJson => displayStart(dogImageJson));
}

function displayStart(dogImageJson){
    console.log(dogImageJson);
    let x ="";
    for (i = 0; i < dogImageJson.message.length; i++) {
        x += dogImageJson.message[i] ;
    };
    
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


$(function () {
    console.log('app loaded, ready for submition');
    startImages();
    submitForm();
});