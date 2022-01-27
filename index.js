let countEl =document.getElementById("count-el")
console.log(countEl)

// count = count + 1
// console.log(count)


// intialize the count as 0
let count = 0

// listen for clicks on the increment button
function increment(){
    count += 1
    countEl.innerText=count 


}

// 1. Create a function, save(), which logs out the count when it's called
let saveD = document.getElementById("save-btn")
function save(){
    countEl.innerText=count
}


function saveB() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let saveEl = document.getElementById("save-el")
    countstr = count + " - " 

    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent+= countstr
    countEl.innerText=0
    count =0
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
}
