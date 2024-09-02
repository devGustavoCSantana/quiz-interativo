function submitQuiz() {
    const correctAnswers = {
        q1: 'c',
        q2: 'b',
        q3: 'a'
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    const result = document.getElementById('result');

    for (let question in correctAnswers) {
        const selectedOption = form.querySelector(`input[name=${question}]:checked`);
        if (selectedOption && selectedOption.value === correctAnswers[question]) {
            score++;
        }
    }

    result.textContent = `Você acertou ${score} de 3 perguntas.`;
    result.classList.remove('hidden');
}
