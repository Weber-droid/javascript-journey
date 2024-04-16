const heading_one = document.querySelector('#heading-one')

function clickme() {
    const name = prompt("What is your name?")
    alert(`Welcome ${name}, nice meeting you.`)
    heading_one.textContent = `Welcome ${name}.`


}
