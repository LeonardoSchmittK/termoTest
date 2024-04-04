const word = "furia"

function printTables(){
    const template = `
    <table border="1">

    <tr id="1" class="c-1">

        <td>F</td>

        <td>U</td>

        <td>R</td>

        <td>I</td>

        <td>A</td>

</tr>

<tr id="2"  class="c-2">

        <td></td>

        <td></td>

        <td></td>

    <td></td>

        <td></td>

</tr>

<tr id="3"  class="c-3">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

<tr id="4"  class="c-4">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

    <tr id="5"  class="c-5 highlight">

        <td></td>

        <td></td>

        <td></td>

        <td></td>

        <td></td>

</tr>

</table>
    `

    const mainContainer = document.querySelector("main")

    mainContainer.innerHTML = template

}


printTables()
let counter = 0;

function checkLetter(){
const input = document.querySelector("input").value;
counter++
if(input === word && input.length==word.length){
    alert(word,"!")
    return 
}

let template = ``;


for(let i =0;i<5;++i){

    template += `
        <td>

            ${input[i]}

        
        </td>
    `
}


const placeToAdd = document.getElementById(`${counter}`)

placeToAdd.innerHTML = template

checkLettersIncidence(counter,placeToAdd)
    


}

function checkLettersIncidence(row,rowEl){
const letters = [...word]
const roww = [...document.querySelectorAll(`tr.c-${row} td`)]
const lettersOfRowEl = roww.map((td)=> td.innerHTML)

for(let i =0;i<letters.length;++i){
    console.log(letters[i]);
    console.log(lettersOfRowEl[i]);
    console.log(letters.indexOf(lettersOfRowEl[i].trim()));

    if(letters.indexOf(lettersOfRowEl[i].trim()) !=-1){
        roww[i].style.backgroundColor="yellow"

    }

    if(lettersOfRowEl[i].trim() == letters[i].trim()){
       
        roww[i].style.backgroundColor="green"

    }
    
    if( lettersOfRowEl[i].trim() !== letters[i].trim() &&letters.indexOf(lettersOfRowEl[i].trim()) ==-1 ){
        roww[i].style.backgroundColor="red"

    }
  


}



}