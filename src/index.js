document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.target.new_task_description.value)
    form.reset()
  })
  
});


function buildList(todo){
  let p = document.createElement('p')
  p.textContent = `${todo} `
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = "x"
  p.appendChild(btn)
  console.log(p)
  document.querySelector('#list').appendChild(p)

}


function handleDelete(e){
  e.target.parentNode.remove()
}