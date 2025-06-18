function checkAnswer(){
    const correctAnswer ="4";
    const feedback = document.getElementById("feedback");
    
    const userAnswer = document.querySelector(
      'input[name="quiz"]:checked'
    ).value;
    if(userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
        
    } else {
        feedback.textContent = "Incorrect. Try again!";
    }
}
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);