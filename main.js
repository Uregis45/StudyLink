// Get subject from URL
const params = new URLSearchParams(window.location.search);
const selectedSubject = params.get("subject");

// Elements
const title = document.getElementById("subjectTitle");
const container = document.getElementById("resourcesContainer");

// Change title
if (selectedSubject) {
  title.textContent = selectedSubject + " Resources";
}

// Filter and display resources
const filteredResources = resources.filter(
  res => res.subject === selectedSubject
);

if (filteredResources.length === 0) {
  container.innerHTML = "<p style='text-align:center;'>No resources available.</p>";
}

filteredResources.forEach(res => {
  const card = document.createElement("div");
  card.className = "resource-card";

  card.innerHTML = `
    <h3>${res.title}</h3>
    <p><strong>Type:</strong> ${res.type}</p>
    <p><strong>Level:</strong> ${res.level}</p>
    <a href="${res.link}" target="_blank" class="btn">Open Resource</a>
  `;

  container.appendChild(card);
});
// Submit resource form (frontend only)
const form = document.getElementById("resourceForm");
const successMsg = document.getElementById("successMessage");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    successMsg.textContent = "Thank you! Your resource was submitted for review.";
    form.reset();
  });
}