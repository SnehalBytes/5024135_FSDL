const API = "/api/students";

// Load students
async function loadStudents() {
  const res = await fetch(API);
  const data = await res.json();

  const list = document.getElementById("studentList");
  list.innerHTML = "";

  data.forEach(s => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${s.name} (${s.course})
      <button class="delete" onclick="deleteStudent('${s._id}')">❌</button>
    `;

    list.appendChild(li);
  });
}

// Add student
async function addStudent() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  if (!name || !email || !course) {
    alert("Fill all fields");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, course })
  });

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("course").value = "";

  loadStudents();
}

// 🔥 DELETE FUNCTION
async function deleteStudent(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadStudents();
}

// Section switching
function showSection(section) {
  document.getElementById("studentSection").style.display = "none";
  document.getElementById("marksSection").style.display = "none";
  document.getElementById("attendanceSection").style.display = "none";

  if (section === "students") {
    document.getElementById("studentSection").style.display = "block";
    loadStudents();
  }
  if (section === "marks") {
    document.getElementById("marksSection").style.display = "block";
  }
  if (section === "attendance") {
    document.getElementById("attendanceSection").style.display = "block";
  }
}

// Initial load
loadStudents();