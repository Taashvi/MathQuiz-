var player1=localStorage.getItem("Player One");
var player2=localStorage.getItem("Player Two");
document.getElementById("name1").innerHTML=player1+": ";
document.getElementById("name2").innerHTML=player2+": ";

var score1=0;
var score2=0;
document.getElementById("score1").innerHTML=score1;
document.getElementById("score2").innerHTML=score2;

document.getElementById("question_turn").innerHTML="Question Turn: "+player1;
document.getElementById("answer_turn").innerHTML="Answer Turn: "+player2;

function add(){
    var no_1=document.getElementById("number_1").value;
    var no_2=document.getElementById("number_2").value;

    var question_add=no_1+" + "+no_2;
    console.log(question_add);

    var answer_add=Number(no_1)+Number(no_2);
    console.log(answer_add);

    var question_display="<h4 id='question_display'><b>Q.  </b>"+question_add+"</h4>";
    var answer_input="<input id='answer_input' placeholder='Enter Your Answer'>";
    var check_button="<button id='check_button' onclick='check()'>Check</button>";
    var row=question_display+"<br/>"+answer_input+"<br/>"+"<br/>"+check_button+"<br/>"+"<br/>";
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}

function subtract(){
    var no_1=document.getElementById("number_1").value;
    var no_2=document.getElementById("number_2").value;

    var question_subtract=no_1+" - "+no_2;
    console.log(question_subtract);

    var answer_subtract=Number(no_1)-Number(no_2);
    console.log(answer_subtract);

    var question_display="<h4 id='question_display'><b>Q.  </b>"+question_subtract+"</h4>";
    var answer_input="<input id='answer_input' placeholder='Enter Your Answer'>";
    var check_button="<button id='check_button' onclick='check()'>Check</button>";
    var row=question_display+"<br/>"+answer_input+"<br/>"+"<br/>"+check_button+"<br/>"+"<br/>";
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}

function multiply(){
    var no_1=document.getElementById("number_1").value;
    var no_2=document.getElementById("number_2").value;

    var question_multiply=no_1+" * "+no_2;
    console.log(question_multiply);

    var answer_multiply=Number(no_1)*Number(no_2);
    console.log(answer_multiply);

    var question_display="<h4 id='question_display'><b>Q.  </b>"+question_multiply+"</h4>";
    var answer_input="<input id='answer_input' placeholder='Enter Your Answer'>";
    var check_button="<button id='check_button' onclick='check()'>Check</button>";
    var row=question_display+"<br/>"+answer_input+"<br/>"+"<br/>"+check_button+"<br/>"+"<br/>";
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}

function divide(){
    var no_1=document.getElementById("number_1").value;
    var no_2=document.getElementById("number_2").value;

    var question_divide=no_1+" / "+no_2;
    console.log(question_divide);

    var answer_divide=Number(no_1)/Number(no_2);
    console.log(answer_divide);

    var question_display="<h4 id='question_display'><b>Q.  </b>"+question_divide+"</h4>";
    var answer_input="<input id='answer_input' placeholder='Enter Your Answer'>";
    var check_button="<button id='check_button' onclick='check()'>Check</button>";
    var row=question_display+"<br/>"+answer_input+"<br/>"+"<br/>"+check_button+"<br/>"+"<br/>";
    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
}