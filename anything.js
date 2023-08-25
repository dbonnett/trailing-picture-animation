document.addEventListener("DOMContentLoaded", function() {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    let firstPosition = 0;
    let position = 0;
    let secondPosition = -50;

    let height = 291;
    let width = 291;

    const targetPosition = -100; // Move left by 100px
    const animationSpeed = 0.8; // Pixels per frame
    
    function animateFirst() {
        firstPosition -= animationSpeed;
        first.style.left = firstPosition + "px";

        let firstWidth = width;
        let firstHeight = height;

        firstWidth -= animationSpeed;
        firstHeight -= animationSpeed;
        first.style.width = firstWidth + firstPosition + "px";
        first.style.height = firstHeight + firstPosition + "px";
        first.style.top = (291 -(firstHeight + firstPosition)) / 2;
        first.style.opacity = 1 - (-firstPosition / 100)
        
        // // determine second position
        // if (firstPosition < targetPosition / 2) {
        //     secondPosition = firstPosition + 50;
        //     second.classList.remove("front");
        // } else {
        //     secondPosition = firstPosition - 50;
        //     second.classList.add("front");
        // }
        // second.style.left = secondPosition + "px";

        // //determine other second properties based on its position
        // second.style.width = width + secondPosition + "px";
        // second.style.height = height + secondPosition + "px";
        // second.style.top = (291 -(height + secondPosition)) / 2;
        // second.style.opacity = 1 - (-secondPosition / 100) 
        
        if (firstPosition > targetPosition) {
            requestAnimationFrame(animateFirst);
        } else {
            firstPosition = 0; 
            firstHeight = 291;
            firstWidth = 291;
            requestAnimationFrame(animateFirst);
        }
        //setTimeout(animateFirst, 2000);
    }
    
    function animateSecond() {
        secondPosition -= animationSpeed;
        second.style.left = secondPosition + "px";

        let secondHeight = height;
        let secondWidth = width;

        secondWidth -= animationSpeed;
        secondHeight -= animationSpeed;
        second.style.width = secondWidth + secondPosition + "px";
        second.style.height = secondHeight + secondPosition + "px";
        second.style.top = (291 -(secondHeight + secondPosition)) / 2;
        second.style.opacity = 1 - (-secondPosition / 100)

        if (secondPosition > targetPosition) {
            requestAnimationFrame(animateSecond);
        } else {
            secondPosition = 0; 
            secondHeight = 291;
            secondWidth = 291;
            requestAnimationFrame(animateSecond);
        }

    }

    function animate(elem, num) {
        position -= animationSpeed;
        first.style.left = position + "px";

        let h = height;
        let w = width

        h -= animationSpeed;
        w -= animationSpeed;
        second.style.width = w + position + "px";
        second.style.height = h + position + "px";
        second.style.top = (291 -(h + position)) / 2;
        second.style.opacity = 1 - (-position / 100)

        if (position > targetPosition) {
            requestAnimationFrame(animate);
        } else {
            position = 0; 
            h = height;
            w = width;
            requestAnimationFrame(animate);
        }
        //setTimeout(animateSecond, 500)
    } 

    //animate(first, 1);
    animateFirst();
    //setTimeout(animateSecond());
    animateSecond();

});