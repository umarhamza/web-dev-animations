gsap.registerPlugin(ScrollTrigger)

const pinnedImageWrapper = document.getElementById("pinned-image-wrapper")
const pinnedImage = document.getElementById("pinned-image")
const pinnedContent = document.getElementById("pinned-content")

gsap.set(pinnedImage, { height: window.innerHeight })

const pinnedImageAnimation = gsap.to(pinnedImage, {
    clipPath: 'inset(0% 0% 0%)',
    scale: 1,
    duration: 1,
    ease: "Linear.easeNone",
})

ScrollTrigger.create({
    trigger: pinnedImageWrapper,
    start() {
        const startPin = 0
        return 'top +=' + startPin
    },
    end() {
        const endPin = pinnedContent.offsetHeight;
        return "bottom " + endPin;
    },
    animation: pinnedImageAnimation,
    scrub: 1,
    pin: true,
    pinSpacing: false,
    markers: true
})

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)