var butt = document.getElementById('bub');

butt.addEventListener('click', function() {

var table = document.getElementById('awards');

var row = document.createElement('tr');

var cell1 = document.createElement('td');
var textarea1 = document.createElement('textarea');
cell1.appendChild(textarea1);
row.appendChild(cell1);

table.appendChild(row);
});
