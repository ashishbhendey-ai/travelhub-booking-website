window.onload = function () {

    console.log("app.js loaded");

    // ashAI - Get Started Button
    const getStartedBtn = document.getElementById("getStartedBtn");
    if (getStartedBtn) {
        getStartedBtn.onclick = function () {
            window.location.href = "signup.html";
        };
    }

    // ashAI - Feature Cards Click Handler
    const featureCards = document.querySelectorAll(".feature-card");
    featureCards.forEach(function(card) {
        card.style.cursor = "pointer";
        card.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
        
        card.onmouseover = function() {
            this.style.transform = "translateY(-8px)";
            this.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.15)";
        };
        
        card.onmouseout = function() {
            this.style.transform = "translateY(0)";
            this.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
        };
    });

    // ashAI - Value Proposition Buttons
    const valuePropButtons = document.querySelectorAll(".value-prop-btn");
    valuePropButtons.forEach(function(button) {
        button.onclick = function () {
            window.location.href = "features.html";
        };
    });

    // ashAI - Demo Request Button
    const demoRequestBtn = document.getElementById("demoRequestBtn");
    if (demoRequestBtn) {
        demoRequestBtn.onclick = function () {
            window.location.href = "demo.html";
        };
    }

    // ashAI - Newsletter Subscription Form
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.onsubmit = function (e) {
            e.preventDefault();
            
            const newsletterEmail = document.getElementById("newsletterEmail");
            
            if (!newsletterEmail.value.trim()) {
                alert("Please enter your email address");
                newsletterEmail.focus();
                return false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(newsletterEmail.value)) {
                alert("Please enter a valid email address");
                newsletterEmail.focus();
                return false;
            }
            
            alert("Thank you for subscribing to ashAI updates!");
            newsletterForm.reset();
            
            return false;
        };
    }

    // ashAI - Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.onsubmit = function (e) {
            e.preventDefault();
            
            const fullName = document.getElementById("fullName");
            const email = document.getElementById("email");
            const company = document.getElementById("company");
            const message = document.getElementById("message");
            
            // Validation
            if (!fullName.value.trim()) {
                alert("Please enter your full name");
                fullName.focus();
                return false;
            }
            
            if (!email.value.trim()) {
                alert("Please enter your email address");
                email.focus();
                return false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                alert("Please enter a valid email address");
                email.focus();
                return false;
            }
            
            if (!company.value.trim()) {
                alert("Please enter your company name");
                company.focus();
                return false;
            }
            
            if (!message.value.trim()) {
                alert("Please enter your message");
                message.focus();
                return false;
            }
            
            if (message.value.trim().length < 10) {
                alert("Message must be at least 10 characters long");
                message.focus();
                return false;
            }
            
            // Success message
            alert("Thank you for contacting ashAI! We will get back to you soon.");
            contactForm.reset();
            
            return false;
        };
    }

    // ashAI - FAQ Accordion Toggle
    const accordionButtons = document.querySelectorAll(".accordion-btn");
    accordionButtons.forEach(function(button) {
        button.onclick = function (e) {
            e.preventDefault();
            
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains("active");
            
            // Close all accordion items
            const allItems = document.querySelectorAll(".accordion-item");
            allItems.forEach(function(item) {
                item.classList.remove("active");
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                accordionItem.classList.add("active");
            }
        };
    });

    // ashAI - Contact Support Button
    const contactSupportBtn = document.getElementById("contactSupportBtn");
    if (contactSupportBtn) {
        contactSupportBtn.onclick = function () {
            const contactFormSection = document.getElementById("contactFormSection");
            if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: "smooth" });
            }
        };
    }

    // ashAI - Smooth scroll for social media links
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(function(link) {
        link.onclick = function (e) {
            console.log("Social media link clicked: " + this.getAttribute("href"));
        };
    });

    // ashAI - CTA Button Animations
    const ctaButtons = document.querySelectorAll(".cta-btn");
    ctaButtons.forEach(function(button) {
        button.style.transition = "all 0.3s ease";
        
        button.onmouseover = function() {
            this.style.transform = "scale(1.05)";
        };
        
        button.onmouseout = function() {
            this.style.transform = "scale(1)";
        };
    });

};