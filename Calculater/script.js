let storage = ""

let cal = (value)=>{
    let display = document.querySelector("#screen")

    storage = storage + value
    display.innerHTML = storage
}

let equal = ()=>{
    storage = eval(storage).toString()
    document.querySelector("#screen").innerHTML = storage
}