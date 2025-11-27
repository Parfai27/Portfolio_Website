console.log("Blog Page Loaded!");

// Blog Data
const blogPosts = {
    'featured': {
        title: 'Modern UI/UX Principles Every Developer Should Know',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop',
        date: 'January 15, 2025',
        readTime: '8 min read',
        content: `
            <p>In today's digital landscape, creating user interfaces that are both functional and delightful is no longer optional—it's essential. As developers, understanding core UI/UX principles can significantly improve the quality of our applications and user satisfaction.</p>
            
            <h3>1. Consistency is Key</h3>
            <p>Consistent design patterns help users learn your interface faster. Use the same colors, fonts, spacing, and interaction patterns throughout your application. This creates a sense of familiarity and reduces cognitive load.</p>
            
            <h3>2. Visual Hierarchy</h3>
            <p>Guide users' attention through proper visual hierarchy. Use size, color, contrast, and spacing to emphasize important elements. Headings should be larger, primary actions should stand out, and secondary information should be de-emphasized.</p>
            
            <h3>3. Feedback and Affordances</h3>
            <p>Users need to know what's happening. Provide immediate feedback for all interactions—button clicks, form submissions, loading states. Make interactive elements look clickable through proper styling and hover effects.</p>
            
            <h3>4. Mobile-First Approach</h3>
            <p>With mobile traffic dominating web usage, design for mobile screens first, then enhance for larger screens. This ensures your application works well on all devices and forces you to prioritize essential features.</p>
            
            <h3>5. Accessibility Matters</h3>
            <p>Build interfaces that everyone can use. Use semantic HTML, proper ARIA labels, sufficient color contrast, and keyboard navigation support. Accessibility isn't just good practice—it's often a legal requirement.</p>
            
            <h3>Real-World Application</h3>
            <p>In my Smart Medical Inventory Tracker project, I applied these principles by creating a clean, consistent interface that healthcare workers could navigate intuitively, even with minimal technical training. The result was a 40% reduction in training time and higher user adoption rates.</p>
            
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" alt="UI Design Example" style="width: 100%; border-radius: 12px; margin: 25px 0;">
            
            <p>Remember, great UI/UX isn't about following trends—it's about understanding your users and creating experiences that solve their problems efficiently and enjoyably.</p>
        `
    },
    'attendance-system': {
        title: 'How I Built a Full Employee Attendance System',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
        date: 'December 20, 2024',
        readTime: '12 min read',
        content: `
            <p>Building a complete attendance management system from scratch taught me valuable lessons about desktop application development, database design, and user experience. Here's a breakdown of the architecture, database structure, CRUD logic, and Swing UI integration.</p>
            
            <h3>Architecture Overview</h3>
            <p>The system follows a three-tier architecture: Presentation Layer (Java Swing), Business Logic Layer (Java classes), and Data Access Layer (JDBC with PostgreSQL). This separation ensures maintainability and scalability.</p>
            
            <h3>Database Design</h3>
            <p>I designed a normalized database schema with tables for employees, attendance records, departments, and user authentication. Key considerations included:</p>
            <ul>
                <li>Proper indexing for fast queries on employee IDs and dates</li>
                <li>Foreign key constraints to maintain data integrity</li>
                <li>Timestamp fields for accurate attendance tracking</li>
                <li>Soft delete pattern for historical data preservation</li>
            </ul>
            
            <h3>CRUD Operations</h3>
            <p>Implementing robust CRUD operations required careful attention to:</p>
            <ul>
                <li>Input validation at both UI and database levels</li>
                <li>Transaction management for data consistency</li>
                <li>Error handling with user-friendly messages</li>
                <li>Optimistic locking to prevent concurrent update conflicts</li>
            </ul>
            
            <h3>Swing UI Integration</h3>
            <p>Java Swing provided a native desktop experience, but required careful attention to:</p>
            <ul>
                <li>Event-driven programming for user interactions</li>
                <li>Model-View separation using custom data models</li>
                <li>Responsive layouts using layout managers</li>
                <li>Custom rendering for better visual presentation</li>
            </ul>
            
            <h3>Challenges and Solutions</h3>
            <p>One major challenge was handling large datasets efficiently. I implemented pagination and lazy loading for attendance records, reducing initial load time from 15 seconds to under 2 seconds for datasets with 10,000+ records.</p>
            
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop" alt="Code Architecture" style="width: 100%; border-radius: 12px; margin: 25px 0;">
            
            <p>The project reinforced the importance of proper planning, clean code architecture, and user-centered design—even in desktop applications.</p>
        `
    },
    'medical-inventory': {
        title: 'Designing a Smart Medical Inventory Tracker',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=500&fit=crop',
        date: 'November 10, 2024',
        readTime: '10 min read',
        content: `
            <p>Building a healthcare-oriented system for rural clinics presented unique challenges that went beyond typical software development. The project required deep understanding of healthcare workflows, resource constraints, and user needs.</p>
            
            <h3>Understanding the Problem</h3>
            <p>Rural clinics often struggle with inventory management due to limited staff, inconsistent internet connectivity, and budget constraints. The system needed to work offline, be intuitive for non-technical users, and provide critical alerts for low stock levels.</p>
            
            <h3>UX Decisions</h3>
            <p>Key UX decisions that made the system successful:</p>
            <ul>
                <li><strong>Simplified Navigation:</strong> Reduced menu items to essential functions only</li>
                <li><strong>Color-Coded Alerts:</strong> Visual indicators for stock levels (green/yellow/red)</li>
                <li><strong>Large Touch Targets:</strong> Designed for tablet use in clinical environments</li>
                <li><strong>Offline-First Design:</strong> Core functionality works without internet</li>
                <li><strong>Minimal Data Entry:</strong> Barcode scanning and dropdown selections reduce errors</li>
            </ul>
            
            <h3>Technical Challenges</h3>
            <p>Implementing offline functionality required careful data synchronization strategies. I used local storage with conflict resolution algorithms to handle concurrent updates when connectivity was restored.</p>
            
            <h3>User Testing</h3>
            <p>Conducting user testing with actual clinic staff revealed critical insights. What seemed intuitive to me wasn't always clear to users. Iterative design based on real feedback improved the system's usability by 60%.</p>
            
            <h3>Impact</h3>
            <p>The system reduced medication stockouts by 45% and cut inventory management time by 3 hours per week per clinic. More importantly, it ensured critical medications were always available when needed.</p>
            
            <img src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&h=400&fit=crop" alt="Healthcare Technology" style="width: 100%; border-radius: 12px; margin: 25px 0;">
            
            <p>This project taught me that great software isn't just about code—it's about understanding users, their environment, and their constraints.</p>
        `
    },
    'django-ml': {
        title: 'Deploying a Django App With an ML Model',
        image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop',
        date: 'October 5, 2024',
        readTime: '15 min read',
        content: `
            <p>Integrating machine learning models into web applications requires careful consideration of performance, scalability, and user experience. This guide covers the complete process of implementing and deploying ML inference inside a Django web application.</p>
            
            <h3>Model Development</h3>
            <p>I started by training a diabetes prediction model using scikit-learn. The model was trained on a dataset of patient records and achieved 85% accuracy. Key features included age, BMI, glucose levels, and blood pressure.</p>
            
            <h3>Model Serialization</h3>
            <p>After training, I serialized the model using joblib for efficient storage and loading:</p>
            <pre><code>import joblib
joblib.dump(model, 'diabetes_model.pkl')</code></pre>
            
            <h3>Django Integration</h3>
            <p>I created a Django app to handle predictions:</p>
            <ul>
                <li>Created a model service class to load and use the ML model</li>
                <li>Built API endpoints for prediction requests</li>
                <li>Implemented input validation and error handling</li>
                <li>Added caching to improve response times</li>
            </ul>
            
            <h3>Performance Optimization</h3>
            <p>ML model inference can be slow. I implemented several optimizations:</p>
            <ul>
                <li><strong>Model Caching:</strong> Load model once at startup, reuse for all requests</li>
                <li><strong>Async Processing:</strong> Used Celery for long-running predictions</li>
                <li><strong>Response Caching:</strong> Cache predictions for identical inputs</li>
                <li><strong>Batch Processing:</strong> Process multiple predictions together</li>
            </ul>
            
            <h3>Deployment Considerations</h3>
            <p>Deploying ML models requires attention to:</p>
            <ul>
                <li>Model versioning and updates</li>
                <li>Monitoring prediction accuracy over time</li>
                <li>Handling model drift and retraining</li>
                <li>Resource allocation for model inference</li>
            </ul>
            
            <h3>Security</h3>
            <p>ML models can be vulnerable to adversarial attacks. I implemented:</p>
            <ul>
                <li>Input sanitization and validation</li>
                <li>Rate limiting to prevent abuse</li>
                <li>Authentication for API endpoints</li>
                <li>Logging for audit trails</li>
            </ul>
            
            <h3>Results</h3>
            <p>The deployed system handles 1000+ predictions per day with average response time of 150ms. The model has been retrained twice based on new data, maintaining accuracy above 83%.</p>
            
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop" alt="Machine Learning Visualization" style="width: 100%; border-radius: 12px; margin: 25px 0;">
            
            <p>Integrating ML into web applications opens exciting possibilities, but requires careful planning and execution to ensure reliability and performance.</p>
        `
    }
};

// Open Blog Overlay
function openBlogPost(blogId) {
    const blogData = blogPosts[blogId];
    if (!blogData) return;

    const overlay = document.getElementById('blogOverlay');
    const body = document.getElementById('blogOverlayBody');

    body.innerHTML = `
        <img src="${blogData.image}" alt="${blogData.title}">
        <h2>${blogData.title}</h2>
        <div class="blog-meta">
            <span><i class="ri-calendar-line"></i> ${blogData.date}</span>
            <span><i class="ri-time-line"></i> ${blogData.readTime}</span>
        </div>
        <div class="blog-content">
            ${blogData.content}
        </div>
    `;

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
    overlay.scrollTop = 0;
}

// Close Blog Overlay
function closeBlogPost() {
    const overlay = document.getElementById('blogOverlay');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('blogOverlay');
    
    // Read More buttons
    document.querySelectorAll('.read-more, .read-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const blogId = btn.getAttribute('data-blog');
            if (blogId) {
                openBlogPost(blogId);
            }
        });
    });

    // Close overlay button (using event delegation)
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            // Close when clicking the close button
            if (e.target.classList.contains('close-overlay')) {
                closeBlogPost();
            }
            // Close when clicking outside the content area
            if (e.target === overlay) {
                closeBlogPost();
            }
        });
    }

    // Close overlay with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && overlay.classList.contains('show')) {
            closeBlogPost();
        }
    });
});