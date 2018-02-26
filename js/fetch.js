// let questions = document.querySelectorAll('fieldset');
// let loaderDiv = document.querySelector('#loader');
// let asyncQuestion = document.querySelectorAll('.asyncQuestion');
// let navigation_questions = document.querySelector('.navigation_questions');
// let navigation_questionsAll = document.querySelectorAll('.number_of_question');
// let question_area = document.querySelector('.question_area');
// let test_end = document.querySelector('.test_end');
// let activeBtn;

// navigation_questions.addEventListener('click', function(e) {
// 	activeBtn = e.target.dataset.id;
// 	for (let i = 0; i < questions.length; i++) {
// 		if(questions[i].dataset.id == activeBtn){
// 			questions[i].style.display = 'block';
// 		}
// 		if(questions[i].dataset.id !== activeBtn){
// 			questions[i].style.display = 'none';
// 		}
// 	}

// 	for (let z = 0; z < navigation_questionsAll.length; z++) {
// 		navigation_questionsAll[z].classList.remove('active');
// 		if(navigation_questionsAll[z].id ==='10' ){
// 			test_end.style.display = 'block';
// 		}
// 	}
// 	e.target.parentElement.classList.add('active');
// });

// function getQuestion(link){
// 	loaderOn();
// 	fetch(link).then(function(response) {
// 		return response.text();
// 	}).then(function(textOfQuestion) {
// 		let QuestionPast = textOfQuestion;
// 		for (let e = 0; e < asyncQuestion.length; e++) {
// 			if (asyncQuestion[e].dataset.id == activeBtn){
// 				asyncQuestion[e].innerHTML = QuestionPast;
// 			}
// 		}
// 		loaderOff();
// 	});
// }

// function loaderOn(){
// 	question_area.style.display = 'none';
// 	loaderDiv.style.display = 'flex';

// }
// function loaderOff(){
// 	question_area.style.display = 'block';
// 	loaderDiv.style.display = 'none';
// }


// function getCheckedCheckBoxes() {
// 	let selectedCheckBoxes = document.querySelectorAll('input.get_value:checked');
// 	let checkedValues = Array.from(selectedCheckBoxes).map(cb => cb.name + ': '+ cb.value);
// 	ajaxSend(checkedValues);
// }  


// function ajaxSend(sendingCheckboxes){
// 	let request = $.ajax({
// 		url: 'insert.php',
// 		method: 'POST',
// 		data: { id : sendingCheckboxes },
// 		dataType: 'html'
// 	});

// 	request.fail(function( jqXHR, textStatus ) {
// 		alert( 'Request failed: ' + textStatus );
// 	});
// }	