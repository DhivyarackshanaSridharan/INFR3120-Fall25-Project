
// Toggle the visibility of the form when the "Create Skill Session" button is clicked

document.getElementById("createSessionBtn").addEventListener("click", function () {
  const form = document.getElementById("sessionForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
});


// Handle form submission logic

document.getElementById("sessionForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default browser form submission (page reload)

  // Collect values from form fields
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const duration = document.getElementById("duration").value.trim();
  const offeredBy = document.getElementById("offeredBy").value.trim();
  const availability = document.getElementById("availability").value.trim();

  
  // Validate that all fields are filled in
 
  if (!title || !description || !duration || !offeredBy || !availability) {
    alert("Please fill in all fields before submitting.");
    return; // Stop submission if validation fails
  }

 
  // Ask user for confirmation before final submission
  
  const confirmSubmit = confirm("Are you sure you want to submit this session?");
  if (!confirmSubmit) {
    alert("Submission cancelled.");
    return;
  }

 
  // Add new row to the dashboard table
 
  const tableBody = document.querySelector("#sessionsTable tbody");
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${title}</td>
    <td>${description}</td>
    <td>${duration}</td>
    <td>${offeredBy}</td>
    <td>${availability}</td>
    <td>
      <button class="editBtn">Edit</button>
      <button class="deleteBtn">Delete</button>
    </td>
  `;

  tableBody.appendChild(newRow);

  // Reset form fields and hide the form after submission
 
  this.reset();
  this.style.display = "none";

  alert("Session added to dashboard!");
});


// Handle Delete button clicks

document.querySelector("#sessionsTable").addEventListener("click", function (e) {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.closest("tr").remove();
    alert("Session deleted.");
  }
});


// Handle Edit button clicks (placeholder for now)

document.querySelector("#sessionsTable").addEventListener("click", function (e) {
  if (e.target.classList.contains("editBtn")) {
    alert("Edit functionality will be connected to backend later.");
  }
});
