player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : "

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;


function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase : " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    index = Math.floor(word.length / 2);
    charAt2 = word.charAt(index);

    index2 = word.length - 1
    charAt3 = word.charAt(index2);

    remove_char1 = word.replace(charAt1, "_");
    remove_char2 = remove_char1.replace(charAt2, "_");
    remove_char3 = remove_char2.replace(charAt3, "_");

    question_word = "<h3 id='word_display'> Q. " + remove_char3 + "</h3>";
    answer_word = "<br> answer: <input id='input_checkbox' type='text'>"
    check_btn = "<br> <button id='check_button' class='btn btn-info' onclick='check()'> Check </button>"

    row = question_word + answer_word + check_btn;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";

}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_checkbox").value;
    answer = get_answer.toLowerCase();

    if (answer == word) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
            else {
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
        }
    


if (question_turn == "player1") {
    question_turn = "player2";
    document.getElementById("player_question").innerHTML = "question turn - " + player2_name;

}
else {
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "question turn - " + player1_name;
}

if (answer_turn == "player1") {
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML = "answer turn - " + player2_name;
}
else {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "answer turn - " + player1_name;
}

document.getElementById("output").innerHTML = "";

}
