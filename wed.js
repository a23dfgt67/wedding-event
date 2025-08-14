     // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const nav = document.getElementById('nav');

        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileMenuBtn.innerHTML = nav.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Header scroll effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Testimonial slider
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        const testimonialNav = document.querySelectorAll('.testimonial-nav span');

        testimonialNav.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                // Remove active class from all items and dots
                testimonialItems.forEach(item => item.classList.remove('active'));
                testimonialNav.forEach(d => d.classList.remove('active'));
                
                // Add active class to clicked dot and corresponding item
                dot.classList.add('active');
                testimonialItems[index].classList.add('active');
            });
        });

        // Auto-rotate testimonials
        let currentTestimonial = 0;
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonialItems.length;
            
            testimonialItems.forEach(item => item.classList.remove('active'));
            testimonialNav.forEach(d => d.classList.remove('active'));
            
            testimonialItems[currentTestimonial].classList.add('active');
            testimonialNav[currentTestimonial].classList.add('active');
        }, 5000);

        // Form submission
        const rsvpForm = document.querySelector('.rsvp-form');
        rsvpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your RSVP! We look forward to celebrating with you.');
            rsvpForm.reset();
        });