document.addEventListener('DOMContentLoaded', () => {

    // --- Accessibility & Webpage Maker (Theme Toggle) --- //
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // --- Database Fetch & Render (Gallery) --- //
    const catGrid = document.getElementById("cat-grid-container");
    if(catGrid) {
        fetch('http://localhost:5000/api/cats')
            .then(res => res.json())
            .then(cats => {
                catGrid.innerHTML = ''; // clear mock text
                cats.forEach(cat => {
                    const card = document.createElement('div');
                    card.className = 'cat-card';
                    card.innerHTML = `
                        <img src="https://loremflickr.com/400/300/cat?lock=${cat.id}" alt="${cat.name}">
                        <h4>${cat.name}</h4>
                        <p><strong>Breed:</strong> ${cat.breed} (${cat.age_months} months)</p>
                        <p>${cat.description}</p>
                        <div class="badges">
                            ${cat.features && cat.features.length ? cat.features.map(f => `<span class="badge">${f}</span>`).join('') : '<span class="badge">A mystery</span>'}
                        </div>
                    `;
                    catGrid.appendChild(card);
                });
            })
            .catch(err => {
                console.error("Failed to load cats:", err);
                catGrid.innerHTML = '<p style="text-align:center;width:100%">Uh oh! Our cats are hiding. Is the API server running?</p>';
            });
    }

    // --- Live Cat Fact API --- //
    const factText = document.getElementById("fact-text");
    if(factText) {
        fetch('http://localhost:5000/api/fact')
            .then(res => res.json())
            .then(data => {
                if(data.fact) {
                    factText.textContent = data.fact;
                } else {
                    factText.textContent = "Cats sleep up to 16 hours a day! (API returned no fact)";
                }
            })
            .catch(err => {
                console.error("Fact API Error:", err);
                factText.textContent = "Cats are too mysterious to provide a fact right now.";
            });
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
        body.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
    }

    themeToggle.addEventListener("click", () => {
        if (body.getAttribute("data-theme") === "dark") {
            body.removeAttribute("data-theme");
            themeToggle.textContent = "🌙";
            themeToggle.setAttribute('aria-label', 'Toggle Dark Mode');
        } else {
            body.setAttribute("data-theme", "dark");
            themeToggle.textContent = "☀️";
            themeToggle.setAttribute('aria-label', 'Toggle Light Mode');
        }
    });

    // --- Arcade Game Maker (Hidden Game Loop) --- //
    const secretBtn = document.getElementById("secret-btn");
    const gameOverlay = document.getElementById("game-overlay");
    const closeGameBtn = document.getElementById("close-game");
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d");

    let animationId;
    let gameActive = false;

    // Secret Activation via UI or Keyboard (Konami-lite)
    secretBtn.addEventListener("click", launchGame);
    
    // Konami code tracker
    let konamiCode = ['l', 'a', 's', 'e', 'r'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if(gameActive) {
            // Prevent normal scrolling while game is active! (Embedded Arcade rule)
            if(["ArrowUp","ArrowDown","Space"].indexOf(e.code) > -1) {
                e.preventDefault();
            }
        } else {
            if(e.key.toLowerCase() === konamiCode[konamiIndex]) {
                konamiIndex++;
                if(konamiIndex === konamiCode.length) { launchGame(); konamiIndex = 0; }
            } else { konamiIndex = 0; }
        }
    });

    closeGameBtn.addEventListener("click", () => {
        gameActive = false;
        gameOverlay.classList.add("hidden");
        cancelAnimationFrame(animationId);
    });

    // --- Game Logic --- //
    const player = { x: 50, y: 50, radius: 15, color: '#f6ad55', speed: 5, dx: 0, dy: 0 };
    const laser = { x: 200, y: 200, radius: 6, color: '#ff0000', dx: 3, dy: 3 };
    let score = 0;

    function resizeCanvas() {
        // Keeps aspect ratio stable
        canvas.width = Math.min(window.innerWidth * 0.9, 800);
        canvas.height = Math.min(window.innerHeight * 0.7, 600);
    }
    window.addEventListener('resize', resizeCanvas);

    function launchGame() {
        gameActive = true;
        gameOverlay.classList.remove("hidden");
        resizeCanvas();
        resetEntities();
        // Set focus to trap keyboard inside game
        canvas.focus();
        gameLoop();
    }

    function resetEntities() {
        player.x = canvas.width / 2;
        player.y = canvas.height / 2;
        score = 0;
    }

    // Input handlers scoped to game
    document.addEventListener('keydown', (e) => {
        if (!gameActive) return;
        if (e.key === 'ArrowRight' || e.key === 'd') player.dx = player.speed;
        if (e.key === 'ArrowLeft' || e.key === 'a') player.dx = -player.speed;
        if (e.key === 'ArrowUp' || e.key === 'w') player.dy = -player.speed;
        if (e.key === 'ArrowDown' || e.key === 's') player.dy = player.speed;
    });

    document.addEventListener('keyup', (e) => {
        if (!gameActive) return;
        if (['ArrowRight', 'd', 'ArrowLeft', 'a'].includes(e.key)) player.dx = 0;
        if (['ArrowUp', 'w', 'ArrowDown', 's'].includes(e.key)) player.dy = 0;
    });

    function update() {
        // Player boundary physics
        player.x += player.dx;
        player.y += player.dy;

        if (player.x < player.radius) player.x = player.radius;
        if (player.x > canvas.width - player.radius) player.x = canvas.width - player.radius;
        if (player.y < player.radius) player.y = player.radius;
        if (player.y > canvas.height - player.radius) player.y = canvas.height - player.radius;

        // Laser "bug" physics (erratic bouncing)
        laser.x += laser.dx;
        laser.y += laser.dy;

        if (laser.x < laser.radius || laser.x > canvas.width - laser.radius) laser.dx *= -1;
        if (laser.y < laser.radius || laser.y > canvas.height - laser.radius) laser.dy *= -1;

        // Collision 
        const dist = Math.hypot(player.x - laser.x, player.y - laser.y);
        if (dist - player.radius - laser.radius < 1) {
            // "Catch" the laser, teleport it
            score += 10;
            laser.x = Math.random() * (canvas.width - 20) + 10;
            laser.y = Math.random() * (canvas.height - 20) + 10;
            // Increase speed slightly
            laser.dx *= 1.1; 
            laser.dy *= 1.1;
        }
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw Player (Cat paw)
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);
        ctx.fillStyle = player.color;
        ctx.fill();
        ctx.closePath();

        // Draw Laser (Red Dot)
        ctx.beginPath();
        ctx.arc(laser.x, laser.y, laser.radius, 0, Math.PI * 2);
        ctx.fillStyle = laser.color;
        ctx.fill();
        // Add a glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = laser.color;
        ctx.closePath();
        ctx.shadowBlur = 0; // reset

        // Score
        ctx.fillStyle = "#ffffff";
        ctx.font = "20px Outfit";
        ctx.fillText(`Pounces: ${score}`, 20, 30);
    }

    function gameLoop() {
        if(!gameActive) return;
        update();
        draw();
        animationId = requestAnimationFrame(gameLoop);
    }
});
