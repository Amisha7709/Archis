document.addEventListener("DOMContentLoaded", function () {
    // ✅ Toggle Menu
    const hamburger = document.getElementById("hamburger-menu");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger) {
        hamburger.addEventListener("click", function () {
            mobileMenu.classList.toggle("show");
        });
    }

    // ✅ Scroll to Contact Section
    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact-section");

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    function loadSection(sectionId, filePath) {
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                document.getElementById(sectionId).innerHTML = data;
            })
            .catch(error => console.error(error));
    }
    // Load sections dynamically
    loadSection("navbar", "components/navbar.html");
    loadSection("hero", "components/hero.html");
    loadSection("brand", "components/brands.html");
    loadSection("video", "components/video.html");
    loadSection("benefits", "components/benefits.html");
    loadSection("star", "components/star.html");
    loadSection("founder", "components/founder.html");
    loadSection("bridge", "components/bridge.html");
    loadSection("testimonials", "components/testimonials.html");
    loadSection("news", "components/news.html");
    loadSection("banner", "components/banner.html");
    loadSection("contact", "components/contact.html");
    loadSection("footer", "components/footer.html");
    loadSection("footer-bottom", "components/footer-bottom.html");
});
