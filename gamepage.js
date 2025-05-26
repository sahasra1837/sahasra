player1_score = 0;
player2_score = 0;
player1 = localStorage.getItem("login_1");
player2 = localStorage.getItem("login_2");
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";
document.getElementById("question").innerHTML = "Question Turn: " + player1;
document.getElementById("answer").innerHTML = "Answer Turn: " + player2;

function sendQuestion() {
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='answer_box' class='form-control' placeholder='Write Answer Here'>";
    check_button = "<br><br> <button class='btn btn-info' id='answer_check' onclick='check()'> Check </button>";
    row = question + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("answer_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question").innerHTML = "Question Turn: " + player2;
    } else {
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question Turn: " + player1;
    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn: " + player2;
    } else {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn: " + player1;
    }
    document.getElementById("output").innerHTML = "";
}
