// Function to generate the resume
function generateResume() {
    var _a;
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value.split(',');
    var experience = document.getElementById('experience').value;
    var projects = document.getElementById('projects').value.split(',');
    var education = document.getElementById('education').value;
    // Personal info output
    document.getElementById('resumeName').innerText = name;
    document.getElementById('resumeEmail').innerText = email;
    document.getElementById('resumePhone').innerText = phone;
    // Skills output
    var skillsList = document.getElementById('resumeSkills');
    skillsList.innerHTML = '';
    skills.forEach(function (skill) {
        var li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });
    // Experience output
    document.getElementById('resumeExperience').innerText = experience;
    // Projects output
    var projectsList = document.getElementById('resumeProjects');
    projectsList.innerHTML = '';
    projects.forEach(function (project) {
        var li = document.createElement('li');
        li.textContent = project.trim();
        projectsList.appendChild(li);
    });
    // Education output
    document.getElementById('resumeEducation').innerText = education;
    // Profile Picture upload handling
    var profilePic = (_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0];
    if (profilePic) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            document.getElementById('resumePic').src = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
        };
        reader.readAsDataURL(profilePic);
    }
    else {
        console.error('The resume outputs elements are missing!');
    }
    // Make resume visible
    document.getElementById('resumeOutput').style.display = 'block';
}
