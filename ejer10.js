const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: ["Londres", "París", "Berlín", "Madrid"],
      correctAnswer: 1,
    },
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: ["Venus", "Marte", "Júpiter", "Saturno"],
      correctAnswer: 2,
    },
    {
      question: "¿Cuántos continentes hay en el mundo?",
      options: ["3", "5", "7", "9"],
      correctAnswer: 2,
    },
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionText = document.getElementById("question-text");
  const options = document.querySelectorAll(".option");
  const scoreDisplay = document.getElementById("score");
  const resultContainer = document.getElementById("result-container");
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
  
    for (let i = 0; i < options.length; i++) {
      options[i].textContent = question.options[i];
    }
  }
  
  function checkAnswer(selectedOption) {
    const selectedOptionIndex = Array.from(options).indexOf(selectedOption);
    const question = questions[currentQuestionIndex];
  
    if (selectedOptionIndex === question.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    resultContainer.style.display = "block";
    questionText.textContent = "Juego completado";
    scoreDisplay.textContent = score + " puntos";
  }
  
  showQuestion();
  