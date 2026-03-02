document.getElementById("leadForm").addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("formMessage").innerText =
        "Form submission will be connected to AWS backend soon.";
});