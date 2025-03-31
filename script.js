document.getElementById("popup").style.display = "block";
let selectedCourse = "";

const scores = {
    "24F2100335": 40,
    "24F2100182": 80,
    "23F2100097": 40,
    "23F3000630": 20
};

const scoreImageLink = "https://drive.google.com/uc?export=view&id=1BynZKJj2hfo4W_gG3Huw170vOzslFJTM";  // Replace with your actual Google Drive image ID

function selectCourse(course) {
    selectedCourse = course;
    document.getElementById("popup").style.display = "none";
    document.getElementById("rollInput").style.display = "block";
}

function submitRollNo() {
    let rollNo = document.getElementById("rollNumber").value.trim();
    let rollPattern = /^[0-9]{2}(F1|F2|F3)[0-9]{6}$/;

    if (!rollPattern.test(rollNo)) {
        alert("Invalid Roll Number! Format: YYF1/F2/F3XXXXXX");
        return;
    }

    let score = scores[rollNo] || "Not Found";
    document.getElementById("rollInput").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("resultText").innerHTML = 
        `<strong>Roll Number:</strong> ${rollNo} <br>
         <strong>Course:</strong> ${selectedCourse} <br>
         <strong>Oppe Score:</strong> ${score}`;

    document.getElementById("scoreDistBtn").style.display = "block";
}

function showScoreDistribution() {
    document.getElementById("scoreImageContainer").style.display = "block";
    document.getElementById("scoreImage").src = scoreImageLink;
}
