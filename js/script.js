window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#empForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Stops form from submitting

        // Get form values
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
