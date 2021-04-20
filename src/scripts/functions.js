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

function isValidEmail(email) {
  const pattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
  if (pattern.test(email)) {
    return true
  } else {
    return false
  }
}

function isValidPhone(phone) {
  const pattern = /^1[3456789]\d{9}$/
  if (pattern.test(phone)) {
    return true
  } else {
    return false
  }
}

module.exports = {
  generateGreeting,
  isValidEmail,
  isValidPhone
}