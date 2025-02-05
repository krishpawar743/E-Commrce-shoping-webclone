
function startLoader() {
    let counterElement = document.querySelector(".counter");
    let currentValue = 0;

    function updateCounter() {
        if (currentValue >= 100)  {
            gsap.to(".overlay", { duration: 0.5, opacity: 0, onComplete: showContent });
            return;
        }

        currentValue += Math.floor(Math.random() * 10) + 1;

        if (currentValue > 100)  {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() * 200) + 50;
        setTimeout(updateCounter, delay);
    }

    updateCounter(); 
}

function showContent() {
    document.querySelector(".overlay").style.display = "none";
    document.querySelector(".header").style.display = "block";
    document.querySelector(".hero").style.display = "block";

    gsap.from(".h1", 1.5, {
        y: 700,
        stagger: { amount: 0.5 },
        ease: "power4.inOut",
    });

    gsap.from(".hero", 2, {
        y: 400,
        ease: "power4.inOut",
    });
}

startLoader();

gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
});

gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
        amount: 0.5,
    },
    ease: "power4.inOut",
});

