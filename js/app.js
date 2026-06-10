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

};