function populate() {
	if(quiz.isEnded()){
		//showScores();
	}
	else {
		//show question
		var element = document.getElementById("question");
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices

		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element= document.getElementBy("choice" + i);
			element.innerHTML = choices[i];

		}
	}
}

var questions = [
	new Question("If she _____, she would have passed the exam",["had studied" ,"have studied", "had study", "have study"], "had studied"),
	new Question("If _______ so much, i wouldn't have left sick", ["hadn't eaten", "hadn't eat", "hadn't ate", "haven't eaten"], "hadn't eaten"),
	new Question("If we____ a taxi, we wouldn't have missed the plane", ["had taken", "have taken", "have take", "had take"], "had taken"),
	new Question("He ________ if he had gone to bed earlier", ["would not have been", "would not had been", "had been", "would not been"], "would not have been"),
	new Question("She ________ a teacher if she had gone to university", ["would have become", "would had become", "had become", "would become"], "would have become")
];

var quiz = new Quiz(questions);

populate();