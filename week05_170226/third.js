console.log("===== Form Validation Example =====");

function validateUser(name, email, age, password) {
    try {
        // Name validation
        if (!name || name.length < 3) {
            throw new Error("Name must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            throw new Error("Invalid email format.");
        }

        // Age validation
        if (age < 18 || age > 60) {
            throw new RangeError("Age must be between 18 and 60.");
        }

        // Password validation
        if (password.length < 6) {
            throw new Error("Password must be at least 6 characters long.");
        }

        console.log("Validation Successful! User registered.");

    } catch (error) {
        console.log("Validation Error:", error.message);
    }
}

// Test cases
console.log("\nTest Case 1 (Invalid Name)");
validateUser("Al", "al@gmail.com", 25, "123456");

console.log("\nTest Case 2 (Invalid Email)");
validateUser("Snehal", "snehalgmail.com", 25, "123456");

console.log("\nTest Case 3 (Invalid Age)");
validateUser("Snehal", "snehal@gmail.com", 15, "123456");

console.log("\nTest Case 4 (Invalid Password)");
validateUser("Snehal", "snehal@gmail.com", 25, "123");

console.log("\nTest Case 5 (All Valid)");
validateUser("Snehal", "snehal@gmail.com", 25, "123456");
