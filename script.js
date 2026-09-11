// ===============================
// NOTIFICATION BANNER
// ===============================

function closeNotification() {
    let notification = document.getElementById("notification");

    if (notification) {
        notification.style.display = "none";
    }
}


// ===============================
// COLLAPSIBLE FAQ
// ===============================

function toggleFAQ(button) {

    const answer = button.nextElementSibling;

    if (answer.style.display === "block") {

        answer.style.display = "none";
        button.querySelector("span").textContent = "+";

    } else {

        answer.style.display = "block";
        button.querySelector("span").textContent = "−";

    }
}


// ===============================
// MODAL POPUP
// ===============================

function openModal() {

    let modal = document.getElementById("studentModal");

    if (modal) {
        modal.style.display = "block";
    }
}


function closeModal() {

    let modal = document.getElementById("studentModal");

    if (modal) {
        modal.style.display = "none";
    }
}


// ===============================
// IMAGE / CONTENT SLIDER
// ===============================

let slideIndex = 0;

let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let titles = [
    "Student Dashboard",
    "Student Activities",
    "College Events"
];

let texts = [
    "Manage your student information easily.",
    "Participate in different college activities.",
    "Stay updated with upcoming college events."
];


function showSlide() {

    let sliderImage = document.getElementById("sliderImage");
    let sliderTitle = document.getElementById("sliderTitle");
    let sliderText = document.getElementById("sliderText");

    if (sliderImage && sliderTitle && sliderText) {

        sliderImage.src = images[slideIndex];
        sliderTitle.innerText = titles[slideIndex];
        sliderText.innerText = texts[slideIndex];

    }
}


function nextSlide() {

    slideIndex++;

    if (slideIndex >= images.length) {
        slideIndex = 0;
    }

    showSlide();
}


function previousSlide() {

    slideIndex--;

    if (slideIndex < 0) {
        slideIndex = images.length - 1;
    }

    showSlide();
}


// ===============================
// HAMBURGER MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const menu = document.querySelector(".menu nav");


// Only run hamburger code if menu exists

if (menu && menuButton) {

    const menuLinks = menu.querySelectorAll("a");

    function setupMenu() {

        if (window.innerWidth <= 768) {

            menuLinks.forEach(function(link) {
                link.style.display = "none";
            });

        } else {

            menuLinks.forEach(function(link) {
                link.style.display = "block";
            });

        }
    }

    setupMenu();


    menuButton.addEventListener("click", function() {

        menuLinks.forEach(function(link) {

            if (link.style.display === "none") {
                link.style.display = "block";
            } else {
                link.style.display = "none";
            }

        });

    });


    window.addEventListener("resize", setupMenu);

}


// ===============================
// DARK / LIGHT THEME
// ===============================

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

}


// ===============================
// PRACTICAL 5
// REGISTRATION FORM VALIDATION
// ===============================

let form = document.getElementById("registrationForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();


        // ===============================
        // GET VALUES
        // ===============================

        let name = document.getElementById("name").value.trim();

        let email = document.getElementById("email").value.trim();

        let mobile = document.getElementById("mobile").value.trim();

        let password = document.getElementById("password").value;

        let confirmPassword =
            document.getElementById("confirmPassword").value;

        let rollNumber =
            document.getElementById("rollNumber").value.trim();

        let semester =
            document.getElementById("semester").value.trim();

        let course =
            document.getElementById("course").value;

        let year =
            document.getElementById("year").value;

        let terms =
            document.getElementById("terms").checked;


        // ===============================
        // ERROR ELEMENTS
        // ===============================

        let nameError = document.getElementById("nameError");

        let emailError = document.getElementById("emailError");

        let mobileError = document.getElementById("mobileError");

        let passwordError =
            document.getElementById("passwordError");

        let rollError =
            document.getElementById("rollError");

        let courseError =
            document.getElementById("courseError");

        let yearError =
            document.getElementById("yearError");

        let semesterError =
            document.getElementById("semesterError");

        // ===============================
        // CLEAR PREVIOUS ERRORS
        // ===============================

        if (nameError) nameError.innerText = "";

        if (emailError) emailError.innerText = "";

        if (mobileError) mobileError.innerText = "";

        if (passwordError) passwordError.innerText = "";

        if (rollError) rollError.innerText = "";

        if (courseError) courseError.innerText = "";

        if (yearError) yearError.innerText = "";

        if (semesterError) semesterError.innerText = "";

        let valid = true;


        // ===============================
        // REGULAR EXPRESSIONS
        // ===============================

        let namePattern = /^[A-Za-z ]+$/;

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let mobilePattern = /^[0-9]{10}$/;

        let rollPattern = /^[A-Za-z0-9]+$/;

        let passwordPattern =
            /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;


        // ===============================
        // NAME VALIDATION
        // ===============================

        if (name === "") {

            if (nameError) {
                nameError.innerText = "Please enter your name.";
            }

            valid = false;

        }
        else if (!namePattern.test(name)) {

            if (nameError) {
                nameError.innerText =
                    "Name should contain only letters.";
            }

            valid = false;
        }


        // ===============================
        // ROLL NUMBER VALIDATION
        // ===============================

        if (rollNumber === "") {

            if (rollError) {
                rollError.innerText =
                    "Please enter your roll number.";
            } else {
                alert("Please enter your roll number.");
            }

            valid = false;

        }
        else if (!rollPattern.test(rollNumber)) {

            if (rollError) {
                rollError.innerText =
                    "Enter a valid roll number.";
            } else {
                alert("Enter a valid roll number.");
            }

            valid = false;
        }


        // ===============================
        // EMAIL VALIDATION
        // ===============================

        if (email === "") {

            if (emailError) {
                emailError.innerText =
                    "Please enter your email.";
            }

            valid = false;

        }
        else if (!emailPattern.test(email)) {

            if (emailError) {
                emailError.innerText =
                    "Please enter a valid email.";
            }

            valid = false;
        }


        // ===============================
        // MOBILE VALIDATION
        // ===============================

        if (mobile === "") {

            if (mobileError) {
                mobileError.innerText =
                    "Please enter your mobile number.";
            }

            valid = false;

        }
        else if (!mobilePattern.test(mobile)) {

            if (mobileError) {
                mobileError.innerText =
                    "Mobile number must contain 10 digits.";
            }

            valid = false;
        }


        // ===============================
        // PASSWORD VALIDATION
        // ===============================

        if (password === "") {

            if (passwordError) {
                passwordError.innerText =
                    "Please enter a password.";
            }

            valid = false;

        }
        else if (!passwordPattern.test(password)) {

            if (passwordError) {
                passwordError.innerText =
                    "Password must be at least 6 characters with letters and numbers.";
            }

            valid = false;
        }


        // ===============================
        // CONFIRM PASSWORD
        // ===============================

        if (confirmPassword === "") {

            if (passwordError) {
                passwordError.innerText =
                    "Please confirm your password.";
            }

            valid = false;

        }
        else if (password !== confirmPassword) {

            if (passwordError) {
                passwordError.innerText =
                    "Passwords do not match.";
            }

            valid = false;
        }


        // ===============================
        // COURSE VALIDATION
        // ===============================

        if (course === "") {

            if (courseError) {

                courseError.innerText =
                    "Please select your course.";

            } else {

                alert("Please select your course.");

            }

            valid = false;
        }


        // ===============================
        // YEAR VALIDATION
        // ===============================

        if (year === "") {

            if (yearError) {

                yearError.innerText =
                    "Please select your year.";

            } else {

                alert("Please select your year.");

            }

            valid = false;
        }
// ===============================
// SEMESTER VALIDATION
// ===============================

if (semester === "") {

    if (semesterError) {
        semesterError.innerText =
            "Please enter your semester.";
    }

    valid = false;
}
// ===============================
// GENDER AND TERMS VALIDATION
// ===============================

let gender = document.querySelector(
    'input[name="gender"]:checked'
);

let genderTermsError = "";

if (!gender) {
    genderTermsError += "Please select your gender.\n";
}

if (!terms) {
    genderTermsError += "Please accept the Terms and Conditions.";
}

if (genderTermsError !== "") {
    alert(genderTermsError);
    valid = false;
}

        // ===============================
        // FINAL RESULT
        // ===============================

        if (valid) {

            alert("🎉 Registration Successful!");

            form.reset();

        }

    });

}


console.log("Registration JS is loaded");