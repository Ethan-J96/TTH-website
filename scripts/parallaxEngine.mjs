const parallaxEffect = ()=> {
    let viewHeight = window.innerHeight;

    let sun = document.getElementById('sun');  
    let treeL = document.getElementById('foreground-left');
    let treeR = document.getElementById('foreground-right');
    let hero = document.getElementById('hero');
    
    hero.style.backgroundImage = "linear-gradient(180deg, #F4D6CC 0%, #F4D6CC 30%, #F5A47B 57.5%, #F58A50 100%)";
    hero.style.backgroundColor = "#F58A50";
    hero.style.backgroundSize = `auto ${viewHeight * 4}px`;
    hero.style.backgroundRepeat = "no-repeat";

    window.addEventListener("scroll", () => {
        let distanceFromTop = window.scrollY;
        let offset = distanceFromTop / viewHeight;
        
        if (distanceFromTop < viewHeight) {
            sun.style.transform = `translate(50%, ${distanceFromTop * 0.4}px)`;
            
            treeL.style.transform = `translate(-${80 * offset}%)`;
            treeR.style.transform = `translate(${80 * offset}%)`;

            hero.style.backgroundPositionY = `-${distanceFromTop * 4}px`;
        }

    });
}

export default parallaxEffect;