/*array = [1, 3, 5, "ro", 78, 84]
console.log(array);
console.log(array.length);
console.log(array[array.length - 1]);
array[0] = "Privet"
console.log(array);
array[array.length] = "root"
console.log(array);*/

const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

/*
const person = {
  firstName: 'Evgeny',
  lastName: 'Belov',
  ageBorn: 1985,
  isMerried: true,
  languages: ['ru', 'en', 'ge'],
  getFullName: function () {
    console.log(person.firstName + '' + person.lastName)
  }
}
console.log(person.ageBorn);
console.log(person['languages']);
const key = 'isMerried'
console.log(person[key]);
person.getFullName()*/
const notes = [
  {
    title: 'Сделать to-do лист',
    compleated: false
  }, 
  {
    title: 'Выложить на GitHub',
    compleated: true
  }
]
function render () {
  listElement.innerHTML = ''
  if (notes.length === 0) {
    listElement.innerHTML = '<p>Нет элементов</p>'
  }
 for (let i = 0; i < notes.length; i++) {
  listElement.insertAdjacentHTML('beforeend', getNoteTemplate (notes[i], i))
  }
}
  render ()

  createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
      return    
    }
    const newNote = {
      title: inputElement.value,
      compleated: false
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
  } 
  
listElement.onclick = function (event) {
if (event.target.dataset.index) {
  const index = Number(event.target.dataset.index)
  const type = event.target.dataset.type
  if (type === "toggle") {
    notes[index].compleated = !notes[index].compleated
  } else if (type === "remove") {
    notes.splice(index, 1)
  }  
  render()
  }
}

  function getNoteTemplate (note, index) {
    console.log(note.compleated); 
    return `
    <li
          class="list-group-item d-flex justify-content-between align-items-center"
          >
          <span class='${note.compleated ? 'text-decoration-line-through' : '' }'>${note.title}</span>
          <span>
            <span class="btn btn-small btn-${note.compleated ? 'warning' : 'success'}" data-index="${index}" data-type="toggle" >&check;</span>
            <span class="btn btn-small btn-danger" data-index="${index}" data-type="remove" >&times;</span>
          </span>
          </li>
    `
  }







