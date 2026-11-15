const note = document.querySelectorAll('.note')
const noteone = document.getElementsByClassName('note')
const surligner = document.querySelector('#surligner')
surligner.addEventListener('click' , () => {
    note.forEach((elemant) => {
        elemant.classList.toggle('bg-yellow-200')
    }); 
});
Array.from(noteone).forEach((element) => {
    console.log(element);
});

const lire = document.querySelector('#lire')

lire.addEventListener('click', () => {
    
    const themes = document.getElementsByName('theme');
    
    for (let i = 0; i < themes.length; i++) {
        
        if (themes[i].checked) {
            console.log(themes[i].value);
        }
        
    }
    
});
const note4 = document.createElement('p');
note4.className = 'note';
note4.textContent = 'Note D';
document.body.append(note4);

console.log(note.length);
console.log(noteone.length);