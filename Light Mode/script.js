const buttonSet = document.querySelector(".set")
const buttonAddition = document.querySelector(".addition")
const buttonSubtract = document.querySelector(".subtract")
const buttonPlay = document.querySelector(".play")

const buttonStop = document.querySelector(".stop")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)
let timerTimeOut

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer() {
  updateTimerDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
}

function countdown() {
  timerTimeOut = setTimeout(function () {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateTimerDisplay(minutes, 0)

    if (minutes <= 0 && seconds <= 0) {
      resetControls()
      return
    }

    if (seconds <= 0) {
      seconds = 60

      --minutes
    }
    updateTimerDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonSet.addEventListener("click", function () {
  minutes = prompt("Quantos minutos?")
  minutesDisplay.textContent = minutes
})
buttonAddition.addEventListener("click", function () {
  minutesDisplay.textContent = Number((minutes += 5))
})
buttonSubtract.addEventListener("click", function () {
  minutesDisplay.textContent = Number((minutes -= 5))
})
buttonPlay.addEventListener("click", function () {
  countdown()
})

buttonStop.addEventListener("click", function () {
  resetTimer()
})
