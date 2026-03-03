document.addEventListener("DOMContentLoaded", () => {

    // --- Lead Form ---
    const leadForm = document.getElementById("leadForm");
    const formMessage = document.getElementById("formMessage");

    leadForm.addEventListener("submit", (e) => {
        e.preventDefault();
        formMessage.innerText = "Form submission will be connected to AWS backend soon.";
    });

    // --- Scroll Animations ---
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;
            if (top < triggerPoint) {
                section.classList.add("show");
            } else {
                section.classList.remove("show"); // repeat animation
            }
        });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load

    // --- Modal Setup ---
    const servicesInfo = {
        cloud: {
            title: "Cloud Infrastructure",
            desc: "We provide complete cloud infrastructure solutions including migration, setup, and optimization. Scale your resources on demand and reduce operational overhead."
        },
        support: {
            title: "24/7 IT Support",
            desc: "Our expert IT team monitors your systems around the clock, resolving issues fast and proactively preventing downtime."
        },
        security: {
            title: "Security & Backup",
            desc: "We implement enterprise-grade security measures, backups, and disaster recovery plans to protect your critical data."
        }
    };

    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const closeBtn = document.querySelector(".close-btn");

    // Merge card click animations and modal
    document.querySelectorAll(".card-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = btn.parentElement;

            // Optional card highlight animation
            document.querySelectorAll(".card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");

            // Open modal
            const service = btn.getAttribute("data-service");
            if(service && servicesInfo[service]){
                modalTitle.innerText = servicesInfo[service].title;
                modalDesc.innerText = servicesInfo[service].desc;
                modal.style.display = "flex";
                document.body.style.overflow = "hidden"; // prevent scroll behind modal
            }

            // Optional: scroll to section if data-target is defined
            const targetSelector = btn.getAttribute("data-target");
            if(targetSelector){
                const target = document.querySelector(targetSelector);
                if(target) target.scrollIntoView({behavior: "smooth"});
            }
        });
    });

    // --- Close modal ---
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";

    // Remove active class from all cards
    document.querySelectorAll(".card").forEach(card => {
        card.classList.remove("active");
    });
});

window.addEventListener("click", (e) => {
    if(e.target === modal){
        modal.style.display = "none";
        document.body.style.overflow = "auto";

        document.querySelectorAll(".card").forEach(card => {
            card.classList.remove("active");
        });
    }
});
});