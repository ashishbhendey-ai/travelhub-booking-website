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

};