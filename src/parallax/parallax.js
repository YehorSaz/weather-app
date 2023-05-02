const parallaxEffect = () => {
    const layout = document.querySelector('.main-layout');
    const content = document.querySelector('.background-images');
    const clouds = document.querySelector('.background-item_clouds');
    const mountains = document.querySelector('.background-item_mountains');
    const human = document.querySelector('.background-item_human');

    const forClouds = 30;
    const forMountains = 20;
    const forHuman = 12;

    const speed = 0.02;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;


    const setMouseParallaxStyle = () => {

        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);



        clouds.style.cssText = `transform: translate(${positionX / forClouds}%,${positionY / forClouds}%);`;

        mountains.style.cssText = `transform: translate(${positionX / forMountains}%,${positionY / forMountains}%);`;

        human.style.cssText = `transform: translate(${positionX / forHuman}%,${positionY / forHuman}%);`;


        requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    layout.addEventListener("mousemove", function (e) {
        const parallaxWidth = content.offsetWidth;
        const parallaxHeight = content.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2;

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    });

}

export {
    parallaxEffect
}