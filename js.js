    var q1 = document.getElementById('question1');
    var xhr = new XMLHttpRequest();
    var JsonFile;
    const allRadioInputs = document.getElementsByClassName('userAnswer');
    const StartButton = document.getElementById('start');
    const StartInfo = document.getElementById('startinfo');
    const EndInfoFalse = document.getElementById('endinfofalse');
    const EndInfoTrue = document.getElementById('endinfotrue');
    const outOfTime = document.getElementById('outoftime');
    const endTime = document.getElementById('endtime');
    const EndButtonFalse = document.getElementById('endfalse');
    const EndButtonTrue = document.getElementById('endtrue');
    const body = document.querySelector("body");
    let allRadioInputsLength = allRadioInputs.length;
    var points = 0;
    StartButton.addEventListener('click', function() {
        StartInfo.style.visibility = "hidden";
        body.style.opacity = "1.0";
        xhr.onload = function() {
            if (xhr.status === 200) {
                JsonFile = JSON.parse(xhr.responseText);
            }
            const JsonQuestionsLength = JsonFile.questions.length;

            for (var i = 1; i <= JsonQuestionsLength; i++) {
                document.getElementById(`question${i}`).innerHTML = " <div class='sg-box sg-box--no-border sg-box--mint' style = 'padding = 10px; width = 100%;' >" + `${i}` + ". " + JsonFile.questions[i - 1].question + "<div>";
            }
            for (var i = 1; i <= JsonQuestionsLength; i++) {
                document.getElementById(`answerA${i}`).innerHTML = `<input type='radio' class = "userAnswer" name='userAnswer${i}' id = 'answerA${i}' value='` + JsonFile.questions[i - 1].answers[0].correct + "'>" + " " + JsonFile.questions[i - 1].answers[0].answer;
            }
            for (var i = 1; i <= JsonQuestionsLength; i++) {
                document.getElementById(`answerB${i}`).innerHTML = `<input type='radio' class = "userAnswer" name='userAnswer${i}' id = 'answerB${i}' value='` + JsonFile.questions[i - 1].answers[1].correct + "'>" + " " + JsonFile.questions[i - 1].answers[1].answer;
            }
            for (var i = 1; i <= JsonQuestionsLength; i++) {
                document.getElementById(`answerC${i}`).innerHTML = `<input type='radio' class = "userAnswer" name='userAnswer${i}' id = 'answerC${i}' value='` + JsonFile.questions[i - 1].answers[2].correct + "'>" + " " + JsonFile.questions[i - 1].answers[2].answer;
            }
            for (var i = 1; i <= JsonQuestionsLength; i++) {
                document.getElementById(`answerD${i}`).innerHTML = `<input type='radio' class = "userAnswer" name='userAnswer${i}' id = 'answerD${i}' value='` + JsonFile.questions[i - 1].answers[3].correct + "'>" + " " + JsonFile.questions[i - 1].answers[3].answer;
            }

            function sumAnswers() {
                for (var i = 0; i <= 35; i++) {
                    if (allRadioInputs[i].checked === true && allRadioInputs[i].value === "true") {
                        points = points + 1;
                    }
                }
            }
            var check = document.getElementById('check');
            check.addEventListener('click', function() {
                sumAnswers();
                console.log(points);
                if (points >= 7) {
                    EndInfoTrue.style.visibility = "visible";
                    EndButtonTrue.addEventListener('click', function() {
                        location.reload()
                    }, false);
                } else {
                    EndInfoFalse.style.visibility = "visible";
                    EndButtonFalse.addEventListener('click', function() {
                        location.reload()
                    }, false);
                }
                points = 0;
            }, false)

            let time = JsonFile.time_seconds;
            let timer = document.getElementById('timer'),
                seconds = 0,
                minutes = 5;
            timer.innerHTML = "0" + minutes + " : " + "0" + seconds;
            setInterval(function() {
                seconds = seconds - 1;
                if (seconds < 0) {
                    seconds = 59;
                    minutes = minutes - 1;
                }
                if (seconds <= 9) {
                    timer.innerHTML = "0" + minutes + " : " + "0" + seconds;
                } else {
                    timer.innerHTML = "0" + minutes + " : " + seconds;
                }
                if (minutes < 0 && seconds < 0) {
                    timer.innerHTML = " ";
                }
                time = time - 1
                console.log(minutes);
                console.log(seconds);
                console.log(time);
                if (time < 0) {
                    outOfTime.style.visibility = "visible";
                    endTime.addEventListener('click', function() {
                        location.reload()
                    }, false);
                }
            }, 1000)
        }
        xhr.open('GET', 'https://cdn.rawgit.com/kdzwinel/cd08d08002995675f10d065985257416/raw/811ad96a0567648ff858b4f14d0096ba241f28ef/quiz-data.json', true);
        xhr.send(null);
    }, false);
