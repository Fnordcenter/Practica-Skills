document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggling Logic
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check system preference
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (prefersLight) {
        body.setAttribute("data-theme", "light");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "light") {
            body.removeAttribute("data-theme");
            themeToggle.textContent = "🌙";
        } else {
            body.setAttribute("data-theme", "light");
            themeToggle.textContent = "☀️";
        }
    });

    // Pet Counter Logic
    const petBtn = document.getElementById("pet-button");
    const petCounterEl = document.getElementById("pet-counter");
    let petCount = 0;

    petBtn.addEventListener("click", () => {
        petCount++;
        petCounterEl.textContent = petCount;
        
        // Add a burst effect to the heart emoji
        const heart = document.getElementById("heart-emoji");
        heart.style.transform = "scale(1.8)";
        
        // Small meow sound effect optional
        // const audio = new Audio("meow.mp3");
        // audio.play().catch(e => console.log('Audio blocked', e));

        setTimeout(() => {
            heart.style.transform = "scale(1)";
        }, 200);
    });

    // Random Cat Facts Logic
    const facts = [
        "Cats spend 70% of their lives sleeping. That's a lot of naps!",
        "A group of cats is called a clowder.",
        "Cats have over 20 muscles that control their ears.",
        "A cat's nose print is as unique as a human's fingerprint.",
        "Cats can jump up to six times their height.",
        "The oldest known pet cat was found in a 9,500-year-old grave on the Mediterranean island of Cyprus.",
        "Cats make about 100 different sounds. Dogs make only about 10.",
        "A domestic cat can run at speeds of up to 30 mph.",
        "Isaac Newton is credited with inventing the cat flap."
    ];

    const factEl = document.getElementById("cat-fact");
    const newFactBtn = document.getElementById("new-fact-btn");

    newFactBtn.addEventListener("click", () => {
        // Fade out
        factEl.style.opacity = 0;
        
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * facts.length);
            factEl.textContent = facts[randomIndex];
            // Fade in
            factEl.style.opacity = 1;
            factEl.style.transition = "opacity 0.4s ease-in-out";
        }, 400); // match transition time
    });
});
