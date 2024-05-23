document.addEventListener('DOMContentLoaded', () => {
    const marquee = (selector, speed) => {
        const list = document.querySelector(selector);

        if (!list) return; 

        const listClone = list.cloneNode(true);
        list.appendChild(listClone);

        let i = 0;
        let animation

        const animate = () => {
            list.style.transform = `translateX(-${i}px)`;

            if (i >= list.scrollWidth / 2) {
                i = 0;
            }

            i += speed;
            animation = requestAnimationFrame(animate);  
        }

        const startAnimation = () => {
            animation = requestAnimationFrame(animate)
        }

        const stopAnimation = () => {
            cancelAnimationFrame(animation)
        }

        list.addEventListener('mouseover', stopAnimation)
        list.addEventListener('mouseout', startAnimation)

        startAnimation()
    }

    marquee('.marquee-content', 1);
});



