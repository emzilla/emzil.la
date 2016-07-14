// Hide and Show Buttons
// -----------------------

function showAnswer() {
	$('#show-answer').click(function(){
		$('.current-question .answer').show().addClass('visible');
	});
}

function hideAnswer() {
	$('body').on('click', '#hide-answer', function(){
		$('.current-question .answer').hide().removeClass('visible');
	});
}

// Select Random Question
// -----------------------

function randomQuestion() {
	var numQuestions = $('.question').length;

	var number = Math.floor(Math.random() * numQuestions);
	var question = $('.question')[number];

	$(question).show().addClass('current-question');
}

// New Question
// -----------------------
// Show a new question and remove current question from DOM so it doesn't get shown again

function newQuestion() {
	$('#new-question').on('click', function() {
		$('.current-question').remove();
		randomQuestion( function(){
			$(this).addClass('current-question');
		});
	})
}

// Document Ready Scripts
// -----------------------

$(function() {

	showAnswer();
	hideAnswer();
	randomQuestion();
	newQuestion();

});	
