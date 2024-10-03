const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


//loader

// // GSAP loader animation with percentage count
// const loader = document.querySelector('.loader');
// const loadertimer = document.querySelector('.loadertimer');
// const mainContent = document.querySelector('.main-content');

// let loadPercent = 0;

// // Function to update the loader percentage
// function updateLoader() {
//     const interval = setInterval(() => {
//         if (loadPercent < 100) {
//             loadPercent++;
//             loadertimer.innerHTML = loadPercent + '%';
//         } else {
//             clearInterval(interval);
//             // Hide loader after reaching 100%
//             gsap.to(loader, { 
//                 opacity: 0, 
//                 duration: 1, 
//                 onComplete: function() {
//                     loader.style.display = 'none';
//                 } 
//             });
//         }
//     }, 50); // Adjust the speed (50ms) as needed
// }

// // Start the loader update function
// updateLoader();


//loader













    //Remove lines 41-55 for DEMO-2
    var counter = document.querySelector(".percent");

    TweenLite.set(counter, {
        xPercent: -5,
        yPercent: -5,
    });

    window.addEventListener("mousemove", moveCounter);

    function moveCounter(e) {
        TweenLite.to(counter, 0.5, {
            x: e.clientX,
            y: e.clientY,
        });
    }

    function progress() {
        var windowScrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var windowHeight = $(window).height();
        var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

        var $bgColor = progress > 99 ? "#F15025" : "#fff";
        var $textColor = progress > 99 ? "#fff" : "#fff";

        $(".counter_bar h1")
            .text(Math.round(progress) + "%")
            .css({ color: $textColor });

        $(".fill")
            .height(progress + "%")
            .css({ backgroundColor: $bgColor });
    }
    progress();
    $(document).on("scroll", progress);

    

const btnHamburguer = document.querySelector(".btn-hamburguer")
const menuBar = document.querySelector('.menu-bar')

window.addEventListener("scroll", (event) => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    
    const appearMoment = 0.05977165883143049;
    if (scrollPercentage >= appearMoment) {
        btnHamburguer.style.opacity = "1";
        btnHamburguer.style.scale = "1";
    }
    else {
        btnHamburguer.style.opacity = 0;
        btnHamburguer.style.scale = 0;
    }

})

const menuIcon = document.querySelector('.menu-icon');
const html = document.querySelector('html');

btnHamburguer.addEventListener("click", (event) => {
    menuBar.classList.toggle("menu-bar-right")
    menuIcon.classList.toggle('change')
    html.classList.toggle("stop-scrolling")
});

const setVisible = (elementOrSelector, visible) =>
  (typeof elementOrSelector === 'string'
    ? document.querySelector(elementOrSelector)
    : elementOrSelector
  ).style.display = visible ? 'block' : 'none';



magnets = document.querySelectorAll(".magnetic")

magnets.forEach((magnet) => {
    if(window.innerWidth > 540) {
        magnet.addEventListener("mousemove", function(e) {
            const position = magnet.getBoundingClientRect();

            const x = e.pageX - window.scrollX - position.left-position.width/2
            const y = e.pageY - window.scrollY - position.top-position.height/2;

            magnet.style.transform = "translate(" + x * 0.3 + "px, "+ y * 0.5 + "px)";
            magnet.style.transition = "all 0s linear";
            magnet.classList.remove("shake")
            
        })
        magnet.addEventListener("mouseleave", function(e) {
            magnet.style.transition = "all 0.2s cubic-bezier(0, 0, 0.72, 0.21";
            magnet.style.transform = "translate(0px, 0px)";

        })
    }
});



// Audio

let soundButton = document.querySelector('.soundbutton'),
audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
soundButton.classList.toggle('paused')
audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
audio.pause()
}


































function homescreen() {

    // GSAP animation to reveal nav items, simplified stagger
    gsap.from(".nav-links li", {
        duration: 0.4,  // Reduced time for quicker reveal
        opacity: 0,
        x: -15,  // Reduced translation to lessen the animation load
        stagger: 0.1,  // Quick stagger for faster reveal
        ease: "power1.out"  // Simple easing for smoothness
    });

    // Branding animation, slight delay but quicker transition
    gsap.from(".branding", {
        duration: 0.9,  // Shortened duration
        opacity: 0,
        scale: 0.7,  // Reduced scale effect
        ease: "power1.out",  // Lighter easing
        delay: 0.4
    });
}


// Call homescreen animation function
homescreen();






function page2() {
    gsap.registerPlugin(ScrollTrigger);

    // Define common ScrollTrigger properties
    const scrollTriggerOptions = {
        trigger: "#page2",
        toggleActions: "play none none reverse",
        scrub: 0.5,  // Smooth scrolling
    };

    // Text Animation
    gsap.to(".stagger-text", {
        duration: 1,
        opacity: 1,
        y: 0,
        stagger: 0.2,  // Reduced stagger for smoother animation
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 50%", 
            end: "bottom 90%",
        }
    });

    // Line Animation
    gsap.to(".linezer", {
        duration: 1,
        width: "90%",
        ease: "power2.inOut",
        scrollTrigger: {
            ...scrollTriggerOptions,
            start: "top 90%", 
            end: "bottom 10%",
        }
    });
}


function page3() {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#page3",
            start: "top 80%", // Trigger animation when #page3 comes into view
            end: "bottom 20%", 
            toggleActions: "play none none reverse"
        }
    });

    tl.to("#page3", { duration: 0.8, opacity: 1, ease: "power2.inOut" })
      .to(".top-rights", { duration: 1, opacity: 1, ease: "power2.inOut" })
      .from(".top-rights h1", { duration: 1, y: 100, stagger: 0.2, opacity: 0, ease: "power2.out" })
      .to(".bottom-rights", { duration: 1, opacity: 1, ease: "power2.inOut" }, "-=0.5")
      .from(".left-columns h1", { duration: 1, y: 100, stagger: 0.2, opacity: 0, ease: "power2.out" })
      .from(".right-columns h1", { duration: 1, y: 100, stagger: 0.2, opacity: 0, ease: "power2.out" }, "-=0.8");
}




document.addEventListener("DOMContentLoaded", function() {
    page2();
    page3(); 
});
