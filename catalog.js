// List of publishers
const publishers = ['All', 'Pluralsight', 'Manning', "O'Reilly", 'Self-Published'];

// Course data
const courses = [
    // Pluralsight courses
    { title: "Authoring and Maintaining GitHub Actions Workflows", description: "Learn to create and manage GitHub Actions workflows effectively.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/github-actions-authoring-maintaining-workflows", date: "2024-08-08" },
    { title: "Running Jenkins in Kubernetes", description: "Explore how to deploy and manage Jenkins in a Kubernetes environment.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/jenkins-kubernetes-running", date: "2024-05-09" },
    { title: "Managing Docker on Linux Servers (2nd Edition)", description: "Master the skills of managing Docker containers on Linux servers.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/docker-linux-servers-managing", date: "2024-03-19" },
    { title: "Getting Started with NGINX", description: "Learn the fundamentals of NGINX web server and reverse proxy.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/nginx-getting-started", date: "2023-12-07" },
    { title: "Getting Started with Docker on Windows (3rd Edition)", description: "Dive into running Docker containers on Windows platforms.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/docker-windows-getting-started-2023", date: "2023-10-30" },
    { title: "Containers and Images: The Big Picture (2nd Edition)", description: "Understand the core concepts of containerization and container images.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/containers-images-big-picture-2023", date: "2023-09-20" },
    { title: "Getting Started with Jenkins (3rd Edition)", description: "Learn how to set up and use Jenkins for continuous integration and delivery.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/jenkins-getting-started-2023", date: "2023-08-11" },
    { title: "Getting Started with Ansible (2nd Edition)", description: "Explore automation with Ansible for configuration management and orchestration.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/ansible-getting-started", date: "2023-04-26" },
    { title: "Getting Started with Vagrant (2nd Edition)", description: "Learn to create and manage development environments with Vagrant.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/vagrant-getting-started", date: "2022-11-22" },
    { title: "Introduction to the HashiCorp Consul Associate Certification", description: "Prepare for the HashiCorp Consul Associate Certification exam.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/hashicorp-consul-associate-intro-cert", date: "2022-08-09" },
    { title: "Getting Started with HashiCorp Consul (2nd Edition)", description: "Explore service discovery and configuration with HashiCorp Consul.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/hashicorp-consul-getting-started-cert", date: "2022-05-10" },
    // TODO-UPDATED courses/docker-windows-getting-started-2021 (Edition 2) => 2021-11-16
    { title: "Getting Started with Docker Swarm (2nd Edition)", description: "Learn to orchestrate Docker containers using Docker Swarm mode.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/docker-swarm-getting-started/", date: "2021-06-24" },
    // TODO-UPDATED courses/managing-docker-linux-servers (Edition 1) => 2021-02-05
    // TODO-UPDATED courses/getting-started-jenkins (Edition 2?) => 30 Sep 2020
    // TODO-ORIGINAL courses/getting-started-ansible => 12 Jan 2020
    // TODO-ORIGINAL courses/devops-executive-briefing => 1 Nov 2018
    // TODO-ORIGINAL courses/implementing-self-hosted-docker-registry => 4 Jun 2018
    // TODO-ORIGINAL courses/transpiling-bundling-javascript-webpack => 29 Jan 2018
    // TODO-ORIGINAL courses/docker-images-containers-aspdotnet-core => 3 Aug 2017
    // TODO-ORIGINAL courses/deployment-pipeline-aspdotnet-core-docker => 3 Aug 2017
    // TODO-ORIGINAL courses/aspdotnet-core-msbuild-tooling => 26 May 2017

    // TODO-UPDATED courses/docker-swarm-mode-getting-started => 31 Mar 2017
    // TODO-ORIGINAL courses/dotnet-core-building-cross-platform-applications => 24 Mar 2017
    // TODO-UPDATED courses/containers-images-big-picture => 23 Jan 2017
    // TODO-UPDATED courses/docker-windows-getting-started => 12 Dec 2016
    // TODO-ORIGINAL courses/dotnet-core-windows-developers-getting-started => 16 Nov 2016
    // TODO-ORIGINAL courses/teamcity-getting-started => 7 Nov 2016
    // TODO-ORIGINAL courses/consul-deploying => 19 Sep 2016
    // TODO-UPDATED courses/jenkins-2-getting-started => 23 Aug 2016
    // TODO-UPDATED courses/consul-getting-started => 16 Aug 2016

    // TODO-ORIGINAL courses/javascript-asynchronous-modern => 7 Aug 2016
    // not in GitHub profile (TODO add to GH profile too)
    { title: "Reasoning About Asynchronous JavaScript", description: "This course will help you learn to take advantage of JavaScript's single-threaded nature, as opposed to being caught off guard by it. You'll walk away being able to effortlessly reason about when things execute in JavaScript.", publisher: "Pluralsight", link: "https://www.pluralsight.com/courses/asynchronous-javascript-reasoning", date: "2016-07-01" },
    // TODO-ORIGINAL courses/mongo-db-csharp-v2-driver => 3 Feb 2016
    // TODO-ORIGINAL courses/javascript-systemjs-jspm => 5 Nov 2015
    // TODO-ORIGINAL courses/javascript-testing-wallaby-js => 1 Sep 2015
    // TODO-ORIGINAL courses/confident-coding-automated-testing-aspdotnet-mvc =>  22 Jun 2015
    // TODO-ORIGINAL courses/sql-server-flyway-continuous-database-delivery => 12 May 2015
    // TODO-ORIGINAL courses/mysql-flyway-continuous-database-delivery => 26 Mar 2015
    // TODO-ORIGINAL courses/vagrant-versioning-environments => 1 Oct 2014
    // TODO-ORIGINAL courses/using-mongodb-aspdotnet-mvc => 3 Apr 2014










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
