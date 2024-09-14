// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal for course details
const courseDetailButtons = document.querySelectorAll('.course-detail-btn');
const modal = document.getElementById('courseModal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModalBtn = document.querySelector('.modal .close');

const courseDetails = {
    "Web Development": "Learn HTML, CSS, JavaScript, and more to build responsive websites.",
    "Data Science": "Master Python, Data Analysis, and Machine Learning techniques.",
    "Mobile App Development": "Build mobile applications for Android and iOS platforms."
};

courseDetailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const courseName = btn.closest('.course-card').getAttribute('data-course');
        modalTitle.textContent = courseName;
        modalDescription.textContent = courseDetails[courseName];
        modal.style.display = 'flex';
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Contact form validation with dynamic error handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}. We have received your message.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
