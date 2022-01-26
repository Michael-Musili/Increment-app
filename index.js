let countEl =document.getElementById("count-el")
console.log(countEl)

// count = count + 1
// console.log(count)


// intialize the count as 0
let count = 0

// listen for clicks on the increment button
function increment(){
    count = count +1
    countEl.innerText=count 


}