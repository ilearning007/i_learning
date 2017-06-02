function Quiz(questions) {
	this.score= 0;
	this.questios = questions;
	this.questionIndex= 0;
}

Quiz.prototype.getQuestionIndex= function(){
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded= function(){
	return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer){
	this.questionIndex++;

	if(this.getQuestionIndex().correcAnswer(answer)){
		this.score++;
	}
}