const parallaxEffect = ()=> {
    let viewHeight = window.innerHeight;

    let sun = document.getElementById('sun');  
    let sunshine = document.getElementById('sunshine');
    let treeL = document.querySelector('.foreground-image-container.left');
    let treeR = document.querySelector('.foreground-image-container.right');
    let hero = document.getElementById('hero');
    
    // Set initial gradient
    hero.style.background = "linear-gradient(180deg, #87CEEB 0%, #87CEEB 40%, #0f172a 100%)";
    hero.style.backgroundSize = "100% 200%";
    hero.style.backgroundPosition = "0 0";
    hero.style.backgroundRepeat = "no-repeat";

    window.addEventListener("scroll", () => {
        let distanceFromTop = window.scrollY;
        let offset = distanceFromTop / viewHeight;
        
        if (distanceFromTop < viewHeight) {
            // Sun parallax
            sun.style.transform = `translate(50%, ${distanceFromTop * 0.4}px)`;
            
            // Sunshine effect
            let sunshineOpacity = Math.max(0, 1 - (distanceFromTop / (viewHeight * 0.5)));
            let sunshineScale = Math.max(0.5, 1 - (distanceFromTop / (viewHeight * 1.5)));
            sunshine.style.opacity = sunshineOpacity;
            sunshine.style.transform = `translate(50%, 50%) scale(${sunshineScale})`;
            
            // Tree parallax
            treeL.style.transform = `translate(-${80 * offset}%)`;
            treeR.style.transform = `translate(${80 * offset}%)`;

            // Background transition
            let scrollPercentage = Math.min((distanceFromTop / viewHeight) * 100, 100);
            hero.style.backgroundPosition = `0 ${scrollPercentage}%`;
        }
    });
}

export default parallaxEffect;