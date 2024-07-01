const headerHTML = `
    <div class="left-section">
        <div class="hotel-name">HOTEL LP NIVAS</div>
        <div class="hotel-location">PURI</div>
    </div>

    <div class="right-section">
        <a class="header-element" href="home.html">
            HOME
        </a>

        <a class="header-element" href="rooms.html">
            ROOMS
        </a>

        <a class="header-element" href="facilities.html">
            FACILITIES
        </a>

        <a class="header-element" href="contact.html">
            CONTACT US
        </a>
    </div>
`;

document.querySelector('.header').innerHTML = headerHTML;