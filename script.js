// 🌟 Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// 🌟 Typing Effect
const roles = ["AI/ML Engineer", "Web Developer", "Tech Enthusiast"];
let roleIndex = 0, letterIndex = 0, isDeleting = false;

function typeEffect() {
    const roleText = roles[roleIndex];
    document.querySelector(".typing-effect").innerHTML =
        roleText.substring(0, letterIndex) + "<span class='cursor'>|</span>";

    if (!isDeleting && letterIndex < roleText.length) {
        letterIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && letterIndex > 0) {
        letterIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            roleIndex = (roleIndex + 1) % roles.length;
        }
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);

    // 🌟 Animate Progress Bars
    document.querySelectorAll(".progress").forEach(bar => {
        const width = bar.getAttribute("data-width");
        if (width) setTimeout(() => (bar.style.width = width + "%"), 500);
    });

    // 🌟 Animate Circular Progress Bars
    document.querySelectorAll(".circle").forEach(circle => {
        const percent = circle.getAttribute("data-percent");
        if (percent) {
            const progressCircle = circle.querySelector(".progress-circle");
            const offset = 251.2 - (251.2 * percent) / 100; // Calculate offset
            progressCircle.style.strokeDashoffset = offset;
        }
    });
});

// 🌟 Form Validation
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value.trim();
        const email = document.querySelector('input[name="email"]').value.trim();
        const message = document.querySelector('textarea[name="message"]').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation

        if (!name || !email || !message) {
            alert("Please fill out all fields before submitting!");
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
        } else {
            alert("Message Sent Successfully!");
            form.reset();
        }
    });
}
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".progress-circle");
    const percentageTexts = document.querySelectorAll(".percentage-text");

    circles.forEach((circle, index) => {
        let progress = circle.dataset.progress;
        let dashoffset = 251.2 - (progress / 100) * 251.2;
        circle.style.strokeDashoffset = dashoffset;

        // Animate percentage count
        let count = 0;
        let interval = setInterval(() => {
            if (count >= progress) {
                clearInterval(interval);
            } else {
                count++;
                percentageTexts[index].textContent = count + "%";
            }
        }, 20);
    });
});


// 🌟 Fetch & Display GitHub Repositories
async function fetchGitHubRepos() {
    const username = "shalinijk7";
    const projectContainer = document.getElementById("projects-container");

    if (!projectContainer) {
        console.error("Error: #projects-container not found in HTML!");
        return;
    }

    projectContainer.innerHTML = "<p>Loading projects...</p>"; // Show loading text

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);

        if (!response.ok) {
            throw new Error(`GitHub API Error: ${response.status} - ${response.statusText}`);
        }

        const repos = await response.json();
        projectContainer.innerHTML = ""; // Clear loading text

        if (!repos.length) {
            projectContainer.innerHTML = "<p>No repositories found.</p>";
            return;
        }
        repos.forEach(repo => {
            const repoElement = document.createElement("div");
            repoElement.classList.add("project-card");
            repoElement.innerHTML = `
                <h3>${repo.name}</h3>
                ${repo.description ? `<p>${repo.description}</p>` : ""}
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;
            projectContainer.appendChild(repoElement);
        });
        

        
    } catch (error) {
        projectContainer.innerHTML = "<p>Failed to load projects. Please try again later.</p>";
        console.error("Error fetching GitHub repositories:", error);
    }
}

// 🌟 Trigger fetching when clicking "Projects"
const projectsLink = document.getElementById("projects-link");
if (projectsLink) {
    projectsLink.addEventListener("click", fetchGitHubRepos);
}
document.getElementById("contact-btn").addEventListener("click", function () {
    let contactSection = document.getElementById("contact-details");

    if (contactSection.style.display === "none" || contactSection.classList.contains("hidden")) {
        contactSection.style.display = "block";
        contactSection.classList.remove("hidden");
    } else {
        contactSection.style.display = "none";
        contactSection.classList.add("hidden");
    }
});
function toggleContact() {
    var contactDetails = document.getElementById("contact-details");
    if (contactDetails.style.display === "none" || contactDetails.style.display === "") {
        contactDetails.style.display = "block";
    } else {
        contactDetails.style.display = "none";
    }
}


