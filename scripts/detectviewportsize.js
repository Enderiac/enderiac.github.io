let vw = window.innerWidth
let vh = window.innerHeight


if (vw < 768) {
    alert("This website is not yet supported on your device or resolution. Please make your resolution bigger or use a device with a bigger screen. Your resolution: "+vw+"x"+vh)
    window.location.href = "about:blank"
}
