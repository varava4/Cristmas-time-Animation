   "use strict";
    window.addEventListener("load", windowLoad);
    function windowLoad() {
        document.documentElement.classList.add("loaded");
        const page = document.querySelector(".page");
        const parallaxItems = document.querySelectorAll('[class*="__inset"]');
        const speed = .05;
        let posX = 0;
        let cXprocent = 0;
        page.addEventListener("mousemove", parallaxAnimation);
        function parallaxAnimation(e) {
            const parallaxWidth = window.innerWidth;
            const cX = e.pageX - parallaxWidth / 2;
            cXprocent = cX / parallaxWidth * 100;
        }
        function setParallaxAnimationStyle(e) {
            const distX = cXprocent - posX;
            posX += distX * speed;
            parallaxItems.forEach((parallaxItem => {
                const value = parallaxItem.dataset.prxValue ? +parallaxItem.dataset.prxValue : 1;
                parallaxItem.style.cssText = `\n\t\t\t\ttransform: translateX(${posX / value}%)\n\t\t\t`;
            }));
            requestAnimationFrame(setParallaxAnimationStyle);
        }
        setParallaxAnimationStyle();
        const moon = document.querySelector(".moon");
        const buildings = document.querySelectorAll(".building");
        const three = document.querySelector(".three");
        const stairs = document.querySelector(".stairs");
        const train = document.querySelector(".train");
        const santaItems = document.querySelectorAll(".santa>*");
        window.addEventListener("scroll", createPosition);
        createPosition();
        function createPosition() {
            const contentElement = document.querySelector(".content__container");
            const windowHeight = window.innerHeight;
            const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 100;
            finalPos < 100 ? christmasAnimation(finalPos) : christmasAnimation(100);
        }
        function christmasAnimation(finalPos) {
            const moonAnim = {
                translate: 50 / 100 * finalPos,
                scale: 1 + 2 / 100 * finalPos
            };
            moon.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate(0,${moonAnim.translate}%)\n\t\t\t\tscale(${moonAnim.scale})\n\t\t`;
            const stairsAnim = {
                translate: 70 / 100 * finalPos,
                scale: 1 + 2 / 100 * finalPos
            };
            stairs.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate(0,${stairsAnim.translate}%)\n\t\t\t\tscale(${stairsAnim.scale})\n\t\t`;
            const threeAnim = {
                translate: 70 / 100 * finalPos,
                scale: 1 + 1.5 / 100 * finalPos
            };
            three.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate(0,${threeAnim.translate}%)\n\t\t\t\tscale(${threeAnim.scale})\n\t\t`;
            buildings.forEach(((building, index) => {
                const buildingAnim = {
                    translate: 30 * (buildings.length - index) / 100 * finalPos,
                    scale: 1 + 2 / 100 * finalPos
                };
                building.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate(0,${buildingAnim.translate}%)\n\t\t\t\tscale(${buildingAnim.scale})\n\t\t\t`;
            }));
            const trainAnim = {
                translate: 1 * finalPos
            };
            train.style.cssText = `\n\t\t\ttransform:\n\t\t\t\ttranslate(-${trainAnim.translate}%,${trainAnim.translate}%)\n\t\t`;
            santaItems.forEach(((santaItem, index) => {
                const santaAnim = {
                    left: (100 + 10 * index) / 100 * finalPos
                };
                santaItem.style.left = `${santaAnim.left}%`;
            }));
        }
    }
