const container = document.querySelector('.container');
const sections = gsap.utils.toArray('.container section')
const text = gsap.utils.toArray('.anim')
const mask = document.querySelector('.mask')

let scrollTween = gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: () => `+=${container.offsetWidth}`,
    }
})

gsap.to(mask, {
    width: '128%',
    scrollTrigger: {
        trigger: '.wrapper',
        start: 'top left',
        scrub: 1
    }
})

sections.forEach((section, i) => {
    let text = section.querySelectorAll('.anim')

    gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
            trigger: section,
            containerAnimation: scrollTween,
            start: 'left center',
            markers: false,
        }
    })
})