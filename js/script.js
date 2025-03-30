window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#empForm");
    // ADD EMPLOYEE
    form.addEventListener("submit", (event) => {
        event.preventDefault();  // PREVENT FORM SUBMISSION

       // GET THE VALUES FROM THE TEXT BOXES
        const id = document.querySelector("#id").value;
        const name = document.querySelector("#name").value;
        const ext = document.querySelector("#ext").value;
        const email = document.querySelector("#email").value;
        const department = document.querySelector("#department").value;

        // Log values
        console.log("ID: " + id);
        console.log("Name: " + name);
        console.log("Extension: " + ext);
        console.log("Email: " + email);
        console.log("Department: " + department);

        // Optional: Clear form after submission
        form.reset();
    });
});
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER




    // GET THE VALUES FROM THE TEXT BOXES

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE



// DELETE EMPLOYEE
