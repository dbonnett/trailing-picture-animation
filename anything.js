document.addEventListener("DOMContentLoaded", function() {
    const first = document.getElementById("first");
    const second = document.getElementById("second");
    const third = document.getElementById("third");
    const fourth = document.getElementById("fourth");
    const main = document.getElementById("main");
    let firstPosition = 0;
    let secondPosition = -25;
    let thirdPosition = -50;
    let fourthPosition = -75;
    
    let zMain = 5;
    let zSecond = -2;
    let zFirst = -1;
    let zThird = -3;
    let zFourth = -4;

    let height = 291;
    let width = 291;

    const targetPosition = -100; // Move left by 100px
    const animationSpeed = 0.5; // Pixels per frame
    
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
        
        if (firstPosition > targetPosition) {
            requestAnimationFrame(animateFirst);
        } else {
            firstPosition = 0; 
            firstHeight = 291;
            firstWidth = 291;
            zFirst += 4;
            zMain += 2;
            first.style.zIndex = zFirst;
            main.style.zIndex = zMain;
            requestAnimationFrame(animateFirst);
        }
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
            zSecond += 4;
            zMain += 2;
            second.style.zIndex = zSecond;
            main.style.zIndex = zMain;
            requestAnimationFrame(animateSecond);
        }


    }
    function animateThird() {
        thirdPosition -= animationSpeed;
        third.style.left = thirdPosition + "px";

        let thirdWidth = width;
        let thirdHeight = height;

        thirdWidth -= animationSpeed;
        thirdHeight -= animationSpeed;
        third.style.width = thirdWidth + thirdPosition + "px";
        third.style.height = thirdHeight + thirdPosition + "px";
        third.style.top = (291 -(thirdHeight + thirdPosition)) / 2;
        third.style.opacity = 1 - (-thirdPosition / 100)
        
        if (thirdPosition > targetPosition) {
            requestAnimationFrame(animateThird);
        } else {
            thirdPosition = 0; 
            thirdHeight = 291;
            thirdWidth = 291;
            zThird += 4;
            zMain += 2;
            third.style.zIndex = zThird;
            main.style.zIndex = zMain;
            requestAnimationFrame(animateThird);
        }
    }

    function animateFourth() {
        fourthPosition -= animationSpeed;
        fourth.style.left = fourthPosition + "px";

        let fourthWidth = width;
        let fourthHeight = height;

        fourthWidth -= animationSpeed;
        fourthHeight -= animationSpeed;
        fourth.style.width = fourthWidth + fourthPosition + "px";
        fourth.style.height = fourthHeight + fourthPosition + "px";
        fourth.style.top = (291 -(fourthHeight + fourthPosition)) / 2;
        fourth.style.opacity = 1 - (-fourthPosition / 100)
        
        if (fourthPosition > targetPosition) {
            requestAnimationFrame(animateFourth);
        } else {
            fourthPosition = 0; 
            fourthHeight = 291;
            fourthWidth = 291;
            zFourth += 4;
            zMain += 2;
            fourth.style.zIndex = zFourth;
            main.style.zIndex = zMain;
            requestAnimationFrame(animateFourth);
        }

    }

    // function animate(elem, num) {
    //     position -= animationSpeed;
    //     first.style.left = position + "px";

    //     let h = height;
    //     let w = width

    //     h -= animationSpeed;
    //     w -= animationSpeed;
    //     second.style.width = w + position + "px";
    //     second.style.height = h + position + "px";
    //     second.style.top = (291 -(h + position)) / 2;
    //     second.style.opacity = 1 - (-position / 100)

    //     if (position > targetPosition) {
    //         requestAnimationFrame(animate);
    //     } else {
    //         position = 0; 
    //         h = height;
    //         w = width;
    //         requestAnimationFrame(animate);
    //     }
    // } 

    animateFirst();
    animateSecond();
    animateThird();
    animateFourth();

});

document.addEventListener("DOMContentLoaded", function() {
    const first = document.getElementById("fifth");
    const second = document.getElementById("sixth");
    const third = document.getElementById("seventh");
    const fourth = document.getElementById("eighth");
    let firstPosition = 100;
    let secondPosition = -50;
    let thirdPosition = -25;
    let fourthPosition = 0;
    first.zIndex = 100;
    
    let zSecond = -3;
    let zFirst = -4;
    let zThird = -2;
    let zFourth = -1;

    let height = 291;
    let width = 291;

    const targetPosition = 0; // Move left by 100px
    const animationSpeed = 0.5; // Pixels per frame
    
    function animateFirst() {
        firstPosition -= animationSpeed;
        first.style.right = firstPosition + "px";

        let firstWidth = width;
        let firstHeight = height;

        firstWidth -= animationSpeed;
        firstHeight -= animationSpeed;
        first.style.width = firstWidth + firstPosition -100 + "px";
        first.style.height = firstHeight  + firstPosition - 100 + "px";
        first.style.top = (291 -(firstHeight + firstPosition - 100)) / 2;
        first.style.opacity =(firstPosition / 100)
        
        if (firstPosition > targetPosition) {
            requestAnimationFrame(animateFirst);
        } else {
            firstPosition = 100; 
            firstHeight = 291;
            firstWidth = 291;
            zFirst += 4;
            first.style.zIndex = zFirst;
            requestAnimationFrame(animateFirst);
        }
    }
    
    function animateSecond() {
        secondPosition -= animationSpeed;
        second.style.right = secondPosition + "px";

        let secondHeight = height;
        let secondWidth = width;

        secondWidth -= animationSpeed;
        secondHeight -= animationSpeed;
        second.style.width = secondWidth + secondPosition -100 + "px";
        second.style.height = secondHeight + secondPosition -100+ "px";
        second.style.top = (291 -(secondHeight + secondPosition -100)) / 2;
        second.style.opacity = 1 - (-secondPosition / 100)

        if (secondPosition > targetPosition) {
            requestAnimationFrame(animateSecond);
        } else {
            secondPosition = 100; 
            secondHeight = 291;
            secondWidth = 291;
            zSecond += 4;
            second.style.zIndex = zSecond;
            requestAnimationFrame(animateSecond);
        }


    }
    function animateThird() {
        thirdPosition -= animationSpeed;
        third.style.right = thirdPosition + "px";

        let thirdWidth = width;
        let thirdHeight = height;

        thirdWidth -= animationSpeed;
        thirdHeight -= animationSpeed;
        third.style.width = thirdWidth + thirdPosition -100 + "px";
        third.style.height = thirdHeight + thirdPosition -100+ "px";
        third.style.top = (291 -(thirdHeight + thirdPosition-100)) / 2;
        third.style.opacity = 1 - (-thirdPosition / 100)
        
        if (thirdPosition > targetPosition) {
            requestAnimationFrame(animateThird);
        } else {
            thirdPosition = 100; 
            thirdHeight = 291;
            thirdWidth = 291;
            zThird += 4;
            third.style.zIndex = zThird;
            requestAnimationFrame(animateThird);
        }
    }

    function animateFourth() {
        fourthPosition -= animationSpeed;
        fourth.style.right = fourthPosition + "px";

        let fourthWidth = width;
        let fourthHeight = height;

        fourthWidth -= animationSpeed;
        fourthHeight -= animationSpeed;
        fourth.style.width = fourthWidth + fourthPosition -100+ "px";
        fourth.style.height = fourthHeight + fourthPosition -100+ "px";
        fourth.style.top = (291 -(fourthHeight + fourthPosition-100)) / 2;
        fourth.style.opacity = 1 - (-fourthPosition / 100)
        
        if (fourthPosition > targetPosition) {
            requestAnimationFrame(animateFourth);
        } else {
            fourthPosition = 100; 
            fourthHeight = 291;
            fourthWidth = 291;
            zFourth += 4;
            fourth.style.zIndex = zFourth;
            requestAnimationFrame(animateFourth);
        }

    }
    animateFirst();
    // animateSecond();
    // animateThird();
    // animateFourth();

});