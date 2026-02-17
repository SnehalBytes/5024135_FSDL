console.log("===== JavaScript Error Handling with Logical Examples =====");

// 1. Basic try...catch (user login simulation)
function login(username) {
    try {
        if (!username) {
            throw new Error("Username is required.");
        }
        console.log("Welcome,", username);
    } catch (error) {
        console.log("Login Error:", error.message);
    }
}

console.log("\n1. Login Example");
login("");        // error
login("Snehal");  // success


// 2. try...catch...finally (bank withdrawal)
function withdraw(balance, amount) {
    try {
        console.log("\n2. Bank Withdrawal");
        if (amount > balance) {
            throw new Error("Insufficient balance.");
        }
        balance -= amount;
        console.log("Withdrawal successful. Remaining balance:", balance);
    } catch (error) {
        console.log("Transaction Error:", error.message);
    } finally {
        console.log("Transaction attempt finished.");
    }
}

withdraw(1000, 500);   // success
withdraw(1000, 1500);  // error


// 3. Custom error (age verification)
function checkAge(age) {
    if (age < 18) {
        throw new Error("You must be 18+ to access this content.");
    }
    return "Access granted.";
}

console.log("\n3. Age Verification");
try {
    console.log(checkAge(16));
} catch (error) {
    console.log("Age Error:", error.message);
}


// 4. Handling specific error types (string operation)
console.log("\n4. Specific Error Type");
try {
    let text = null;
    console.log(text.toUpperCase()); // TypeError
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type Error:", error.message);
    } else {
        console.log("Other Error:", error.message);
    }
}


// 5. Async error handling (fake API call)
async function getUserData() {
    try {
        console.log("\n5. Async API Call");
        // Invalid URL to force error
        let response = await fetch("https://invalid-api.com/user");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("API Error:", error.message);
    }
}

getUserData();


// 6. Manual thrown error (score validation)
console.log("\n6. Score Validation");
try {
    let score = 120;

    if (score < 0 || score > 100) {
        throw new RangeError("Score must be between 0 and 100.");
    }

    console.log("Score is valid:", score);
} catch (error) {
    console.log("Score Error:", error.message);
}

console.log("\n===== End of Program =====");
