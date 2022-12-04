import { findTimeZone, getZonedTime } from 'timezone-support'

function pad2(num) {
  return num < 10 ? `0${num}` : num
}

function formatTime (date, timeZone) {
  const zonedTime = getZonedTime(date, timeZone)
  const { year, month, day, hours, minutes, seconds } = zonedTime
  return `${year}-${pad2(month)}-${pad2(day)} ${pad2(hours)}:${pad2(minutes)}:${pad2(seconds)}`
}

function displayTime (date, timeZone) {
  const formattedTime = formatTime(date, timeZone)
  console.log(formattedTime)
}

const now = new Date()

const prague = findTimeZone('Europe/Prague')
const toronto = findTimeZone('America/Toronto')

displayTime(now, prague)
displayTime(now, toronto)
