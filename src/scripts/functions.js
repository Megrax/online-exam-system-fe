function generateGreeting() {
  const now = new Date()
  const nowHour = now.getHours()
  let greeting = ''

  if (nowHour >= 5 && nowHour <= 10) {
    greeting = '早上好'
  } else if (nowHour > 10 && nowHour <=13) {
    greeting = '中午好'
  } else if (nowHour > 13 && nowHour <= 18) {
    greeting = '下午好'
  } else {
    greeting = '晚上好'
  }

  return greeting
}


module.exports = {
  generateGreeting
}