function checkSpam(str) {
  const lowerItem1 = '1xBet'.toLowerCase()
  const lowerItem2 = 'XXX'.toLowerCase()
  let lowerStr = str.toLowerCase()

  if (lowerStr.includes(lowerItem1) || lowerStr.includes(lowerItem2)) {
    return true;
  } else {
    return false;
  }
}
