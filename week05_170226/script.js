// ARRAY: Course list
const courses = ["BCA", "BSc IT", "BCom", "BA", "BTech", "MBA"];
const courseSelect = document.getElementById("course");

// Add courses to dropdown
courses.forEach(function(course) {
    let option = document.createElement("option");
    option.text = course;
    option.value = course;
    courseSelect.add(option);
});

// FORM SUBMIT
document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    try {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let dob = document.getElementById("dob").value;
        let password = document.getElementById("password").value;

        // STRING validation
        if (name.length < 3) {
            throw "Name must be at least 3 characters long.";
        }

        if (!email.includes("@") || !email.includes(".")) {
            throw "Enter a valid email address.";
        }

        // DATE validation
        let birthDate = new Date(dob);
        let today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();

        if (age < 17) {
            throw "You must be at least 17 years old.";
        }

        // PASSWORD validation
        if (password.length < 6) {
            throw "Password must be at least 6 characters.";
        }

        // If everything is valid → go to success page
        window.location.href = "success.html";

    } catch (error) {
        document.getElementById("message").innerHTML =
            "<div style='color:red; margin-top:10px;'>" + error + "</div>";
    }
});
