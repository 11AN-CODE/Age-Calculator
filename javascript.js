let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0]; // Restrict future dates
let result = document.getElementById("result");

function calculateAge() {
    let birthDate = new Date(userInput.value);

    if (!userInput.value) {
        result.innerHTML = "Please select a date.";
        return;
    }

    let today = new Date();
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth() + 1;
    let birthYear = birthDate.getFullYear();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    let ageYears = currentYear - birthYear;
    let ageMonths = currentMonth - birthMonth;
    let ageDays = currentDay - birthDay;

    // Adjust months and years if needed
    if (ageDays < 0) {
        ageMonths--; // Borrow days from previous month
        let prevMonth = currentMonth - 1;
        if (prevMonth === 0) {
            prevMonth = 12;
            currentYear--;
        }
        ageDays += getDaysInMonth(currentYear, prevMonth);
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    result.innerHTML = `You are <b>${ageYears}</b> years, <b>${ageMonths}</b> months, and <b>${ageDays}</b> days old.`;
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Attach event listener to the button
document.querySelector("button").addEventListener("click", calculateAge);

