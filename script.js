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
    loadSection("navbar", "components/navbar/navbar.html");
    loadSection("hero", "components/hero/hero.html");
    loadSection("brand", "components/brands/brands.html");
    loadSection("video", "components/video/video.html");
    loadSection("benefits", "components/benefits/benefits.html");
    loadSection("star", "components/star/star.html");
    loadSection("founder", "components/founder/founder.html");
    loadSection("bridge", "components/bridge/bridge.html");
    loadSection("testimonials", "components/testimonials/testimonials.html");
    loadSection("news", "components/news/news.html");
    loadSection("banner", "components/banner/banner/banner.html");
    loadSection("contact", "components/contact/contact.html");
    loadSection("footer", "components/footer/footer.html");
    loadSection("footer-bottom", "components/footer-bottom/footer-bottom.html");

    function showContactPage() {
        document.getElementById("content").style.display = "none"; 
        document.getElementById("contact").style.display = "block";
        document.getElementById("contact-link").style.fontWeight = "bold";
        document.getElementById("features-link").style.fontWeight = "normal";
    }

    function showAllPages() {
        document.getElementById("content").style.display = "block";
        document.getElementById("contact").style.display = "none";
        document.getElementById("contact-link").style.fontWeight = "normal";
        document.getElementById("features-link").style.fontWeight = "bold";
    }

    document.getElementById("navbar").addEventListener("click", function (event) {
        if (event.target.id === "contact-link") {
            event.preventDefault();
            showContactPage();
        }if (event.target.id === "features-link") {
            event.preventDefault();
            showAllPages();
        }
    });

    showAllPages();
});
