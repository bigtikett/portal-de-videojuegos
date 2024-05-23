document.addEventListener('DOMContentLoaded', (event) =>{
    const progressCircle = document.querySelector('.autoplay-progress svg')
    const progressContent = document.querySelector('.autoplay-progress span')

    let swiper = document.querySelector('.swiper-container')

     swiper = new Swiper(".swiper-container", {
        effect: 'slide',
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
        grabCursor: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: true,
          },        
        autoplay: {
            delay: 5500,
            disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,          
          
          
        },
            breakpoints: {
                640: {
                slidesPerView: 1,
                spaceBetween: 10,
                },
                768: {
                slidesPerView: 2,
                spaceBetween: 20,
                },
                1024: {
                slidesPerView: 3,
                spaceBetween: 10,
                },
                1920: {
                slidesPerView: 4,
                spaceBetween: 0,
                },
                2560: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                }
            },

            on: {
                autoplayTimeLeft(s, time, progress) {
                  progressCircle.style.setProperty("--progress", 1 - progress);
                  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
                }
              }
                
    });

    
    
})