function addTask() {
    var task = document.getElementById("newTask").value;
    if (task.trim() !== "") {
        var table = document.getElementById("taskTable").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2); // Added Remove column

        cell1.innerHTML = table.rows.length;
        cell2.innerHTML = task;
        cell3.innerHTML = '<button onclick="removeTask(this)">Remove</button>';
        document.getElementById("newTask").value = "";
    }
}

function removeTask(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
