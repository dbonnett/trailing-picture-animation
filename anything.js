document.addEventListener("DOMContentLoaded", function() {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    let firstPosition = 0;
    let secondPosition;

    let width = 291;
    let height = 291;

    const targetPosition = -100; // Move left by 100px
    const animationSpeed = 1; // Pixels per frame
    
    function animate() {
        firstPosition -= animationSpeed;
        first.style.left = firstPosition + "px";


        width -= animationSpeed;
        height -= animationSpeed;
        first.style.width = width + "px";
        first.style.height = height + "px";
        first.style.top = (291 - height) / 2;
        first.style.opacity = 1 - (-firstPosition / 100)
        

        if (firstPosition < targetPosition / 2) {
            secondPosition = firstPosition + 50;
            second.classList.remove("front");
        } else {
            secondPosition = firstPosition - 50;
            second.classList.add("front");
        }
        second.style.left = secondPosition + "px";
        
        if (firstPosition > targetPosition) {
            requestAnimationFrame(animate);
        } else {
            firstPosition = 0; 
            height = 291;
            width = 291;
            requestAnimationFrame(animate);
        }
    }
    
    animate();
});