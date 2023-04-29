let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let des = document.getElementById('des');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let categorey = document.getElementById('categorey');
let submit = document.getElementById('submit');
let mod = 'create';
let tmp ;

//get total
function getTotal() {

    if (price.value != '') {
        let result = (+price.value + +taxes.value + +des.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }
    else {
        total.innerHTML =  ' ';
        total.style.background = '#a00d02';
    }
}
;
let datapro ;
if (localStorage.product != null) {
    datapro = JSON.parse (localStorage.product)
}else {
    datapro = [];
}
submit.onclick = function () {
    let newpro = {
title: title.value,
price:price.value,
taxes:taxes.value,
discount:discount.value,
total:total.value,
count:count.value,
categorey:categorey.value,
    }
    if (mod === 'create') {
        if (newpro.count > 1 ) {
            for (let i = 0 ; i < newpro.count ;i++) {
                datapro.push(newpro);
            
              }
             } else {
            datapro.push (newpro);
        }
    } else {

datapro [tmp] = newpro;
mod = 'create' ;
submit.innerHTML = 'create'
count.style.display = 'block';
        }
    
//  datapro.push (newpro);

  //save localstroge
    localStorage.setItem ('product',  JSON.stringify(datapro)  )
 
    cleardata ()
    showdata()

    }

// clear data
function cleardata() {
    title.value = '';
    price.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    categorey.value = '';
}
// read 
function showdata() {
    getTotal ()
    let table = '';
    for (let i = 0; i < datapro.length; i++) {
        table += `
        <tr>
        <td> ${i}  </td>
        <td> ${datapro[i].title}  </td>
        <td>${datapro[i].price}   </td>
        <td> ${datapro[i].taxes}  </td>
         <td> ${datapro[i].ads} </td>
         <td> ${datapro[i].discount} </td>
         <td> ${datapro[i].total} </td>
         <td> ${datapro[i].categorey} </td>
         <td> <button id ="update" onclick="update(${i})" >update </button> </td>
         <td> <button id ="delete"  onclick="deletedata(${i})" >delete </button> </td>
         </tr>
        `
       
    }
    document.getElementById('tbody').innerHTML= table ;
    let deleteall = document.getElementById ('deleteall')

    if ( datapro.length>0 ) {
        deleteall.innerHTML = `
        <button id ="delete"" onclick = "deleteAll()">delete All (${datapro.length})</button>
        `
    }else {
        deleteall.innerHTML = '';
    }
}
showdata()


//delete 
function deletedata(i) {
    datapro.splice (i,1);
    localStorage.product = JSON.stringify(datapro);
    showdata ();

    
}
// delete all
function  deleteAll() {
    localStorage.clear ()
    datapro.splice(0)
    showdata()
}
// update
function update(i) {
    title.value = datapro [i].title;
    price.value =datapro [i].price;
    taxes.value = datapro [i]. taxes;
    des.value =  datapro [i]. des;
    discount.value=datapro[i].discount;
    getTotal()
    count.style.display = 'none'
    categorey.value= datapro [i]. categorey;
    submit.innerHTML = 'update'
    mod = 'update';
    tmp= i;
    scroll ({
        top:0,
        behavior: 'smooth'
    })
}
//search 
let searchmood = 'title';
function getsearchmod(id){
let search = document.getElementById('search')
    if ( id === 'searchtotle'){
        searchmood= 'title';
        search.placeholder ='search by title';

    }else {
        searchmood = 'categorey';
        search.placeholder ='search by categorey';
    }
    search.focus ()
}
function searchdata(value) {
    let table = '';
    if (searchmood =='title') {
for (let i = 0 ; i< datapro.length; i++){
if (datapro[i].title.includes(value)){
   
        table += `
        <tr>
        <td> ${i}  </td>
        <td> ${datapro[i].title}  </td>
        <td>${datapro[i].price}   </td>
        <td> ${datapro[i].taxes}  </td>
         <td> ${datapro[i].ads} </td>
         <td> ${datapro[i].discount} </td>
         <td> ${datapro[i].total} </td>
         <td> ${datapro[i].categorey} </td>
         <td> <button id ="update" onclick="update(${i})" >update </button> </td>
         <td> <button id ="delete"  onclick="deletedata(${i})" >delete </button> </td>
         </tr>
        `
       
    
}
    }
}else {

    }
    document.getElementById('tbody').innerHTML= table ;
}