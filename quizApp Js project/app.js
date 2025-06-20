const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which programming language is known as the backbone of web development?",
        options: ["Python", "JavaScript", "Java", "C++"],
        correctAnswer: "JavaScript",
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "H2"],
        correctAnswer: "H2O",
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: [
            "Charles Dickens",
            "William Shakespeare",
            "Mark Twain",
            "Jane Austen",
        ],
        correctAnswer: "William Shakespeare",
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Saturn", "Mars"],
        correctAnswer: "Jupiter",
    },
];

let index = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let totalQuestions = quizQuestions.length;

setQ = () => {
    if (index >= totalQuestions) {
        const container=document.getElementsByClassName("container")[0];
container.innerHTML=`
<h1>Quiz Completed!</h1>
<p>Your score is: ${correctAnswers} / ${totalQuestions}</p>
<p>Correct Answers: ${correctAnswers}</p>
<p>Wrong Answers: ${wrongAnswers}</p>
<button onclick="location.reload()">Restart Quiz</button>
`;
    }
    else{
    const option=document.querySelectorAll('input[name="option"]');
    option.forEach((option)=>{
        option.checked=false;
    });
    const question = document.getElementById("que");
    const options = document.querySelectorAll(".option");
    question.innerHTML = quizQuestions[index].question;
    const optionTexts = [
        document.getElementById("option1_text"),
        document.getElementById("option2_text"),
        document.getElementById("option3_text"),
        document.getElementById("option4_text"),
    ]
    quizQuestions[index].options.forEach((option, i) => {
        optionTexts[i].innerText = option;
    })


    index++;
}
}
setQ();

submitAnswer = () => {
    const select= document.querySelector("input[name='option']:checked");
    if (!select) {
        alert("Please select an option before submitting.");
        return;
    }
    const selectedOption = select.nextElementSibling.innerText;
    
   
    if (selectedOption == quizQuestions[index - 1].correctAnswer) {
        correctAnswers++;
      
    }
    else {
        wrongAnswers++;
     
    }

    setQ();

}