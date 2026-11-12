const courses = ['Pain', 'Lait', 'Œufs', 'Tomates'];

const total = document.querySelector('#total');
const liste = document.querySelector('#liste');

function afficherCourses() {
    total.textContent = `${courses.length} articles`;

    liste.textContent = '';

    for (let i = 0; i < courses.length; i++) {
        const li = document.createElement('li');

        li.textContent = `${i + 1}. ${courses[i]}`;

        liste.appendChild(li);
    }
}

afficherCourses();

console.log(courses[0]);
console.log(courses[courses.length - 1]);
console.log(courses.length);