import data from './questions.json'

const randomArrayShuffle = (array) => {
	let currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

const questions = (d) =>{

	let quiz = []
	let obj ={}
	for(let i=0; i<d.results.length; i++){

		obj['category'] = d.results[i].category
		obj['questions'] = d.results[i].question
		obj['correct_answer'] = d.results[i].correct_answer	
		obj['choices'] = randomArrayShuffle( d.results[i].incorrect_answers.concat( obj['correct_answer']) )
		
		quiz.push({...obj})
	}
	// console.log(quiz)
	
	return quiz
}

export default questions(data)