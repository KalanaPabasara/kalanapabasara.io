//elements
const video = document.querySelector(".back-video");
const exit_quiz = document.querySelector(".buttons .quit");
const start = document.querySelector(".Start_button");
function start_quiz(){
    start.classList.add("activestart");
    let x = document.getElementById("QuizForm");
    x.style.display = "block";
}
exit_quiz.onclick = ()=>{
    window.location.reload();
    window.scrollTo(0,0);
}
let User_Score;
let Correct=0;
let Incorrect=0;
let result=[];
let score_output;
let questions_correct = 0;
let number;
//getting radio values
function getRadioValue( radioArray ) {
    let i;
    for ( i = 0; i < radioArray.length; i++ ) {
        if ( radioArray[ i ].checked ) { 
            return radioArray[ i ].value;
        }
    }
    return "";
}
function Display_score(){
//Checking correct and incorrect answers using radio values
    if (getRadioValue(document.Quiz.q1)==1){
        Correct+=2;
        questions_correct +=1;
        result[0]="correct";
    }else{
        Incorrect+=1;
        result[0]="incorrect";
    }
    if (getRadioValue(document.Quiz.q2)==3){
        Correct+=2;
        questions_correct +=1;
        result[1]="correct";
    }else{
        Incorrect+=1;
        result[1]="incorrect";
    }
    if (getRadioValue(document.Quiz.q3)==4){
        Correct+=2;
        questions_correct +=1;
        result[2]="correct";
    }else{
        Incorrect+=1;
        result[2]="incorrect";
    }
    if (getRadioValue(document.Quiz.q4)==2){
        Correct+=2;
        questions_correct +=1;
        result[3]="correct";
    }
    else{
        Incorrect+=1;
        result[3]="incorrect";
    }
    if (getRadioValue(document.Quiz.q5)==1){
        Correct+=2;
        questions_correct +=1;
        result[4]="correct";
    }
    else{
        Incorrect+=1;
        result[4]="incorrect";
    }
    if (getRadioValue(document.Quiz.q6)==3){
        Correct+=2;
        questions_correct +=1;
        result[5]="correct";
    }
    else{
        Incorrect+=1;
        result[5]="incorrect";
    }
    if (getRadioValue(document.Quiz.q7)==1){
         Correct+=2;
         questions_correct +=1;
        result[6]="correct";
    }
    else{
        Incorrect+=1;
        result[6]="incorrect";
    }
    if (getRadioValue(document.Quiz.q8)==3){
        Correct+=2;
        questions_correct +=1;
        result[7]="correct";
    }
    else{
        Incorrect+=1;
        result[7]="incorrect";
    }		  
    if (getRadioValue(document.Quiz.q9)==1){
        Correct+=2;
        questions_correct +=1;
        result[8]="correct";
    }
    else{
        Incorrect+=1;
        result[8]="incorrect";
    }	
    if (getRadioValue(document.Quiz.q10)==2){
        Correct+=2;
        questions_correct +=1;
        result[9]="correct";
    }
    else{
        Incorrect+=1;
        result[9]="incorrect";
    }	 
           
//Cunting the total score
    User_Score = Correct - Incorrect;
    Display_Results();
}
function Display_Results(){
    let x = document.getElementById("QuizForm");
    x.style.display = "none";
    video.classList.add("activevideo");
    start.classList.add("activestart");
    exit_quiz.classList.add("activebutton");
    number = "You got " + questions_correct +" Questions correct out of 10 Questions"
    score_output="Your Score is = " + User_Score;
    let one = "Question 1 : Your Answer was " + result[0];
    let two = "Question 2 : Your Answer was " + result[1];
    let three = "Question 3 : Your Answer was " + result[2];
    let four = "Question 4 : Your Answer was " + result[3];
    let five = "Question 5 : Your Answer was " + result[4];
    let six = "Question 6 : Your Answer was " + result[5];
    let seven = "Question 7 : Your Answer was " + result[6];
    let eight = "Question 8 : Your Answer was " + result[7];
    let nine = "Question 9 : Your Answer was " + result[8];
    let ten = "Question 10 : Your Answer was " + result[9];
    let y = document.getElementById("Results");
    y.style.display = "block";
    let timeCount = "Time to complete Quiz : " + timeElapsed + " Seconds "; 
  
// answers  
    document.getElementById("Results").innerHTML="<span>"+number+"</span><br><span>" + score_output + "</span><br><span>" +timeCount+ "</span><br><br><span>" + one + "</span><br><span>" + two + "</span><br><span>" + three + "</span><br><span>" + four + "</span><br><span>" + five + "</span><br><span>" + six + "</span><br><span>" + seven + "</span><br><span>" + eight + "</span><br><span>" + nine + "</span><br><span>" + ten + "</span><br>";
  
//Background color change
    if (User_Score>15){
        document.body.style.backgroundColor = "#008000";
    }else if (User_Score>9){
        document.body.style.backgroundColor = "#ff69b4";
    }else if (User_Score > 0){
        document.body.style.backgroundColor = "#3f27f2";
    }else {
        document.body.style.backgroundColor = "#AA0000";
    }
}
  
let time_out;
//if time exceded
function time_exceded(){
    time_out = setTimeout(function (){stop();alert("You have exceded your time limit");Display_score() ;},60000);
}
  
  
  
//Display results
function endQuiz(){
    clearTimeout(time_out);
    Display_score();
}
  
let timeElapsed = 1;
let Timer = 0;
  
//start the timer
//https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz
//https://youtu.be/9-5URe9CykA
function timer() {
    Timer = setInterval(function(){
        timeElapsed += 1;
        document.getElementById("time").innerText = timeElapsed;
    }, 1000) ;
}
function stop() {
    clearInterval(Timer);
}
  