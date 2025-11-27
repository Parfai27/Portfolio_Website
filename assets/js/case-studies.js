console.log("Case Studies Page Loaded");

// Case Study Data
const caseStudies = {
    'smart-medical': {
        title: 'Smart Medical Inventory Tracker',
        image: 'assets/images/smart-medical.png',
        description: 'A lightweight system designed for rural clinics to efficiently track medicine stock levels and receive automated low-stock alerts. This solution addresses critical inventory management challenges in healthcare facilities with limited resources.',
        details: [
            'Real-time inventory tracking and monitoring',
            'Automated low-stock alerts via notifications',
            'User-friendly interface for non-technical staff',
            'Data export capabilities for reporting',
            'Multi-user access with role-based permissions'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Bootstrap']
    },
    'employee-attendance': {
        title: 'Employee Attendance System',
        image: 'assets/images/employee-attendance.png',
        description: 'A comprehensive attendance management platform built with Java Swing and PostgreSQL, featuring full CRUD operations. This desktop application streamlines employee attendance tracking, reporting, and management for organizations of all sizes.',
        details: [
            'Complete CRUD operations for employee records',
            'Automated attendance tracking and reporting',
            'Advanced filtering and search capabilities',
            'Data visualization and analytics',
            'Secure authentication and authorization',
            'Export functionality for payroll integration'
        ],
        technologies: ['Java', 'Java Swing', 'PostgreSQL', 'JDBC', 'SQL']
    },
    'diabetes-prediction': {
        title: 'Diabetes Prediction Web Application',
        image: 'assets/images/Diabetes-Prediction.png',
        description: 'A Django-based machine learning web application that predicts diabetes risk from patient data. This system combines modern web development with ML algorithms to provide healthcare professionals with early risk assessment tools.',
        details: [
            'Machine learning model integration',
            'Real-time diabetes risk prediction',
            'Patient data management system',
            'Interactive data visualization',
            'Secure patient information handling',
            'Responsive web interface'
        ],
        technologies: ['Python', 'Django', 'Machine Learning', 'Scikit-learn', 'HTML5', 'CSS3', 'JavaScript', 'SQLite']
    }
};

// Open Case Study Overlay
function openCaseStudy(caseId) {
    const caseData = caseStudies[caseId];
    if (!caseData) return;

    const overlay = document.getElementById('caseOverlay');
    const body = document.getElementById('caseOverlayBody');

    body.innerHTML = `
        <img src="${caseData.image}" alt="${caseData.title}">
        <h2>${caseData.title}</h2>
        <p class="case-description">${caseData.description}</p>
        
        <div class="case-details">
            <h3>Key Features</h3>
            <ul>
                ${caseData.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>

        <div class="case-details">
            <h3>Technologies Used</h3>
            <div class="tech-stack">
                ${caseData.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Close Case Study Overlay
function closeCaseStudy() {
    const overlay = document.getElementById('caseOverlay');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // View Case Study buttons
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const caseId = btn.getAttribute('data-case');
            if (caseId) {
                openCaseStudy(caseId);
            }
        });
    });

    // Close overlay button
    const closeBtn = document.querySelector('.close-overlay');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeCaseStudy);
    }

    // Close overlay when clicking outside
    const overlay = document.getElementById('caseOverlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeCaseStudy();
            }
        });
    }

    // Close overlay with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            closeCaseStudy();
        }
    });
});
