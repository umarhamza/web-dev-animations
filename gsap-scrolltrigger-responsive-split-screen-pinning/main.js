gsap.registerPlugin(ScrollTrigger)

const section = gsap.utils.toArray('main section:not(:first-child)');
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

gsap.set(photos, { yPercent: 101 });

// create gsap media query
const mm = gsap.matchMedia();

// add media query. When it matches, the associated function will run
mm.add("(min-width: 600px)", () => {
    console.log('desktop');

    ScrollTrigger.create({
        trigger: 'main',
        start: 'top top',
        end: 'bottom bottom',
        pin: 'aside'
    });

    // loop throught all sections and animate the photo beside the headline. 
    // It will run when the top of the headline reaches 80% of the viewport
    section.forEach((section, index) => {
        let headline = section.querySelector('h2');
        ScrollTrigger.create({
            trigger: headline,
            start: 'top 80%',
            end: 'top 50%',
            scrub: true,
            markers: true,
            animation: gsap.to(photos[index], {
                yPercent: 0
            })
        })
    });

    return () => { // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile")
    };
});

const lenis = new Lenis()

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)