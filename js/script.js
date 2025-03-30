window.addEventListener("DOMContentLoaded", () => {
    // GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
    const form = document.querySelector("#addForm");
    const empTable = document.querySelector("#employees tbody");
    const empCount = document.querySelector("#empCount");
    
    // SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
    let employeeCount = 0;
    
    // ADD EMPLOYEE
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // PREVENT FORM SUBMISSION

        // GET THE VALUES FROM THE TEXT BOXES
        const id = document.querySelector("#id").value;
        const name = document.querySelector("#name").value;
        const ext = document.querySelector("#extension").value; 
        const email = document.querySelector("#email").value;
        const department = document.querySelector("#department").value;

        // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
        let newRow = empTable.insertRow();

        // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
        let cellId = newRow.insertCell(0);
        let cellName = newRow.insertCell(1);
        let cellExt = newRow.insertCell(2);
        let cellEmail = newRow.insertCell(3);
        let cellDept = newRow.insertCell(4);
        let cellDelete = newRow.insertCell(5);

        // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        cellId.appendChild(document.createTextNode(id));
        cellName.appendChild(document.createTextNode(name));
        cellExt.appendChild(document.createTextNode(ext));
        cellEmail.appendChild(document.createTextNode(email));
        cellDept.appendChild(document.createTextNode(department));

        // CREATE THE DELETE BUTTON
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.addEventListener("click", (e) => {
            if (confirm("Are you sure you want to delete this employee?")) {
                let row = e.target.parentElement.parentElement;
                empTable.deleteRow(row.rowIndex - 1);
                employeeCount--;
                empCount.textContent = employeeCount;
            }
        });
        cellDelete.appendChild(deleteBtn);

        // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
        employeeCount++;
        empCount.textContent = employeeCount;

        // RESET THE FORM
        form.reset();

        // SET FOCUS BACK TO THE ID TEXT BOX
        document.querySelector("#id").focus();
    });
});
