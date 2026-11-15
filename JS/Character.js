const textarea = document.querySelector('#message')
const compteu = document.querySelector('#compteur')
const button = document.querySelector('#envoyer')

textarea.addEventListener('input', () => {
    const nombre = textarea.value.length

    compteu.textContent = `${nombre} / 50`

    if (nombre > 50) {
        compteu.classList.add('text-red-600')
        compteu.classList.remove('text-gray-600')
    } else {
        compteu.classList.remove('text-red-600')
        compteu.classList.add('text-gray-600')
    }
      if (textarea.value === '' || nombre > 50) {
        button.disabled = true
    } else {
        button.disabled = false
    }
})