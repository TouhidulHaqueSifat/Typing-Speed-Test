const paragraphs = [
 "Typing is a useful skill for programmers and writers.",
  "The quick brown fox jumps over the lazy dog.",
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
function startTimer(){
    startTime = new Date();
    interval = setInterval(()=>{
        const elapsed = Math.floor((new Date() - startTime) / 1000);
        timer.innerText = elapsed;
    }, 1000);

}
/*function startTimer(){
    let timeLeft = 60;
    timer.innerText = timeLeft;
    startTime = new Date();

    interval = setInterval(()=>{
        timeLeft--;
        timer.innerText = timeLeft;
        if(timeLeft <= 0){
            clearInterval(interval);
            timer.innerText = "Time's up!";
        }
    },1000)
}*/
function stopTimer(){
    clearInterval(interval);
}

// Todo: fixed the timer
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
//startTimer();
loadParagraph();
checkTypeSpeed();
//console.log(textArea);
