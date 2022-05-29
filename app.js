const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('#empty');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const text = input.value;

    if (text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);

        input.value = '';
    }
});

empty.style.display = 'none';

/* localstorage */
let infoLocalStorage = 'actividad';
let info = [];
function guardar(){
} 

/* /localstorage */

function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    localStorage.actividad = document.getElementById('actividad').value;
    localStorage.setItem(infoLocalStorage, JSON.stringify(info));
    info.push(document.getElementById("actividad").value);
    
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
            empty.style.display = "block";
        }
    });
    return deleteBtn;
}
