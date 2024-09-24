import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const carts = document.querySelectorAll("#cart")
const tl = gsap.timeline()

tl.from("header", {
    ease: "back.out(1.7)",
    duration: .5,
    xPercent: "-40",
})
    .from("#discountBanner", {
        ease: "back.out(1.7)",
        y: -100,
    })
    .from("#bannerbg", {
        ease: "elastic.inOut",
        x: "150%",
        duration: 1.5,

    }, "-=.1")
    .from(["#bannerTxt h1 ", "#bannerTxt p ", "#bannerTxt a"], {
        yPercent: 430,
        stagger: .2,

    })
    .from("#bannerImg", {
        ease: "elastic.inOut",
        y: "-100%",
    })
    .from("#discountLabel", {
        opacity: 0
    })

const scrollTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#box",
        start: "top 65%",
        end: "bottom center",
    },
    defaults: {
        // ease: "elastic.inOut",
        duration: 1.5,
    }
})
scrollTl
    .from("#box", {
        x: "-320%",
        stagger: .2,
        ease: "back.out(1.7)",
    }, "-=.7")
    .from(["#sliderTitle a", "#sliderTitle p"], {
        yPercent: 140,
    }, "-=1")
    .from(".swiper-slide", {
        opacity: 0,
        stagger: .4,
    }, "<")
gsap.set("#cart", {
    clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)"
})
const cartTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#cart",
        start: "top 25%",
        end: "bottom top",
        toggleActions: "play none play reverse",
    },
    defaults: {
        ease: "power4.inOut",
    }
})

cartTl
    .from("#cart", {
        y: -130,
        stagger: .1,
    })
    .to("#cart", {
        clipPath: "polygon(0% 95% , 100% 49% , 100% 100% , 0% 100%)",
    }, "<")
    .to("#cart", {
        clipPath: "polygon(0% 0% , 100% 0% , 100% 100% , 0% 100%)",
    }, "-=.5")


carts.forEach((cart) => {
    cart.addEventListener("mouseenter", () => {
        gsap.to(cart, {
            y: -10,
            x: 5,
        })
    })
    cart.addEventListener("mouseleave", () => {
        gsap.to(cart, {
            y: 0,
            x: 0
        })
    })
})