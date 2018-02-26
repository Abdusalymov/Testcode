class EventEmitter {
	constructor() {
		this.events = {};
	}

	on(type, listener) {
		this.events[type] = this.events[type] || [];
		this.events[type].push(listener);
	}

	emit(type, arg) {
		if (this.events[type]) {
			this.events[type].forEach(listener => listener(arg));
		}
	}
}

class Controller {
	constructor(view, model) {
		this.view = view;
		this.model = model;

		view.on('click', this.addActive.bind(this));
	}

	addActive(item) {
		this.view.buttonsOff(item.parentElement.parentElement.children);
		this.view.buttonOn(item.parentElement);
		this.view.hiddenQuestions();
		this.view.showQuestion(item.dataset.id);
		this.creatLink(item.dataset.id);
	}

	creatLink(dataId){
		if(dataId > 103){
			let link = `../questions/${dataId}.html`; 
			let text = this.model.getQuestion(link);
			this.view.insertQuestion(dataId, text);
		}
		
	}
}



class View extends EventEmitter {
	constructor() {
		super();

		this.buttons = document.querySelector('.navigation_questions');
		this.buttons.addEventListener('click', (e) => {
			const bttnOn = e.target;
			this.emit('click', bttnOn);
		});
	}
	buttonOn(active) {
		active.classList.add('active');
	}

	buttonsOff(buttons) {
		for (let index = 0; index < buttons.length; index++) {
			buttons[index].classList.remove('active');
		}
	}

	insertQuestion(dataId,text){
		let fieldsets = document.querySelectorAll('fieldset');  
		for (let i = 0; i < fieldsets.length; i++) {
			if(fieldsets[i].dataset.id === dataId){
				fieldsets[i].innerHTML = text;
			}
		}	
		
	}

	showQuestion(item){
		let fieldsets = document.querySelectorAll('fieldset');  
		for (let i = 0; i < fieldsets.length; i++) {
			if(fieldsets[i].dataset.id === item){
				fieldsets[i].style.display = 'block';
			}
		}	
	}

	hiddenQuestions(){
		let fieldsets = document.querySelectorAll('fieldset');  
		
		for (let i = 0; i < fieldsets.length; i++) {
			fieldsets[i].style.display = 'none';
		}
	}

}

class Model{
	constructor(){
	}

	getQuestion(link){
		var xhr = new XMLHttpRequest();
		xhr.open('GET', link, false);
		xhr.send();
		if (xhr.status != 200) {
			alert(xhr.status + ': ' + xhr.statusText); 
		}else{
			return xhr.responseText; 
		}
		
	}
}
let model = new Model();
let view = new View();
let controll = new Controller(view, model);

// function getQuestion(link){
// 	// loaderOn();
// 	fetch(link).then(function (response) {
// 		return response.text();
// 	}).then(function (textOfQuestion) {
// 		let QuestionPast = textOfQuestion;
// 		for (let e = 0; e < asyncQuestion.length; e++) {
// 			if (asyncQuestion[e].dataset.id == activeBtn) {
// 				asyncQuestion[e].innerHTML = QuestionPast;
// 			}
// 		}
// 		// loaderOff();
// 	});
// }