loadQuestions(0)

function loadQuestions(index) {
    let objectQuestion = dbQuestions[index]
    document.getElementById("question").innerHTML = objectQuestion.question
}