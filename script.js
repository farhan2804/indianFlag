function dropPetals() {
    const totalPetals = 9;
    let delay = 0;
  
    for (let i = 0; i < totalPetals; i++) {
      setTimeout(createPetal, delay);
      delay += 100; // Stagger creation by 100ms
    }
  }
  
  function createPetal() {
    const petal = document.createElement("img");
    const petalImages = [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
    ]; // Replace with actual image paths
    petal.src = petalImages[Math.floor(Math.random() * petalImages.length)];
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = Math.random() * 4 + 3 + "s";
    document.body.appendChild(petal);
  
    petal.addEventListener("animationend", () => {
      petal.remove();
    });
  }