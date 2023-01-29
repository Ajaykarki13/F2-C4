
import records from './array.js';

let btn0 = document.querySelector(".searchbtn")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")
let btn4 = document.querySelector(".btn4")
let btn5 = document.querySelector(".btn5")
let btn6 = document.querySelector(".btn6")

let tbody = document.querySelector(".tbody")
let text = document.querySelector(".entertext")

btn0.addEventListener("click", searchbtn)
btn1.addEventListener("click", sortbyAZ)
btn2.addEventListener("click", sortbyZA)
btn3.addEventListener("click", sortbyMarks)
btn4.addEventListener("click", sortbyPassing)
btn5.addEventListener("click", sortbyClass)
btn6.addEventListener("dblclick", sortByMale)
btn6.addEventListener("click", sortByFemale)

/*
//fetching the json file and catching it using then and response is returning file again catching it using (then) again
fetch("./data.json")
.then(response => {
return response.json();
})
// response is returning file again catching it using (then) again
.then(function loadData(data) {
*/
function loadData(data) {
    data.map(e => {
        let row = document.createElement("tr");
        row.innerHTML = `
         <td>  ${e.id} </td>
          <td><img src="${e.img_src}" alt=""/>${e.first_name + " " + e.last_name}</td>
          <td> ${e.gender} </td>
          <td> ${e.class} </td>
          <td> ${e.marks} </td>
          <td> ${e.passing ? "Passing" : "Failed"} </td>
          <td> ${e.email} </td>
          <td> ${e.city} </td>
          `
        tbody.append(row);
    }
    )
}
loadData(records);


function sortbyAZ() {
    //  -1 means a should come before b (same order as a, b)
    // 1 means b should come before a (reverse order of a, b)
    // 0 means no change in order
    tbody.innerHTML = "";
    let sort = records.sort((a, b) => {
        if (a.first_name + a.last_name < b.first_name + b.last_name) return -1;
        else if (a.first_name + a.last_name > b.first_name + b.last_name) return 1;
        else return 0;
    })
    loadData(sort);
}


function sortbyZA() {
    tbody.innerHTML = "";
    let sort = records.sort((a, b) => {
        if (a.first_name + a.last_name > b.first_name + b.last_name) return -1;
        else if (a.first_name + a.last_name < b.first_name + b.last_name) return 1;
        else return 0;
    })
    loadData(sort);

}


function sortbyClass() {
    tbody.innerHTML = "";
    let sort = records.sort((a, b) => {
        if (a.class < b.class) return -1
        else if (a.class > b.class) return 1
        else return 0;

    })
    loadData(sort);
}




function sortByMale() {
    let sexes = document.querySelector(".sex")
    sexes.innerHTML = "Gender-Male Students";

    tbody.innerHTML = "";
    let sort = records.filter(sex => {
        if (sex.gender == 'Male') return sex.gender;
    })
    loadData(sort);
}

function sortByFemale() {
    let sexes = document.querySelector(".sex")
    sexes.innerHTML = "Gender-Female Students";
    tbody.innerHTML = "";
    let sort = records.filter(sex => {
        if (sex.gender == "Female") return sex.gender;
    })
    loadData(sort);
}




function sortbyMarks() {
    tbody.innerHTML = "";
    let sort = records.sort((a, b) => {
        if (a.marks < b.marks) return -1
        else if (a.marks > b.marks) return 1
        else return 0;
    })
    loadData(sort);
}


function sortbyPassing() {
    tbody.innerHTML = "";
    //filter function returns only true
    let sort = records.filter(bolean => {
        // if(item.passing==true)
        return bolean.passing;
    })
    loadData(sort);
}

function searchbtn(e) {
    e.preventDefault();
    tbody.innerHTML = "";
    let value = text.value;
    let sort = records.filter(item => {
        return (item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase()));
    })
    loadData(sort);
}




//  Make a search bar which searches and updates the table data. It should filter out on the bases of first name,
//last name, and email. And shouldn't be case-sensitive. (20 marks)
// The search functionality can work on handleChange or use the search button click event to show the updated table dat
/*
function searchbtn(e)
{
    e.preventDefault();
    tbody.innerHTML='';
let sort=records.filter((item)=>{
if(item.first_name==text.value||item.last_name==text.value||item.email==text.value)
return item.first_name,item.last_name,item.email;

})
//loadData(sort);
display(sort)

}
function display(daa)
{
daa.map(ee=>{
    tbody.innerHTML=
    `<tr>
    <td>  ${ee.id} </td>
    <td><img src="${ee.img_src}" alt=""/>${ee.first_name + " " + ee.last_name}</td>
    <td> ${ee.gender} </td>
    <td> ${ee.class} </td>
    <td> ${ee.marks} </td>
    <td> ${ee.passing ? "Passing" : "Failed"} </td>
    <td> ${ee.email} </td>
    <td> ${ee.city} </td>
    </tr>`
})

}
*/
