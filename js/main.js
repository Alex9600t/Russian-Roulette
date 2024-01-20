console.log(`


█████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ██████╗ ███████╗                        
██╔══██╗██║   ██║╚══██╔══╝██║  ██║██╔═══██╗██╔══██╗██╔════╝██╗                     
███████║██║   ██║   ██║   ███████║██║   ██║██████╔╝███████╗╚═╝                     
██╔══██║██║   ██║   ██║   ██╔══██║██║   ██║██╔══██╗╚════██║██╗                     
██║  ██║╚██████╔╝   ██║   ██║  ██║╚██████╔╝██║  ██║███████║╚═╝                     
╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝                        
                                                                                   
 ██████╗ ██████╗ ██╗███╗   ███╗ █████╗ ██████╗ ██████╗ ███████╗██╗   ██╗███████╗   
██╔═══██╗██╔══██╗██║████╗ ████║██╔══██╗██╔══██╗██╔══██╗██╔════╝██║   ██║██╔════╝   
██║██╗██║██║  ██║██║██╔████╔██║███████║██████╔╝██████╔╝█████╗  ██║   ██║███████╗   
██║██║██║██║  ██║██║██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██╔══╝  ██║   ██║╚════██║   
╚█║████╔╝██████╔╝██║██║ ╚═╝ ██║██║  ██║██████╔╝██║  ██║███████╗╚██████╔╝███████║▄█╗
 ╚╝╚═══╝ ╚═════╝ ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝╚══════╝ ╚═════╝ ╚══════╝╚═╝
                                                                                   
 ██████╗    ██████╗ ██████╗ ██╗   ██╗██╗██████╗  █████╗ ███╗   ██╗                 
██╔═══██╗   ██╔══██╗██╔══██╗██║   ██║██║██╔══██╗██╔══██╗████╗  ██║                 
██║██╗██║   ██████╔╝██║  ██║██║   ██║██║██║  ██║███████║██╔██╗ ██║                 
██║██║██║   ██╔══██╗██║  ██║██║   ██║██║██║  ██║██╔══██║██║╚██╗██║                 
╚█║████╔╝██╗██████╔╝██████╔╝╚██████╔╝██║██████╔╝██║  ██║██║ ╚████║██╗              
 ╚╝╚═══╝ ╚═╝╚═════╝ ╚═════╝  ╚═════╝ ╚═╝╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝              
`);

const Randomall = Math.ceil(Math.random() * 8);

let circle = document.querySelector(".circle")

let Randomin1;

let twistBtn = document.querySelector("#twist")
let shootBtn = document.querySelector("#shoot")

let shotAudio = document.querySelector("#shotAudio")
let triggerAudio = document.querySelector("#triggerAudio")
let drumAudio = document.querySelector("#drumAudio")

const handleTwist = () => {
    Randomin1 = Math.ceil(Math.random() * 8);

    drumAudio.play()

    circle.style.animation = `1s ease-in-out rotate${Randomin1}`
    circle.style.transform = `rotate(${360 + ((360 / 8) * (Randomin1 - 1))}deg)`

    twistBtn.disabled = true
    setTimeout(() => { circle.style.animation = `0`; shootBtn.disabled = false }, 2000)
}


const handleShoot = () => {
    shootBtn.disabled = true
    twistBtn.disabled = false

    if (Randomall === Randomin1) {
        shotAudio.play()
        alert("Мертв")
    } else {
        triggerAudio.play();
    }
}

let interval, interval2;
let a = false
let gradient = "rgba(0,0,0,1) 0%, rgba(255, 255, 255,1) 100%)";

const changeTheme = (theme) => {
    if (theme === "1") {
        if (interval) {
            clearInterval(interval);
            interval = undefined
        }

        if (interval2) {
            clearInterval(interval2)
            interval2 = undefined
        }

        document.body.style.background = "#373737";
    } else if (theme === "2") {
        if (interval) {
            clearInterval(interval);
            interval = undefined
        }

        if (interval2) {
            clearInterval(interval2)
            interval2 = undefined
        }

        document.body.style.background = "white";
    } else if (theme === "3") {
        if (interval) {
            clearInterval(interval);
            interval = undefined
        }

        if (interval2) {
            clearInterval(interval2)
            interval2 = undefined
        }

        document.body.style.background = "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(255,102,105,1) 100%)";
    } else if (theme === "4") {
        if (interval) {
            clearInterval(interval);
            interval = undefined
        }

        if (interval2) {
            clearInterval(interval2)
            interval2 = undefined
        }

        document.body.style.background = "linear-gradient(90deg, Gold 0%, DeepSkyBlue 100%)";
    } else if (theme === "5") {
        if (interval) {
            clearInterval(interval);
            interval = undefined
        }

        if (interval2) {
            clearInterval(interval2)
            interval2 = undefined
        }

        document.body.style.background = "linear-gradient(90deg, Brown 0%, DarkSeaGreen 100%)";
    } else if (theme === "6") {
        interval = setInterval(() => {
            document.body.style.background = `linear-gradient(${a ? "-" : ""}90deg, ${gradient}`;
            a = a ? false : true
        }, 1)

        interval2 = setInterval(() => {
            if (gradient === "rgba(0,0,0,1) 0%, rgba(255, 255, 255,1) 100%)") {
                gradient = "rgba(0,0,0,1) 0%, rgba(255, 0, 0,1) 100%)"
            } else{
                gradient = "rgba(0,0,0,1) 0%, rgba(255, 255, 255,1) 100%)"
            }
        }, 10)
    }

    document.cookie = theme
}

window.onload = () => {
    if (document.cookie) {
        document.querySelector("#theme_select").value = document.cookie
    }

    changeTheme(document.querySelector("#theme_select").value || 1)
}
