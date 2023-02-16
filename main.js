let form = document.querySelector("form")
let input=document.querySelector("input")
let to=document.getElementById("to")
let ListGroup=document.querySelector("ul")

function getMultiply (e) {
    e.preventDefault()
    let number = input.value
    let till=to.value

    for(let i=1; i<=to.value ; i++){
        const last = i*number
        let newLi =document.createElement("li")
        newLi.className="list-group-item text-enter bg-body fw-bold"
        newLi.innerText = `${number} * ${i} = ${last}`
        ListGroup.appendChild(newLi)
    }
}


form.addEventListener("submit" , getMultiply )