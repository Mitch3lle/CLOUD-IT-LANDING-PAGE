document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "Form submission will be connected to AWS backend soon.";
});
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (top < triggerPoint) {
            section.classList.add("show");
        } else {
            section.classList.remove("show"); // Remove when scrolled out
        }
    });
});
const cardButtons = document.querySelectorAll(".card-btn");

cardButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.parentElement;

        // Toggle card animation
        card.classList.toggle("active");

        // Scroll to target section if data-target exists
        const targetSelector = btn.getAttribute("data-target");
        if(targetSelector) {
            const targetSection = document.querySelector(targetSelector);
            if(targetSection) {
                targetSection.scrollIntoView({behavior: "smooth"});
            }
        }
    });
});