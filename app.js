const wrangler = document.querySelector('.header_wrangler_photo');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.header_section-1--headline-1');
const slheadline1 = document.querySelector('.slider-headline-1');
const slheadline2 = document.querySelector('.slider-headline-2');

const tl = new TimelineMax();

tl.fromTo(wrangler, 1, {height: "0%"}, {height: "90%", ease: Power2.easeInOut}
).fromTo(
    wrangler, 1.2,
    {width: "100%"},
    {width: "40%", ease: Power2.easeInOut}
)
.fromTo(wrangler, 0.5, {opacity: 1}, {opacity: 0.8})
.fromTo(slider, 1.2, {x:"-100%" }, {x: "0%"}, Power2.easeInOut)
.fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(hamburger, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
.fromTo(headline, 0.5, {opacity: 0, x: 50}, {opacity: 1, x: -100}, "-=0.5")
.fromTo(slheadline1, 0.5, {opacity: 0, x: 50}, {opacity: 1, x: 0}, "=0.5")
.fromTo(slheadline2, 0.5, {opacity: 0, x: 50}, {opacity: 1, x: 0}, "=1");