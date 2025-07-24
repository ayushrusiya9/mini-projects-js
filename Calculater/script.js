let storage = ""

let cal = (value)=>{
    let display = document.querySelector("#screen")



    let ope=['*','+','%',".","-","/"]
    
    let la= storage[storage.length-1]

    if(ope.includes(la) && ope.includes(value)){

        return
    }

    storage = storage + value

    display.innerHTML = storage

}

let equal = ()=>{
    storage = eval(storage).toString()
    document.querySelector("#screen").innerHTML = storage
}

let del = ()=>{
    storage = storage.slice(0,-1)
    document.querySelector("#screen").innerHTML = storage
}

let allclear = ()=>{
    storage = ""
    document.querySelector("#screen").innerHTML = storage
}