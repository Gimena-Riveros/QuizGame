loadQuestions(0)

function loadQuestions(index) {
    // al sacar let la variable persiste mas alla de esta funcion, ahora es global
    objectQuestion = dbQuestions[index]
    let options = [...objectQuestion.badanswers]
    // badanswers + answer
    options.push(objectQuestion.answer)
    // double random options
    for(let i = 0 ; i<4 ; i++) {
        options.sort(() => Math.random()-0.5);
    }

    document.getElementById("question").innerHTML = objectQuestion.question
    document.getElementById("option-01").innerHTML = options[0]
    document.getElementById("option-02").innerHTML = options[1]
    document.getElementById("option-03").innerHTML = options[2]
    document.getElementById("option-04").innerHTML = options[3]
    
}
// funcionalidad cortesia de sweetalert
function helper() {
    Swal.fire({
        title: "Help!",
        text: objectQuestion.help,
        imageUrl: objectQuestion.imgHelp,
        imageHeight: 250,
      });
}