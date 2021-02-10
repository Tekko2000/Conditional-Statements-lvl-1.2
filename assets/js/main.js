var result = document.getElementById("result")
var quality = document.getElementById("quality")


function weather() {
    airQuality.innerHTML = quality.value
    if (quality.value <= 3) {
        result.innerHTML = "schlecht"
    } else if (quality.value <= 5) {
        result.innerHTML = "okay"
    } else if (quality.value <= 7) {
        result.innerHTML = "gut"
    } else if (quality.value <= 10) {
        result.innerHTML = "super"
    }

}