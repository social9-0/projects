// // CALCULATOR JS

// const display = document.getElementById("display");

// function appendToDisplay(input){
//    display.value += input;
// }

// function clearDisplay(){
//    display.value='';
// }
// function calculate(){
//    display.value=eval(display.value);
// }
// function deletelast(){
//    display.value= display.value.slice(0,-1)
// }

// CALCULATOR JS (intentionally broken / prank version)

const display = document.getElementById("display");

function appendToDisplay(input){
   display.value += input;
}

function clearDisplay(){
   display.value = '';
}

function deletelast(){
   display.value = display.value.slice(0, -1);
}

function calculate(){
   let expression = display.value;

   // Prank #1: randomly swap + and - before evaluating
   if (Math.random() < 0.3) {
      expression = expression.replace(/\+/g, '§').replace(/-/g, '+').replace(/§/g, '-');
   }

   let result;
   try {
      result = eval(expression);
   } catch (e) {
      display.value = "Error";
      return;
   }

   // Prank #2: occasionally just answer 42, because why not
   if (Math.random() < 0.15) {
      result = 42;
   }
   // Prank #3: otherwise nudge the real answer slightly off
   else if (typeof result === 'number' && !isNaN(result)) {
      const fudge = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 0.07 + 0.01);
      result = Math.round((result + result * fudge) * 100) / 100;
   }

   display.value = result;
}

function toggleCalculator(){
   const calc = document.getElementById("calculatorApp");
   calc.style.display = (calc.style.display === "none" || calc.style.display === "") ? "block" : "none";
}

// function toggleNotepad() {

//     const note = document.getElementById("notepadApp");

//     note.style.display =
//         (note.style.display === "none" || note.style.display === "")
//         ? "block"
//         : "none";
// }

// function closeNotepad() {

//     const note = document.getElementById("notepadApp");

//     note.style.display = "none";
// }

function toggleNotepad() {

    const note = document.getElementById("notepadApp");

    if (note.style.display === "none") {
        note.style.display = "block";
    } else {
        note.style.display = "none";
    }

}


function closeNotepad() {

    document.getElementById("notepadApp").style.display = "none";

}


function rageBait(event) {

    event.preventDefault();

    const messages = [
        "What's there to type about your life, huh?",
        "Why are you typing instead of studying?",
        "You could be studying right now.",
        "Isn't it enough? Go study.",
        "Your exam is getting closer btw.",
        "Typing won't increase your marks.",
        "Did you finish your assignments?",
        "You remembered how to type but forgot how to study?",
        "Bro really opened Notepad instead of the textbook 💀",
        "Your syllabus is crying right now.",
        "Close me. Open your notes.",
        "Another minute wasted. Congratulations.",
        "Why are you like this?",
        "What if you studied instead?",
        "ERROR: Motivation not found.",
        "ERROR: Productivity not found.",
        "You opened Notepad. FOR WHAT?",
        "What exactly are you trying to accomplish?",
        "Stop typing. Start studying.",
        "Your keyboard deserves better."
    ];

    const randomNumber = Math.floor(Math.random() * messages.length);

    document.getElementById("notepadText").value = messages[randomNumber];

}

function toggleFileManager() {
    const file = document.getElementById("fileManagerApp");

    if (file.style.display === "none") {
        file.style.display = "block";
    } else {
        file.style.display = "none";
    }
}

function closeFileManager() {
    document.getElementById("fileManagerApp").style.display = "none";
}

function openFakeFile() {
    alert("You found nothing. Congratulations.");
}

function openFakeFile1() {
    alert("Congratulations. There is no homework here. You are free to go.");
}
function openFakeFile2() {
    alert("we told you there is nothing here.");
}
function openFakeFile3() {
    alert("HEHE WE TOLD YOU TO NOT TO OPEN FACE CONSEQUESE");
}

function toggleRecycleBin() {

    const recycle = document.getElementById("recycleBinApp");

    if (recycle.style.display === "none") {
        recycle.style.display = "block";
    } else {
        recycle.style.display = "none";
    }

}


function closeRecycleBin() {

    document.getElementById("recycleBinApp").style.display = "none";

}
