gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById("canvasanimation");
const context = canvas.getContext("2d");


canvas.width = 1158;
canvas.height = 770;

const frameCount = 110;
const currentFrame = index => (
    `https://www.juulvrasdonk.nl/light-assets/${(index + 1).toString().padStart(4, '0')}.png`
)

const images = []
const poster = {
  frame: 0
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(poster, {
  frame: frameCount - 1,
  snap: "frame",
  scrollTrigger: {
    scrub: 0.5
  },
  onUpdate: render // use animation onUpdate instead of scrollTrigger's onUpdate
});

images[0].onload = render;

function render() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[poster.frame], 0, 0); 
}

gsap.to(".header", {
  scrollTrigger: {
    trigger: ".header",
    pin: true,
    end: "bottom+=1000px none",
    // markers: true
  },
  overflow: "hidden"
})



function logo() {
  const logotl = gsap.timeline();
  logotl.from('.toplogo', {
    x: 40,
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut, 
    delay: .5
  })
  .from('.bottomlogo', {
    x: -40,
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
  }, '<')
  return logotl;
}

function hamburger() {
  const hamburgertl = gsap.timeline();
  hamburgertl.from('.topbun', {
    x: 40,
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
  })
  .from('.patty', {
    x: -40,
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
  }, '<.1')
  .from('.bottombun', {
    x: 40,
    opacity: 0,
    duration: 1,
    ease: Power4.easeOut
  }, '<.1 ')

  return hamburgertl;
}

function scroll() {
  const scrolltl = gsap.timeline();
  scrolltl.from('.scrollicon', {
    height: 0,
    duration: 1,
    ease: Power4.easeOut
  }
  )
  .from ('.scroll', {
    x: -30,
    opacity: 0
  }, '<.4')
  return scrolltl;
}
 

function heading() {
   const headingtl = gsap.timeline();
   headingtl.from('.heading-one', {
     y: 100,
     opacity: 0,
     ease: Power4.easeOut,
     duration: 2
   }) 
   return headingtl;
 }

 function BGshade() {
  const BGtl = gsap.timeline();
  BGtl.from('.backgroundshade', {
    y: 100,
    opacity: 0,
    ease: Power4.easeOut,
    duration: 5
  }) 
  return BGtl;
}

const main = gsap.timeline()
  .add(logo())
  .add(hamburger(), '-=.6')
  .add(heading(), '-=.3')
  .add(BGshade(), '<')
  .add(scroll(), '-=4')
  
  


gsap.to(".headingpoints", {
  scrollTrigger: {
    trigger: ".headingpoints",
    start: "bottom+=500px center+=100px ",
    end: "bottom+=500px bottom-=100px",
    toggleActions: "restart none reverse none",
    // markers: {
    //   startColor: "purple",
    //   endColor: "white"
    // }
  },
  left: "-100vw",

})

gsap.to(".headingpoints", {
  immediateRender: false,
  scrollTrigger: {
    trigger: ".headingpoints",
    start: "bottom+=1000px center+=100px ",
    end: "bottom+=1000px bottom-=100px",
    toggleActions: "restart none reverse none",
    // markers: true
  },
  left: "-200vw",

})



const blurtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".usp",
    toggleActions: "restart none reverse none",
    end: "bottom-=1000px bottom-=100px",
    // markers: true
  }
})


blurtl.to (".leftblob", {
  fill: "#FF0D64",
  duration: 2,
  y: -400,
  x: -200,
  scale: 3
})
.to (".rightblob", {
  fill: "#E59BFF",
  duration: 2,
  y: -400,
  x: 200,
  scale: 3
}, "<")
.to (".centerblob", {
  fill: "#FA00FF",
  y: -400,
  duration: 3
}, "<")



const usptl = gsap.timeline({
  scrollTrigger: {
    trigger: ".usp",
    start: "center bottom",
    end: "center bottom-=100px",
    toggleActions: "restart none reverse none"
    // markers: true
  }
})

usptl.from (".USPcontainer", {
  y: 300,
  opacity: 0,
  duration: 1,
  stagger: .2
})

.from (".USPicon", {
  scale: 0,
  opacity: 0,
  stagger: .2
}, '.5')

.from (".arrows", {
  x: -30,
  stagger: .2
})


gsap.to(".colorgrid", {
  scrollTrigger: {
    trigger: ".colorgrid",
    start: "center center",
    end: "bottom+=2000px top",
    pin: true,
    // markers: true
  }
})

gsap.from(".colorcar", {
  scrollTrigger: {
    trigger: ".colorgrid",
    start: "center center",
    end: "center bottom"
  },
  scale: 0,
  ease: Bounce.easeOut,
  stagger: .4
})

gsap.to (".textzoom", {
  scrollTrigger: {
    trigger: ".textzoom",
    start: "bottom+=1000px center",
    end: "bottom+=1000px top-=1000px",
    scrub: true,
    // markers: true
  },
  ease: "none",
  scale: 500
})


function orderheading() {
  const headingtl = gsap.timeline();
  headingtl.from(".orderheading", {
    y: 100,
    opacity: 0
  })
  return headingtl;
}

function orderbutton() {
  const preordertl = gsap.timeline();
  preordertl.from(".preorder", {
    y: 100,
    opacity: 0
  })
  return preordertl;
}

function totop() {
  const totoptl = gsap.timeline();
  totoptl.from(".totop", {
    y: 100,
    opacity: 0
  })
  return totoptl;
}

const mainordertl = gsap.timeline({
  scrollTrigger: {
    trigger: ".order",
    start: "center bottom",
    end: "center center+=100px",
    scrub: true,
    // markers: true
  }
})
.add(orderheading(),'1')
.add(orderbutton())
.add(totop(),'<.2')

