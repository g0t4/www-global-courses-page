// List of publishers
const publishers = ['All', 'Pluralsight', 'Manning', "O'Reilly", 'Self-Published'];

// Course data
const courses = [
    // Pluralsight courses
    { title: "Authoring and Maintaining GitHub Actions Workflows", description: "Learn to create and manage GitHub Actions workflows effectively.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/github-actions-authoring-maintaining-workflows", date: "2024" },
    { title: "Running Jenkins in Kubernetes", description: "Explore how to deploy and manage Jenkins in a Kubernetes environment.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/jenkins-kubernetes-running", date: "2024" },
    { title: "Managing Docker on Linux Servers (2nd Edition)", description: "Master the skills of managing Docker containers on Linux servers.", publisher: "Pluralsight", link: "#", date: "2024" },
    { title: "Getting Started with NGINX", description: "Learn the fundamentals of NGINX web server and reverse proxy.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/nginx-getting-started", date: "2023" },
    { title: "Getting Started with Docker on Windows (3rd Edition)", description: "Dive into running Docker containers on Windows platforms.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/docker-windows-getting-started-2023", date: "2023" },
    { title: "Containers and Images: The Big Picture (2nd Edition)", description: "Understand the core concepts of containerization and container images.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/containers-images-big-picture-2023/table-of-contents", date: "2023" },
    { title: "Getting Started with Jenkins (3rd Edition)", description: "Learn how to set up and use Jenkins for continuous integration and delivery.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/jenkins-getting-started-2023", date: "2023" },
    { title: "Getting Started with Ansible (2nd Edition)", description: "Explore automation with Ansible for configuration management and orchestration.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/ansible-getting-started", date: "Apr 2023" },
    { title: "Getting Started with Vagrant (2nd Edition)", description: "Learn to create and manage development environments with Vagrant.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/vagrant-getting-started" },
    { title: "Introduction to the HashiCorp Consul Associate Certification", description: "Prepare for the HashiCorp Consul Associate Certification exam.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/hashicorp-consul-associate-intro-cert" },
    { title: "Getting Started with HashiCorp Consul (2nd Edition)", description: "Explore service discovery and configuration with HashiCorp Consul.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/hashicorp-consul-getting-started-cert" },
    { title: "Getting Started with Docker Swarm (2nd Edition)", description: "Learn to orchestrate Docker containers using Docker Swarm mode.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/docker-swarm-getting-started/" },

    // Manning course
    { title: "ES6 in Motion", description: "Master the latest features of JavaScript with ES6.", publisher: "Manning", link: "https://learning.oreilly.com/videos/-/10000MNLV201701/" },

    // O'Reilly courses
    { title: "Using MongoDB with Node.js", description: "Learn how to integrate MongoDB with Node.js applications.", publisher: "O'Reilly", link: "https://learning.oreilly.com/course/using-mongodb-with/9781491959084/" },
    { title: "Node.js Web Apps with Express", description: "Build powerful web applications using Node.js and Express.", publisher: "O'Reilly", link: "https://learning.oreilly.com/videos/-/9781491958940/" },
    { title: "Up and Running with Microsoft SQL Server", description: "Get started with Microsoft SQL Server and learn essential database concepts.", publisher: "O'Reilly", link: "https://learning.oreilly.com/videos/-/9781771375825/" },
    { title: "Overview of the Node.js Ecosystem", description: "Explore the vast ecosystem of Node.js and its popular libraries.", publisher: "O'Reilly", link: "https://learning.oreilly.com/videos/-/9781491957035/" },
    { title: "Shell Scripting with JavaScript", description: "Learn how to create powerful shell scripts using JavaScript.", publisher: "O'Reilly", link: "https://learning.oreilly.com/videos/-/9781771376075/" },
    { title: "Getting Started with Node.js", description: "Begin your journey with Node.js and server-side JavaScript.", publisher: "O'Reilly", link: "https://learning.oreilly.com/videos/-/9781491954881/" },

    // Self-published course
    { title: "On Writing JavaScript Well", description: "Master the art of writing clean, efficient, and maintainable JavaScript code.", publisher: "Self-Published", link: "https://weshigbee.usefedora.com/p/on-writing-javascript-well" },
];

// Function to create publisher filter buttons
function createPublisherFilters() {
    const filterContainer = document.getElementById('publisher-filters');
    publishers.forEach(publisher => {
        const button = document.createElement('button');
        button.textContent = publisher;
        button.className = publisher === 'All' ? 'active' : '';
        button.dataset.publisher = publisher.toLowerCase();
        filterContainer.appendChild(button);
    });
}

function createCourseCards() {
    const courseGrid = document.getElementById('course-grid');
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.dataset.publisher = course.publisher.toLowerCase();
        card.innerHTML = `
            <div class="course-card-content">
                <h2 class="course-title">${course.title}</h2>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="course-info">
                    <span class="publisher">${course.publisher}</span>
                    <!--${course.date ? `<span class="course-date">${course.date}</span>` : ''}-->
                    </div>
                    <a href="${course.link}" target="_blank" class="learn-more-btn">Learn More</a>
                </div>
            </div>
        `;
        courseGrid.appendChild(card);
    });
}

// Function to handle filtering
function handleFiltering() {
    const publisherFilters = document.getElementById('publisher-filters');
    const courseCards = document.querySelectorAll('.course-card');

    publisherFilters.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            const selectedPublisher = e.target.dataset.publisher;

            // Update button styles
            publisherFilters.querySelectorAll('button').forEach(btn => {
                if (btn.dataset.publisher === selectedPublisher) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            });

            // Filter courses
            courseCards.forEach(card => {
                const cardPublisher = card.dataset.publisher;
                if (selectedPublisher === 'all' || cardPublisher === selectedPublisher) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    createPublisherFilters();
    createCourseCards();
    handleFiltering();
});
