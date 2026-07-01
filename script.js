
// ====================
// AOS
// ====================

AOS.init({

    duration:1000,

    once:true

});


// ====================
// Typed.js
// ====================

new Typed(".typing",{

    strings:[

        "Cybersecurity Researcher",

        "Computer Scientist",

        "Tech Repair Specialist",

        "Server Administrator"

    ],

    typeSpeed:70,

    backSpeed:50,

    backDelay:1500,

    loop:true

});


// ====================
// Particles
// ====================

particlesJS("particles-js", {

    particles: {

        number: {

            value: 80

        },

        color: {

            value:"#00BFFF"

        },

        shape:{

            type:"circle"

        },

        opacity:{

            value:0.5

        },

        size:{

            value:3

        },

        line_linked:{

            enable:true,

            distance:150,

            color:"#00BFFF",

            opacity:0.3

        },

        move:{

            enable:true,

            speed:2

        }

    }

});