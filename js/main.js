const targetRandomShot = Math.ceil(Math.random() * 8);

const drumDiv = document.querySelector(".drum");

const shotAudio = document.querySelector("#shotAudio"),
    triggerAudio = document.querySelector("#triggerAudio"),
    drumAudio = document.querySelector("#drumAudio");

let currentRandomShot;

let twistBtn = document.querySelector("#twist"),
    shootBtn = document.querySelector("#shoot");

function handleTwist() {
    currentRandomShot = Math.ceil(Math.random() * 8);

    drumAudio.play()

    document.documentElement.style.setProperty('--rotateAngle', `${360 + (45 * (currentRandomShot - 1))}deg`);
    drumDiv.style.animation = `1s ease-in-out rotate`
    drumDiv.style.transform = `rotate(${360 + ((360 / 8) * (currentRandomShot - 1))}deg)`

    twistBtn.disabled = true
    setTimeout(() => {
        drumDiv.style.animation = `0`;
        shootBtn.disabled = false
    }, 2000)
}

function handleShoot() {
    shootBtn.disabled = true
    twistBtn.disabled = false

    if (targetRandomShot === currentRandomShot) {
        shotAudio.play()
        alert("Мертв")
    } else {
        triggerAudio.play();
    }
}

const intervals = {
    changeGradientDirectionTheme6Interval: undefined,
    changeGradientTheme6Interval: undefined
};

function clearAndUndefineInterval(intervals, key) {
    if (intervals[key]) {
        clearInterval(intervals[key]);
        intervals[key] = undefined;
    }
}

const firstGradientTheme6 = 'rgba(0,0,0,1) 0%, rgba(255, 255, 255,1) 100%)'
const secondGradientTheme6 = 'rgba(0,0,0,1) 0%, rgba(255, 0, 0,1) 100%)'
let currentGradientTheme6 = firstGradientTheme6;
let currentStepTheme6 = false;

const themes = {
    "1": "#373737",
    "2": "white",
    "3": "linear-gradient(-90deg, rgba(0,0,0,1) 0%, rgba(255,102,105,1) 100%)",
    "4": "linear-gradient(90deg, Gold 0%, DeepSkyBlue 100%)",
    "5": "linear-gradient(90deg, Brown 0%, DarkSeaGreen 100%)"
}

function changeTheme(theme) {
    Object.keys(intervals).forEach(intervalKey => {
        clearAndUndefineInterval(intervals, intervalKey)
    });
    if (Object.keys(themes).includes(theme)) {
        document.body.style.background = themes[theme]
    } else if (theme === "6") {
        intervals.changeGradientDirectionTheme6Interval = setInterval(() => {
            document.body.style.background = `linear-gradient(${currentStepTheme6 ? "-" : ""}90deg, ${currentGradientTheme6}`;
            currentStepTheme6 = !currentStepTheme6;
        }, 1)

        intervals.changeGradientTheme6Interval = setInterval(() => {
            if (currentGradientTheme6 === firstGradientTheme6) {
                currentGradientTheme6 = secondGradientTheme6;
            } else {
                currentGradientTheme6 = firstGradientTheme6;
            }
        }, 10)
    }

    document.cookie = theme
}

window.onload = () => {
    const themeSelect = document.querySelector("#theme_select");

    if (document.cookie) {
        themeSelect.value = document.cookie
    }

    changeTheme(themeSelect.value || 1)
}