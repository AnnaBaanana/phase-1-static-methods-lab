class Formatter {
  //add static methods here
  static capitalize(string) {
    const stringS = string.split('')
    return stringS[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z-']+' '/g, "")
  }

  /*static titleize(string) {
    const stringS = string.split(' ')
    const nonC = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const check = nonC.find( el => el===stringS[0])
    if (check) {
      //const checkSplit = check.split('')
      const checkCap = Formatter.capitalize(check)
      //checkSplit[0].toUpperCase() + check.slice(1)
      console.log(checkCap)
      stringS.splice(0, 1, checkCap)
      } else {stringS.splice(0,1, stringS[0].toUpperCase())}
    
    for (let i=1; i<stringS.length; i++) {
          if (nonC.find(el => el === stringS[i])) {
            stringS.splice(i,1, stringS[i].toLowerCase())
            console.log(stringS[i])
          } else {stringS.splice(i,1, stringS[i].toUpperCase())
          }
          }    
    return stringS.join(' ')
  }*/

  static titleize(string) {
    const stringS = string.split(' ')
    stringS.splice(0, 1, Formatter.capitalize(stringS[0]))
    const nonC = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const check = nonC.find( el => el===stringS[0])    
    for (let i=1; i<stringS.length; i++) {
          if (nonC.find(el => el === stringS[i])) {
            stringS.splice(i,1, stringS[i].toLowerCase())
            console.log(stringS[i])
          } else {stringS.splice(i,1, Formatter.capitalize(stringS[i]))
          }
        }    
    return stringS.join(' ')
  }



}

  const sent = "a good day awaits"
  const joke = 'from me to you this is a funny joke'
  //const joke = 'from me to you this is a funny joke'
  const check = 'Great things come from good people.'
