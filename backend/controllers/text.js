export const setText = (req, res) => {
  let textInverted = ''
  const { text } = req.params
  if (!text || !text.trim()) {
    res.json({
      status: 400,
      data: 'Debes agregar un texto'
    })
    return
  }
  if (typeof text === 'string') {
    textInverted = text.split('').reverse().join('')
    res.json({
      status: 200,
      data: textInverted,
      palindrome: isPalindrome(text, textInverted)
    })
  } else {
    res.json({
      status: 400,
      data: 'Error el tipo de texto que enviaste no es valido'
    })
  }
}

const isPalindrome = (text, textInverted) => {
  const palindrome = text === textInverted && true
  return palindrome
}
