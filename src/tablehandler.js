/*
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://script.google.com/macros/s/AKfycbyy6NqNbLUoc2OwZ_gbRAgM8BtRHqgBQ_lTpzJ4zWc3rWe8B7R2ZLzzzY6hDK4lKu6eHQ/exec', true);

xhr.onload = ()=>{
    var array = xhr.response
    buildTable(array)
    console.log(array);
}

xhr.send();
*/

$.ajax({
    method: 'GET',
    url: 'https://script.google.com/macros/s/AKfycbyy6NqNbLUoc2OwZ_gbRAgM8BtRHqgBQ_lTpzJ4zWc3rWe8B7R2ZLzzzY6hDK4lKu6eHQ/exec',
    success: function (response) {
        var array = response.user
        buildTable(array)
        console.log(array)
    }
})


function buildTable(data) {
    var table = document.getElementById('table')

    for (var i = 0; i < data.length; i++) {
        var row =
         `<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">${data[i].Name}</td>
              <td class="px-6 py-4">${data[i].Time}</td>
              <td class="px-6 py-4">${data[i].Catagory}</td>
              <td class="px-6 py-4">${data[i].Action}</td>
          </tr>`

        table.innerHTML += row
    }
}
