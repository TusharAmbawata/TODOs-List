console.log("In javascript folder!");
function update(){
    console.log("upadting...");
    tit = document.getElementById("title").value;
    disc = document.getElementById("disc").value;
    if(localStorage.getItem("itemsJson") ==null){
        itemJsonArray = [];
        itemJsonArray.push([tit,disc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit,disc]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    main();
}
function main(){
    if(localStorage.getItem("itemsJson")==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }
    let tableBody = document.getElementById("table-body");
    let str = "";
    itemJsonArray.forEach((element,index) => {
        str += `
        <tr>
            <td scope="row" class="col-1">${index+1}</td>
            <td class="col-1">${element[0]}</td>
            <td class="col-1">${element[1]}</td>
            <td class="col-1"><button class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
            </tr>   
            `
        });
        tableBody.innerHTML = str;
}
function deleted(itemIndex){
    console.log("Delete",itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson');
    itemJsonArray  = JSON.parse(itemJsonArrayStr);
    // Delete itemindex from the array
    itemJsonArray.splice(itemIndex,1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    main();
}
function clearstorage(){
    if(confirm("Do You Want to clear all the data!")){
        console.log('Clearing the list');
        localStorage.clear();
        main();
    }
}
add = document.getElementById("add");
add.addEventListener("click",update);
main();