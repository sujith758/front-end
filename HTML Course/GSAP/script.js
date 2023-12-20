// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:2,
//     backgroundColor:"red",
//     rotate:90,
//     repeat:-1,
//     yoyo:true
// })

// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:4,
//     backgroundColor:"blue",
//     rotate: 90,
//     repeat:-1,
//     yoyo:true
// })

// Making the timeline

// var timeLine = gsap.timeline()

// timeLine.to("h1",{
//     x:600,
//     duration:1
// });

// timeLine.to("h2",{
//     x:600,
//     duration:1
// });

// timeLine.to("h3",{
//     x:600,
//     duration:1
// });




// Actual website


var timeLine = gsap.timeline()


timeLine.from("#nav",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0
})

timeLine.from(".main h1",{
    y:100,
    duration:1,
    opacity:0,
    stagger:0.2
})

timeLine.from(".main>img",{
    scale:0,
    opacity:0,
    stagger:0.2
})

timeLine.from(".main h5",{
    color:"firebrick",
    opacity:0,
    y:10,
    repeat:-1,
    yoyo:true
})