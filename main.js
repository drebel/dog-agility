document.querySelector('#download').addEventListener('click', event => {
    event.preventDefault()

})


function printData(form){
    let data = []
    for(let i = 0; i < 19; i++){
        //console.log(i, form[i].type, form[i].checked)

        if(form[i].type !== "radio"){
            data.push(form[i].value)
        }else if(form[i].type === "radio" && form[i].checked === true){
            data.push(form[i].value)
        }
    }
console.log(form)
console.log(data)

}