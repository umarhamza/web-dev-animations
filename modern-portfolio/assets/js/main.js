gsap.registerPlugin(ScrollTrigger)

const pinnedImageWrapper = document.getElementById("pinned-image-wrapper")
const pinnedImage = document.getElementById("pinned-image")
const pinnedContent = document.getElementById("pinned-content")
const pinnedGradient = document.getElementById("pinned-gradient")
const revealTypes = document.querySelectorAll('.reveal-type')


function HeroImage() {
    const triggerElement = pinnedImageWrapper

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: triggerElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
        }
    })

    tl.to(pinnedImage, {
        clipPath: 'inset(0% 0% 0%)',
        scale: 1,
        duration: 1,
        ease: "Linear.easeNone",
    })

    tl.fromTo(pinnedGradient, {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 1,
        ease: "Linear.easeNone",
    })
}

HeroImage()

function RevealTypes() {
    revealTypes.forEach((heading) => {
        if (!heading) return

        const text = new SplitType(heading, {
            types: 'chars'
        })

        gsap.fromTo(text.chars, {
            opacity: 0.2

        }, {
            opacity: 1,
            duration: 0.1,
            stagger: 0.02,
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%',
                end: 'bottom 90%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
        })
    })
}

RevealTypes()

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)