document.addEventListener("DOMContentLoaded", function() {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];
    const employeeCountOutput = document.getElementById('employeeCount');
    let employeeCount = 0;

    // Function to update the employee count display
    function updateEmployeeCount() {
        employeeCountOutput.textContent = employeeCount;
    }

    // Add employee event handler
    employeeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get the values from the form
        const empId = document.getElementById('empId').value;
        const empName = document.getElementById('empName').value;
        const empDept = document.getElementById('empDept').value;

        // Insert a new row in the employee table
        let row = employeeTable.insertRow();

        // Insert new cells in the row for each piece of data
        let cellID = row.insertCell();
        let cellName = row.insertCell();
        let cellDept = row.insertCell();
        let cellAction = row.insertCell();

        // Create text nodes for each cell and append them
        cellID.appendChild(document.createTextNode(empId));
        cellName.appendChild(document.createTextNode(empName));
        cellDept.appendChild(document.createTextNode(empDept));

        // Create and append the delete button
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'btn btn-danger btn-sm';
        deleteButton.addEventListener('click', function() {
            if (window.confirm('Are you sure you want to delete this employee?')) {
                employeeTable.deleteRow(row.rowIndex - 1);  // rowIndex is 1-based, so subtract 1
                employeeCount--;
                updateEmployeeCount();
            }
        });
        cellAction.appendChild(deleteButton);

        // Reset the form and focus on the employee ID field
        employeeForm.reset();
        document.getElementById('empId').focus();

        // Increment the employee count and update display
        employeeCount++;
        updateEmployeeCount();
    });
});
