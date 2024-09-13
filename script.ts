// Function to generate the resume
function generateResume() {
    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split(',');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value.split(',');
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;

    // Personal info output
    (document.getElementById('resumeName') as HTMLElement).innerText = name;
    (document.getElementById('resumeEmail') as HTMLElement).innerText = email;
    (document.getElementById('resumePhone') as HTMLElement).innerText = phone;

    // Skills output
    const skillsList = (document.getElementById('resumeSkills') as HTMLElement);
    skillsList.innerHTML = '';
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill.trim();
        skillsList.appendChild(li);
    });

    // Experience output
    (document.getElementById('resumeExperience') as HTMLElement).innerText = experience;

    // Projects output
    const projectsList = (document.getElementById('resumeProjects') as HTMLElement);
    projectsList.innerHTML = '';
    projects.forEach(project => {
        const li = document.createElement('li');
        li.textContent = project.trim();
        projectsList.appendChild(li);
    });

    // Education output
    (document.getElementById('resumeEducation') as HTMLElement).innerText = education;

    // Profile Picture upload handling
    const profilePic = (document.getElementById('profilePic') as HTMLInputElement).files?.[0];
    if (profilePic) {
        const reader = new FileReader();
        reader.onload = function(event) {
            (document.getElementById('resumePic') as HTMLImageElement).src = event.target?.result as string;
        };
        reader.readAsDataURL(profilePic);
    } else {
        console.error('The resume outputs elements are missing!')
    }

    // Make resume visible
    (document.getElementById('resumeOutput') as HTMLElement).style.display = 'block';
}