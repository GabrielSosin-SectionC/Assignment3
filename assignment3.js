//Used to submit login information
document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    let emailValue = document.getElementById("email").value.trim(); 
    let passwordValue = document.getElementById("password").value.trim();
    //if login information matches, redirect user to quiz
    if (emailValue == "admin" && passwordValue == "1234") {
        console.log("1")
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("submit").style.backgroundColor = "green";
        document.getElementById("submit").style.color = "white";
        window.location.href = "assignment3.html";
    //if login information is wrong, shake button and set it to red
    } else {
        document.getElementById("submit").style.backgroundColor = "red";
        document.getElementById("submit").classList = "btn btn-primary mt-2 shake-horizontal";
    }
}); 

//Used to start quiz
document.getElementById("start").addEventListener("click", function() {
    document.getElementById("questionContainer").style.display = "";
    document.getElementById("start").style.display = "none";
})

//Used to calculate the quiz score
document.getElementById("submitQuestions").addEventListener("click", function() {
    var score = 0;
    document.getElementById("submitQuestions").style.display = "none";

    // Question 1
    var q1Answer = document.querySelector('input[name="flexRadioDefault1"]:checked');
    if (q1Answer && q1Answer.value === '1') {
      score++;
      document.getElementById("q1").style.backgroundColor = "green";
    } else {
        document.getElementById("q1").style.backgroundColor = "red";
    }
  
    // Question 2
    var q2Answer = document.querySelector('input[name="flexRadioDefault2"]:checked');
    if (q2Answer && q2Answer.value === '5') {
      score++;
      document.getElementById("q2").style.backgroundColor = "green";
    } else {
        document.getElementById("q2").style.backgroundColor = "red";
    }

    // Question 3
    var q3Answer = document.querySelector('input[name="flexRadioDefault3"]:checked');
    if (q3Answer && q3Answer.value === '10') {
      score++;
      document.getElementById("q3").style.backgroundColor = "green";
    } else {
        document.getElementById("q3").style.backgroundColor = "red";
    }

    // Question 4
    var q4Answer = document.querySelector('input[name="flexRadioDefault4"]:checked');
    if (q4Answer && q4Answer.value === '14') {
      score++;
      document.getElementById("q4").style.backgroundColor = "green";
    } else {
        document.getElementById("q4").style.backgroundColor = "red";
    }

    // Question 5
    var q5Answer = document.querySelector('input[name="flexRadioDefault5"]:checked');
    if (q5Answer && q5Answer.value === '17') {
      score++;
      document.getElementById("q5").style.backgroundColor = "green";
    } else {
        document.getElementById("q5").style.backgroundColor = "red";
    }

    // Get all radio buttons
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    // Loop through each radio button and disable it
    radioButtons.forEach(function(radioButton) {
        radioButton.disabled = true;
    });
  
    // Display score
    document.getElementById("score").classList = "text-focus-in text-center";
    document.getElementById('score').innerHTML = 'Your score: ' + (score/5)*100 +"%";
    if ((score/5)*100 <= 50) {
        document.getElementById("score-container").style.backgroundColor = "red";
    } else if ((score/5)*100 >= 51) {
        document.getElementById("score-container").style.backgroundColor = "green";
    }
});



