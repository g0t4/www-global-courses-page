let courses = [];

// Function to remove comment lines from JSON string
function removeSingleLineComments(jsonString) {
    return jsonString
        .split('\n')
        .filter(line => !line.trim().startsWith('//'))
        .join('\n');
}

// Function to load courses from JSON file
async function loadCourses() {
    try {
        const response = await fetch('courses.json');
        const text = await response.text();
        const cleanedJson = removeSingleLineComments(text);
        const data = JSON.parse(cleanedJson);
        courses = data.courses;
        initializePage();
    } catch (error) {
        console.error('Error loading courses:', error);
    }
}

const all_publishers = () => courses.map(course => course.publisher);
const publishers = () => ["All", ...new Set(all_publishers())];

function updateCourseCount(count) {
    const countElement = document.getElementById('course-count');
    countElement.textContent = `Showing ${count} course${count !== 1 ? 's' : ''}`;
}

function createPublisherFilters() {
    const filterContainer = document.getElementById('publisher-filters');
    publishers().forEach(publisher => {
        const button = document.createElement('button');
        button.textContent = publisher;
        button.className = publisher === 'All' ? 'active' : '';
        button.dataset.publisher = publisher.toLowerCase();
        filterContainer.appendChild(button);
    });
}

function getPublisherIcon(publisher) {
    const icons = {
        'Pluralsight': 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/favicon.ico',
        'Manning': 'https://www.manning.com/assets/favicon/apple-touch-152-63d7a4c42a1ab2ef3d086d87b05927ef.png',
        'O\'Reilly': 'https://www.oreilly.com/favicon.ico'
    };
    return icons[publisher] || null;
}

function createCourseCards(sortedCourses) {
    const courseGrid = document.getElementById('course-grid');
    courseGrid.innerHTML = ''; // Clear existing cards
    sortedCourses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.dataset.publisher = course.publisher.toLowerCase();

        const date = course.date ? new Date(course.date) : null;
        const formattedDate = date ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : '';
        const showDate = true; // Changed to true to display dates for sorting

        const iconUrl = getPublisherIcon(course.publisher);
        const publisherDisplay = iconUrl
            ? `<img src="${iconUrl}" alt="${course.publisher}" class="publisher-icon">`
            : `<span class="publisher">${course.publisher}</span>`;

        card.innerHTML = `
            <div class="course-card-content">
                <h2 class="course-title">${course.title}</h2>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <div class="course-info">
                        ${publisherDisplay}
                        ${showDate ? `<span class="course-date">${formattedDate}</span>` : ''}
                    </div>
                    <div class="course-actions">
                        <a href="${course.link}" target="_blank" class="btn learn-more-btn">Learn More</a>
                        ${course.repo ? `<a href="${course.repo}" target="_blank" class="btn repo-btn">Repo</a>` : ''}
                    </div>
                </div>
            </div>
        `;
        courseGrid.appendChild(card);
    });
}

function sortCourses(courses, sortBy) {
    return [...courses].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else if (sortBy === 'date') {
            const dateA = a.date ? new Date(a.date) : new Date(0);
            const dateB = b.date ? new Date(b.date) : new Date(0);
            return dateB - dateA;
        }
    });
}

function handleFiltering() {
    const publisherFilters = document.getElementById('publisher-filters');
    const sortSelect = document.getElementById('sort-select');
    let filteredCourses = courses;

    function updateDisplay() {
        const selectedPublisher = publisherFilters.querySelector('button.active').dataset.publisher;
        const sortBy = sortSelect.value;

        filteredCourses = courses.filter(course =>
            selectedPublisher === 'all' || course.publisher.toLowerCase() === selectedPublisher
        );

        const sortedCourses = sortCourses(filteredCourses, sortBy);
        createCourseCards(sortedCourses);
        updateCourseCount(filteredCourses.length);
    }

    publisherFilters.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') {
            publisherFilters.querySelectorAll('button').forEach(btn => {
                btn.classList.toggle('active', btn === e.target);
            });
            updateDisplay();
        }
    });

    sortSelect.addEventListener('change', updateDisplay);

    // Initial display
    updateDisplay();
}

function initializePage() {
    createPublisherFilters();
    handleFiltering();
}

// Load courses and initialize the page
document.addEventListener('DOMContentLoaded', loadCourses);
