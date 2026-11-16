// ========================================
// 1. SELECT ONE ELEMENT
// ========================================

const title = document.getElementById("title");

console.log(title);


// ========================================
// 2. querySelector()
// ========================================

const message = document.querySelector("#message");

console.log(message);


// ========================================
// 3. querySelectorAll()
// ========================================

const students = document.querySelectorAll(".student");

console.log(students);

console.log(students[0]);

console.log(students[1]);


// ========================================
// 4. getElementsByClassName()
// ========================================

const studentCollection =
    document.getElementsByClassName("student");

console.log(studentCollection);


// ========================================
// 5. getElementsByTagName()
// ========================================

const listItems =
    document.getElementsByTagName("li");

console.log(listItems);


// ========================================
// 6. CHANGE TEXT
// ========================================

message.textContent = "We are learning DOM Manipulation!";


// ========================================
// 7. CHANGE HTML
// ========================================

console.log(
    document.getElementById("container").innerHTML
);


// ========================================
// 8. ADD CLASS
// ========================================

students[0].classList.add("active");


// ========================================
// 9. REMOVE CLASS
// ========================================

students[0].classList.remove("active");


// ========================================
// 10. TOGGLE CLASS
// ========================================

students[1].classList.toggle("active");


// ========================================
// 11. CHANGE CSS
// ========================================

title.style.color = "blue";

title.style.backgroundColor = "lightgray";

title.style.padding = "15px";


// ========================================
// 12. READ ATTRIBUTE
// ========================================

const input = document.getElementById("studentInput");

console.log(input.getAttribute("placeholder"));


// ========================================
// 13. CHECK ATTRIBUTE
// ========================================

console.log(
    input.hasAttribute("placeholder")
);


// ========================================
// 14. SET ATTRIBUTE
// ========================================

input.setAttribute(
    "title",
    "Enter the student's name"
);


// ========================================
// 15. REMOVE ATTRIBUTE
// ========================================

// input.removeAttribute("title");


// ========================================
// 16. ADD STUDENT
// ========================================

const addButton = document.getElementById("addBtn");

const studentList =
    document.getElementById("studentList");


addButton.addEventListener("click", function () {

    const studentName = input.value;

    if (studentName === "") {
        alert("Please enter a student name!");
        return;
    }

    // Create new LI
    const newStudent =
        document.createElement("li");

    // Add text
    newStudent.textContent = studentName;

    // Add class
    newStudent.classList.add("student");

    // Add to list
    studentList.appendChild(newStudent);

    // Clear input
    input.value = "";

});


// ========================================
// 17. CHANGE TITLE
// ========================================

const changeButton =
    document.getElementById("changeBtn");

changeButton.addEventListener("click", function () {

    title.textContent = "My Student List";

});


// ========================================
// 18. CHANGE COLOR
// ========================================

const colorButton =
    document.getElementById("colorBtn");

colorButton.addEventListener("click", function () {

    title.style.color = "red";

});


// ========================================
// 19. HIDE MESSAGE
// ========================================

const hideButton =
    document.getElementById("hideBtn");

hideButton.addEventListener("click", function () {

    message.style.display = "none";

});


// ========================================
// 20. SHOW MESSAGE
// ========================================

const showButton =
    document.getElementById("showBtn");

showButton.addEventListener("click", function () {

    message.style.display = "block";

});


// ========================================
// 21. DOM TRAVERSING
// ========================================

console.log(
    studentList.firstElementChild
);

console.log(
    studentList.lastElementChild
);


// ========================================
// 22. PARENT
// ========================================

console.log(
    students[0].parentElement
);


// ========================================
// 23. NEXT SIBLING
// ========================================

console.log(
    students[0].nextElementSibling
);


// ========================================
// 24. PREVIOUS SIBLING
// ========================================

console.log(
    students[1].previousElementSibling
);


// ========================================
// 25. PREPEND
// ========================================

const specialStudent =
    document.createElement("li");

specialStudent.textContent =
    "Special Student";

specialStudent.classList.add("student");

studentList.prepend(specialStudent);