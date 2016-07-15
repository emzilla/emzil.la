// Functions
// -----------------------

function resumeEasterEgg() {
	console.log('Some more about me:');
	setTimeout(function() {
		console.log('Current favorite color is a lemon-y yellow #f5de19;');
	},1000);
	setTimeout(function() {
		console.log('I dont think Montserrat is overrated');
	}, 2000);
	setTimeout(function() {
		console.log('I love chocolate');
	}, 3000);
	setTimeout(function() {
		console.log('DARMOK AND JALAD AT TANAGRA!');
	}, 4000);
	setTimeout(function() {
		console.log('I invented a game called Space Darts');
	}, 5000);
}

// Document Ready Functions
// -----------------------

$(function() {

	resumeEasterEgg();

});