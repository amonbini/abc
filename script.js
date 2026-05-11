function checkAnswer(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    
    // Mostra o feedback
    feedback.classList.remove('hidden');
    feedback.setAttribute('aria-hidden', 'false');
    
    if (isCorrect) {
        feedback.textContent = "Correto! Infelizmente, apenas cerca de 17,4% do lixo eletrônico mundial é coletado e reciclado adequadamente.";
        feedback.style.color = "#1b4332";
    } else {
        feedback.textContent = "Quase lá! A resposta correta é 'Menos de 20%'. O descarte incorreto ainda é um grande desafio tecnológico.";
        feedback.style.color = "#8b0000";
    }
    
    // Desabilita os botões após a resposta para evitar múltiplos cliques
    const buttons = document.querySelectorAll('.quiz-option');
    buttons.forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.style.cursor = "not-allowed";
    });
}
