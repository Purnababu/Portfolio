document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close');

    const projects = {
        ems: {
            title: 'Employee Management System (EMS)',
            description: 'An ERP system to manage employee registrations, learning, and business development. <a href="ems.html" target="_blank">View EMS Project</a>',
             Liveat:' <a href="https://w3-ems-3179ca6e6a03.herokuapp.com/">Liveat </a>'
        },
        jabsupport4u: {
            title: 'JabSupport4U',
            description: 'A platform for freelancers and employers to connect. <a href="jobsupport4u.html" target="_blank">View JabSupport4U</a>',
            Liveat:' <a href="https://jobsupport4ufrontend-b53ca1d535d9.herokuapp.com/">Liveat </a>'
        },
        
        'armory-erp': {
            title: 'Client ERP',
            description: 'Dealer management system tailored for the armory industry. <a href="armory-erp.html" target="_blank">View Client ERP</a>',
        },
    };

    document.querySelectorAll('.carousel-item').forEach(item => {
        item.addEventListener('click', () => {
            const project = item.getAttribute('data-project');
            const projectData = projects[project];
            modalBody.innerHTML = `
                <h2>${projectData.title}</h2>
                <p>${projectData.description}</p>
                <h3>${projectData.Liveat}</h3>
            `;
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', e => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});




// -------------------------------------------------------
const text = "Let's build something extraordinary! As a Full Stack Java Developer, I bring innovation, expertise to every project...";
const typingText = document.getElementById("typing-text");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Typing speed (in milliseconds)
    } else {
        setTimeout(() => {
            typingText.textContent = ""; // Clear text
            index = 0; // Reset index
            typeEffect(); // Restart typing effect
        }, 2000); // Pause before restarting
    }
}

// Start typing when the page loads
window.onload = typeEffect;
