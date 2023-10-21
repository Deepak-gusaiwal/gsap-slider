let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')
let elems = [...document.querySelectorAll('.elem')];


elems.forEach((elem) => {
    let h1s = [...elem.querySelectorAll('h1')];
    let isAnimating = false;
    let i = 0;
    nextBtn.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;
            gsap.to(h1s[i], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" })
                    isAnimating = false;
                }
            });
            i < h1s.length - 1 ? i++ : i = 0
            gsap.to(h1s[i], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1
            });

        }
    })

    prevBtn.addEventListener('click', () => {
        if (!isAnimating) {
            gsap.to(h1s[i], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
                onComplete: function () {
                    gsap.set(this._targets[0], { top: "100%" });
                    isAnimating = false;
                }
            });
            i > 0 ? i-- : i = h1s.length - 1;
            gsap.to(h1s[i], {
                top: "-=100%",
                ease: Expo.easeInOut,
                duration: 1,
            });
        }
    })
})

// for images
{
    let imgElems = [...document.querySelectorAll('.slider .imgElem')];
    let isAnimating = false;
    let i = 0;
    nextBtn.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;
            gsap.to(imgElems[i], {
                width: 0,
                duration: 1,
                left: "100%",
                ease: Expo.easeInOut,
                onComplete: function () {
                    gsap.set(this._targets[0], { left: "0%", opacity: 0, width: "40%" });
                    isAnimating = false;
                }
            })
            i < imgElems.length - 1 ? i++ : i = 0;
            gsap.to(imgElems[i], {
                width: "100%",
                duration: 1,
                left: "50%",
                opacity: 1,
                ease: Expo.easeInOut,
            })
        }

    })
    prevBtn.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;
            gsap.to(imgElems[i], {
                width: 0,
                duration: 1,
                left: "100%",
                ease: Expo.easeInOut,
                onComplete: function () {
                    gsap.set(this._targets[0], { left: "0%", opacity: 0, width: "40%" });
                    isAnimating = false;
                }
            })
            i > 0 ? i-- : i = imgElems.length - 1;
            gsap.to(imgElems[i], {
                width: "100%",
                duration: 1,
                left: "50%",
                opacity: 1,
                ease: Expo.easeInOut,
            })
        }

    })

}

