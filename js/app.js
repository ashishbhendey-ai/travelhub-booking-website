window.onload = function () {

    console.log("app.js loaded");

    const searchBtn = document.getElementById("searchBtn");

    if (searchBtn) {

        searchBtn.onclick = function () {

           

            window.location.href = "hotels.html";

        };

    }

    const reserveButtons =
        document.querySelectorAll(".reserve-btn");

    reserveButtons.forEach(function(button) {

        button.onclick = function () {

            alert("Reserve Clicked");

            window.location.href =
                "booking.html";

        };

    });

    // Initialize guest count dropdown with correct order
    const guestDropdown = document.getElementById("guestCount");
    if (guestDropdown) {
        guestDropdown.innerHTML = "";
        for (let i = 1; i <= 4; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i + " guest" + (i > 1 ? "s" : "");
            guestDropdown.appendChild(option);
        }
    }

    // Initialize subject dropdown styling with dropdown arrow icon
    const subjectDropdown = document.getElementById("subject");
    if (subjectDropdown) {
        // Create wrapper div for proper positioning
        const wrapper = document.createElement("div");
        wrapper.style.position = "relative";
        wrapper.style.width = "100%";
        wrapper.style.display = "inline-block";
        
        // Insert wrapper before the select element
        subjectDropdown.parentNode.insertBefore(wrapper, subjectDropdown);
        wrapper.appendChild(subjectDropdown);
        
        // Style the select element
        subjectDropdown.style.width = "100%";
        subjectDropdown.style.backgroundColor = "#ffffff";
        subjectDropdown.style.appearance = "none";
        subjectDropdown.style.webkitAppearance = "none";
        subjectDropdown.style.boxSizing = "border-box";
        subjectDropdown.style.paddingRight = "40px";
        
        // Create dropdown arrow icon using pseudo-element style approach
        const arrow = document.createElement("span");
        arrow.style.position = "absolute";
        arrow.style.right = "12px";
        arrow.style.top = "50%";
        arrow.style.transform = "translateY(-50%)";
        arrow.style.pointerEvents = "none";
        arrow.style.fontSize = "16px";
        arrow.style.color = "#666";
        arrow.innerHTML = "&#9662;";
        
        wrapper.appendChild(arrow);
    }

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.onsubmit = function (e) {
            e.preventDefault();
            
            const fullName = document.getElementById("fullName");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const subject = document.getElementById("subject");
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
            
            if (!phone.value.trim()) {
                alert("Please enter your phone number");
                phone.focus();
                return false;
            }
            
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(phone.value)) {
                alert("Please enter a valid phone number");
                phone.focus();
                return false;
            }
            
            if (!subject.value.trim()) {
                alert("Please enter a subject");
                subject.focus();
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
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
            
            return false;
        };
    }

    // Newsletter Subscription Form
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
            
            alert("Thank you for subscribing to our newsletter!");
            newsletterForm.reset();
            
            return false;
        };
    }

    // FAQ Accordion Toggle
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

    // Contact Support Button
    const contactSupportBtn = document.getElementById("contactSupportBtn");
    if (contactSupportBtn) {
        contactSupportBtn.onclick = function () {
            const contactFormSection = document.getElementById("contactFormSection");
            if (contactFormSection) {
                contactFormSection.scrollIntoView({ behavior: "smooth" });
            }
        };
    }

    // Smooth scroll for social media links
    const socialLinks = document.querySelectorAll(".social-link");
    socialLinks.forEach(function(link) {
        link.onclick = function (e) {
            // Allow default behavior for external links
            console.log("Social media link clicked: " + this.getAttribute("href"));
        };
    });

};