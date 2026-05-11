const questions=[

{
    question:"Qual tecnologia economiza água?",
    answers:[
        {text:"Irrigação Inteligente",correct:true},
        {text:"Queimadas",correct:false},
        {text:"Desmatamento",correct:false}
    ]
},

{
    question:"Qual energia é sustentável?",
    answers:[
        {text:"Solar",correct:true},
        {text:"Carvão",correct:false},
        {text:"Petróleo",correct:false}
    ]
}

];

let currentQuestion=0;
let score=0;

const questionElement=document.getElementById("question");
const answersElement=document.getElementById("answers");
const scoreElement=document.getElementById("score");

function showQuestion(){

    let q=questions[currentQuestion];

    questionElement.innerText=q.question;

    answersElement.innerHTML="";

    q.answers.forEach(answer=>{

        const btn=document.createElement("button");

        btn.innerText=answer.text;

        btn.classList.add("btn");

        btn.onclick=()=>selectAnswer(answer.correct);

        answersElement.appendChild(btn);

    });

}

function selectAnswer(correct){

    if(correct){

        score++;

        new Audio("sounds/correct.mp3").play();

    }else{

        new Audio("sounds/wrong.mp3").play();

    }

    currentQuestion++;

    if(currentQuestion<questions.length){

        showQuestion();

    }else{

        questionElement.innerText="Quiz Finalizado!";

        answersElement.innerHTML="";

        scoreElement.innerText=`Pontuação: ${score}`;

    }

}

showQuestion();
