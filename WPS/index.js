const paragraphs = [
 "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  "JavaScript is a versatile language for frontend development."
];

const textDisplay = document.getElementById("text-display");
const textInput = document.getElementById("text-input");
const timer = document.getElementById("timer");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const restart = document.getElementById("restart");

let current_text;
function loadParagraph(){
    const paragraph = paragraphs[Math.floor(Math.random()*paragraphs.length)];
    textDisplay.innerHTML = "";
    paragraph.split("").forEach(char=>{
        const span = document.createElement("span");
        span.innerText = char;
        textDisplay.appendChild(span);

    });

    current_text = paragraph;
}

let startTime, interval;

let timeLeft1 = 5;
timer.innerText = timeLeft1;
function startTimer(){
    let timeLeft = timeLeft1;
    timer.innerText = timeLeft;
    startTime = new Date();

    interval = setInterval(()=>{
        timeLeft--;
        timer.innerText = timeLeft;
        if(timeLeft <= 0){
            clearInterval(interval);
            timer.innerText = "Time's up!";
            textInput.disabled = true;
        }
    },1000)
}
function stopTimer(){
    clearInterval(interval);
}

function checkTypeSpeed(){
    textInput.addEventListener("input", ()=>{
        const input = textInput.value;
        const chars = textDisplay.querySelectorAll("span");
        console.log(input);
        console.log(chars);
        
        if(input.length == 1 && !startTime) startTimer();
        let correct = 0;
        let incorrect = 0;

        chars.forEach((char, index)=>{
            let typedChar = input[index];
            
            if(!typedChar){
                char.classList.remove("correct", "incorrect");
            }
            else if(typedChar === char.innerText){
                char.classList.add("correct");
                char.classList.remove("incorrect");
                correct++;
            }
            else if(typedChar !== char.innerText){
                char.classList.add("incorrect");
                char.classList.remove("correct");
                incorrect++;
            }

        });
        const totalTyped = input.length;
        const elapsedMin = (new Date() - startTime) / 1000 / 60;

        if (elapsedMin > 0) {
            const WPM = Math.round((totalTyped / 5) / elapsedMin);
            wpm.innerText = WPM;
        }
        if(totalTyped > 0){
            const acc = Math.floor((correct / totalTyped)*100);
            accuracy.innerText = acc;
        }
        if(input.length === current_text.length){
            stopTimer();
        }
        
        
    })
}

function reset(){
    restart.addEventListener("click", ()=>{
        textInput.value = "";
        textInput.disabled = false;
        
        //accuracy.innerText = "0";
        timer.innerText = timeLeft1;
        wpm.innerText = "0";
        accuracy.innerText = "0";
        stopTimer();
        startTime = null;
        loadParagraph();
        textInput.focus();
    });
}

loadParagraph();
checkTypeSpeed();
reset();

