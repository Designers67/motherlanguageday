        document.addEventListener("DOMContentLoaded", function() {
            document.querySelectorAll(".martyr").forEach(img => {
                img.addEventListener("click", function() {
                    let modal = document.getElementById("martyr-info");
                    modal.innerHTML = `<h3>Martyr Details</h3><p>${this.dataset.info}</p>`;
                    modal.style.display = "block";
                    setTimeout(() => modal.style.display = "none", 7000);
                });
            });
            
            function createRaindrop() {
                let drop = document.createElement("div");
                drop.classList.add("raindrop");
                drop.style.left = Math.random() * 100 + "vw";
                drop.style.animationDuration = Math.random() * 3 + 1 + "s";
                document.body.appendChild(drop);
                setTimeout(() => drop.remove(), 2000);
            }
            setInterval(createRaindrop, 80);
        });
        
        function showMiniGame() {
            document.getElementById("miniGame").style.display = "block";
        }