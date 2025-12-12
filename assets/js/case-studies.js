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
    },
    'finance-tracker': {
        title: 'Personal Finance Tracker',
        image: 'assets/images/finance-tracker.png',
        description: 'A modern, real-time web application for personal finance management that enables users to track income and expenses, visualize spending patterns, and gain insights into their financial health through interactive charts and analytics.',
        problem: 'Many people struggle to track their spending effectively, understand where their money goes, visualize their financial patterns, and maintain consistent financial records across devices. Traditional methods are cumbersome and don\'t provide real-time insights.',
        solution: 'Built a comprehensive Single Page Application (SPA) with Firebase backend that provides easy transaction recording, visual insights through interactive charts, real-time synchronization across devices, organized category management, and secure user-specific data storage.',
        details: [
            'Secure user authentication (Email/Password + Google OAuth)',
            'Real-time transaction management (Add, Edit, Delete)',
            'Receipt image upload and attachment',
            'Interactive data visualizations (Balance Trend, Income vs Expense, Spending by Category)',
            'Category management with analytics',
            'Financial dashboard with key metrics',
            'Transaction filtering and CSV export',
            'Responsive design for all devices',
            'Offline support with Firestore persistence',
            'Auto-seeding sample data for new users'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Chart.js v4.4.1', 'Firebase Authentication', 'Cloud Firestore', 'Firebase Storage', 'Google Fonts'],
        challenges: [
            {
                title: 'Real-time Data Synchronization',
                description: 'Implemented Firestore onSnapshot() listeners to ensure all views update instantly when data changes without manual refresh. Created a centralized transactions array that all views reference and designed update functions that automatically re-render UI components.'
            },
            {
                title: 'Chart Performance & Memory Management',
                description: 'Solved chart duplication issues causing memory leaks by implementing chart instance tracking with global variables, creating destroy logic before re-rendering charts, and optimizing data transformation for chart consumption.'
            },
            {
                title: 'User Data Isolation & Security',
                description: 'Ensured complete data isolation by implementing Firestore security rules with user ID validation, structuring database with user-specific paths (/users/{userId}/transactions), and adding authentication checks before all data operations.'
            },
            {
                title: 'Complex Data Aggregation',
                description: 'Created efficient data transformation functions for each chart type, implemented running balance calculations for trend analysis, built monthly aggregation logic for bar charts, and developed category totaling for doughnut charts.'
            }
        ],
        outcome: 'Successfully deployed a full-featured finance tracker that provides users with immediate visual insights into spending habits. Achieved excellent performance metrics (500ms initial load, 100-200ms chart rendering) and implemented complete security with Firebase-enforced data isolation.',
        metrics: [
            'Initial Load: ~500ms',
            'Chart Rendering: ~100-200ms per chart',
            'Real-time Update: ~100ms',
            'Code: 1,500+ lines across 11 files',
            '30+ modular functions',
            'Full offline support'
        ]
    },
    'study-plan': {
        title: 'My StudyPlan',
        image: 'assets/images/study-plan.png',
        description: 'A lightweight, web-based study planner application that helps students and self-learners organize study sessions, track progress across subjects, and maintain consistent learning habits through an intuitive browser-based interface.',
        problem: 'Students and self-learners often struggle to centralize their study planning, leading to missed study sessions, difficulty balancing multiple subjects, lack of clear visual overview of upcoming work, and no simple way to track progress and consistency. Traditional methods like paper planners or generic task managers are either too cumbersome or not focused on study-specific needs.',
        solution: 'Built a focused, static web application with a clean UI for creating and viewing study plans, plus a dedicated dashboard for monitoring upcoming sessions and completion status. By using local browser storage, the app provides a private, offline-capable planner that doesn\'t require account signup or server infrastructure, reducing friction and increasing accessibility.',
        details: [
            'Create and schedule study sessions with subjects and topics',
            'Organize multiple subjects with color-coded categorization',
            'Track study progress and mark sessions as complete',
            'Dashboard view for quick overview of upcoming sessions',
            'Local data persistence using browser storage (private and offline)',
            'Simple CRUD operations for study entries',
            'Responsive design for desktop and mobile devices',
            'No backend required - fully client-side application',
            'Easy deployment on any static hosting (GitHub Pages, etc.)',
            'Lightweight and fast performance'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript (Vanilla)', 'LocalStorage API', 'Responsive Design'],
        challenges: [
            {
                title: 'Local Data Persistence',
                description: 'Implemented robust localStorage management to ensure study plans persist across browser sessions while handling edge cases like storage limits, data corruption, and browser compatibility. Created efficient data serialization and retrieval mechanisms.'
            },
            {
                title: 'User Experience Design',
                description: 'Designed an intuitive interface that balances simplicity with functionality, ensuring students can quickly add study sessions without overwhelming features. Focused on clear visual hierarchy and easy navigation between planning and dashboard views.'
            },
            {
                title: 'Progress Tracking Logic',
                description: 'Developed a flexible system to track completion status, calculate progress percentages, and display upcoming sessions in a meaningful way. Ensured the dashboard provides actionable insights at a glance.'
            }
        ],
        outcome: 'Successfully created a focused study planning tool that students can use without setup barriers. The lightweight static design makes it easy to host and share, while local storage ensures privacy and offline capability. The dedicated dashboard helps users quickly assess their study schedule and maintain consistency.',
        metrics: [
            'Fully client-side - no server required',
            'Fast load times with minimal dependencies',
            'Private data storage in browser',
            'Works offline after initial load',
            'Easy to deploy on any static host'
        ]
    }
};

// Open Case Study Overlay
function openCaseStudy(caseId) {
    const caseData = caseStudies[caseId];
    if (!caseData) return;

    const overlay = document.getElementById('caseOverlay');
    const body = document.getElementById('caseOverlayBody');

    // Build the HTML content dynamically based on available data
    let contentHTML = `
        <img src="${caseData.image}" alt="${caseData.title}">
        <h2>${caseData.title}</h2>
        <p class="case-description">${caseData.description}</p>
    `;

    // Add Problem section if available
    if (caseData.problem) {
        contentHTML += `
            <div class="case-details">
                <h3><i class="ri-lightbulb-line"></i> The Problem</h3>
                <p>${caseData.problem}</p>
            </div>
        `;
    }

    // Add Solution section if available
    if (caseData.solution) {
        contentHTML += `
            <div class="case-details">
                <h3><i class="ri-tools-line"></i> The Solution</h3>
                <p>${caseData.solution}</p>
            </div>
        `;
    }

    // Add Technologies section
    contentHTML += `
        <div class="case-details">
            <h3>Technologies Used</h3>
            <div class="tech-stack">
                ${caseData.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    // Add Key Features section
    contentHTML += `
        <div class="case-details">
            <h3>Key Features</h3>
            <ul>
                ${caseData.details.map(detail => `<li>${detail}</li>`).join('')}
            </ul>
        </div>
    `;

    // Add Challenges section if available
    if (caseData.challenges && caseData.challenges.length > 0) {
        contentHTML += `
            <div class="case-details">
                <h3><i class="ri-flashlight-line"></i> Challenges Overcome</h3>
        `;
        caseData.challenges.forEach(challenge => {
            contentHTML += `
                <div class="challenge-item">
                    <h4>${challenge.title}</h4>
                    <p>${challenge.description}</p>
                </div>
            `;
        });
        contentHTML += `</div>`;
    }

    // Add Metrics section if available
    if (caseData.metrics && caseData.metrics.length > 0) {
        contentHTML += `
            <div class="case-details">
                <h3><i class="ri-bar-chart-line"></i> Performance Metrics</h3>
                <ul>
                    ${caseData.metrics.map(metric => `<li>${metric}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Add Outcome section if available
    if (caseData.outcome) {
        contentHTML += `
            <div class="case-details">
                <h3><i class="ri-trophy-line"></i> Outcome</h3>
                <p>${caseData.outcome}</p>
            </div>
        `;
    }

    body.innerHTML = contentHTML;

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
