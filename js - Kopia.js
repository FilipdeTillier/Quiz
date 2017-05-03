var q1 = document.getElementById('question1');
var xhr = new XMLHttpRequest();
var JsonFile;
xhr.onload = function() {
    if (xhr.status === 200) {
        JsonFile = JSON.parse(xhr.responseText);
    }

    let question0 = JsonFile.questions[0],
        question1 = JsonFile.questions[1],
        question2 = JsonFile.questions[2],
        question3 = JsonFile.questions[3],
        question4 = JsonFile.questions[4],
        question5 = JsonFile.questions[5],
        question6 = JsonFile.questions[6],
        question7 = JsonFile.questions[7];

    for (var i = 1; i <= 9; i++) {
        document.getElementById(`question${i}`).innerHTML = " <div class='sg-box sg-box--no-border sg-box--mint' style = 'padding = 10px; width = 100%;' >" + JsonFile.questions[i - 1].question + "<div>";
    }
    for (var i = 1; i <= 9; i++) {
        document.getElementById(`answerA${i}`).innerHTML = `<input type = 'radio' id = "JsonFile.questions[${i-1}].answers[${0}].correct">   ` + JsonFile.questions[i - 1].answers[0].answer;
    }
    for (var i = 1; i <= 9; i++) {
        document.getElementById(`answerB${i}`).innerHTML = `<input type = 'radio' id = "JsonFile.questions[${i-1}].answers[${1}].correct">   ` + JsonFile.questions[i - 1].answers[1].answer;
    }
    for (var i = 1; i <= 9; i++) {
        document.getElementById(`answerC${i}`).innerHTML = `<input type = 'radio' id = "JsonFile.questions[${i-1}].answers[${2}].correct">   ` + JsonFile.questions[i - 1].answers[2].answer;
    }
    for (var i = 1; i <= 9; i++) {
        document.getElementById(`answerD${i}`).innerHTML = `<input type = 'radio' id = "JsonFile.questions[${i-1}].answers[${3}].correct">   ` + JsonFile.questions[i - 1].answers[3].answer;
    }

    function userAnswer() {
        let totalAnswers = 9;
        let score = 0;


    }

}
xhr.open('GET', 'https://cdn.rawgit.com/kdzwinel/cd08d08002995675f10d065985257416/raw/f681999d414a85f081c52424605151cc8f93313d/quiz-data.json', true);
xhr.send(null);