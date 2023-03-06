const app = {
    header: [],
    data: [],
    init(){
        app.addListeners()
    },
    addListeners(){
        const form = document.querySelector('#race-data')
        form.addEventListener('submit', app.saveData)

        document.querySelector('#btnExport').addEventListener('click', app.exportData)
    },
    saveData(ev){
        ev.preventDefault()
        const form = ev.target
        const formData = new FormData(form)
        //save the data in app.data
        app.cacheData(formData)
        //build a row in the table
        //app.buildRow(formData)
        //clear the form
        form.reset()
        //focus on first item in form
        document.getElementById('organization')
    },
    cacheData(formData){
        //take the data from FormData object and push it into app.data array
        if(!app.header[0]){
            app.header.push(Array.from(formData.keys()))
            console.table(app.header)
        }
        app.data.push(Array.from(formData.values()))
        console.table(app.data)
    },
    exportData(){
        //optional insert header row
        //convert array to a string with a \n at the end
        let str = ''

        app.header.forEach(row => {
            str += row
            .map(col => JSON.stringify(col))
            .join(',')
            .concat('\n')
        })
        console.log(str)
        app.data.forEach(row => {
            str += row
            .map(col => JSON.stringify(col))
            .join(',')
            .concat('\n')
        })
        console.log(str)

        //create the file
        let filename = `racescores.${Date.now()}.csv`
        let file = new File([str], filename, { type: 'text/csv'})

        //create anchor tag with 'download' attribute
        let a = document.createElement('a')
        a.href = URL.createObjectURL(file)
        a.download = filename
        a.click()
    }
}

document.addEventListener('DOMContentLoaded', app.init)











// document.querySelector('#download').addEventListener('submit', event => {
//     event.preventDefault()

// })


// function printData(form){
//     let data = []
//     for(let i = 0; i < 19; i++){
//         //console.log(i, form[i].type, form[i].checked)

//         if(form[i].type !== "radio"){
//             data.push(form[i].value)
//         }else if(form[i].type === "radio" && form[i].checked === true){
//             data.push(form[i].value)
//         }
//     }
// console.log(form)
// console.log(data)

// }