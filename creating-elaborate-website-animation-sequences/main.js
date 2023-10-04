let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } });
let flagPoles = CSSRulePlugin.getRule('.card::before');

tl
.to('h1', {
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    opacity: 1,
    y: 0,
    duration: 2.2
})
.to('.form', {
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    opacity: 1,
    y: 0,
}, '-=2')