
getData();

async function getData(){
    var items = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    
    var table = document.getElementById("table-body");
    for(var i = 0; i < 140; i++) {
        var td1 = document.createElement("tr");
        let id = items[i].id;
        let name = items[i].title
        td1.innerHTML = '<td>'+i+'</td>' + '<td>'+id+'</td>' + '<td>'+name+'</td>';
        table.appendChild(td1);
    }
    console.log(items);
}