    function send() {
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    actual_answer = parseInt(number1)*parseInt(number2)
}
player1score = 0
player2score = 0

questionNumber = "h4" + number1 + " X " + number2 + "</h4>"
inputBox = "<br> Resposta : <input type='text' id='input_check_box'>"
checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>"
row = questionNumber + inputBox + checkButton
document.getElementById("output").innerHTML = row
document.getElementById("number1").value=""
document.getElementById("number2").value=""
question_turn = "player1"
answer_turn = "player2"
    function checar() {
    get_answer = document.getElementById("input_check_box").value
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player1_score = player1score + 1
            document.getElementById("player1Score").innerHTML = update_player1_score
        } else {
            update_player2_score = player2score + 1
            document.getElementById("player2Score").innerHTML = update_player2_score
        }
        if (question_turn == "player1") {
            question_turn = "player2"
            document.getElementById("player_question").innerHTML = "player1"
        } else {
            question_turn = "player1"
            document.getElementById("player_question").innerHTML = "player2"
        }
    }
}