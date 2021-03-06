// EMAIL VALIDATION
export function emailValidator(email) {
    let errors = []
    if (email.indexOf('@') === 0) {
      errors.push('Need username before "@" symbol')
    }
    if (email.indexOf('@') === -1) {
      errors.push('Need "@" symbol after username')
    }
    if (email.split('.').length < 2) {
      errors.push('Need tld, eg .com')
    }
  
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }

  // PASSWORD VALIDATION
  export function passwordValidator(password) {
    let errors = []
    // -- check password length
    if (password.length < 8) {
      errors.push('Minimum length is 8 characters')
    }
    // -- check if it contains capital
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const chars = password.split('')
    let capsCount = 0
    let numCount = 0
    chars.forEach((chr) => {
      if (caps.includes(chr)) { capsCount++ }
      if (parseInt(chr)) { numCount++ }
    })
    if (capsCount === 0) {
      errors.push('Need to contain a capital letter')
    }
    if (numCount === 0) {
      errors.push('Need to contain a number')
    }
  
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }

  // INPUT PASSWORD AGAIN VALIDATION
  export function inputPasswordAgainValidator(retypepassword) {
    let errors = []
    // -- check password length
    if (retypepassword.length < 8) {
      errors.push('Minimum length is 8 characters')
    }
    // -- check if it contains capital
    const caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const chars = retypepassword.split('')
    let capsCount = 0
    let numCount = 0
    chars.forEach((chr) => {
      if (caps.includes(chr)) { capsCount++ }
      if (parseInt(chr)) { numCount++ }
    })
    if (capsCount === 0) {
      errors.push('Need to contain a capital letter')
    }
    if (numCount === 0) {
      errors.push('Need to contain a number')
    }
  
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }
  
  // USERNAME VALIDATION
  export function userNameValidator(name) {
    // store errors in an array to be shown to user
    let errors = []
    // check length of name
    const len = name.length
    if (len < 6) {
      errors.push("minimum 6 characters")
    }
    // -- check if it contains invalid characters including space
    // list of invalid characters (" and \) have to be escaped
    const invalidChars = "~!@#$%^&*()+=-`|{}[]:;\"'\\?/><,. ".split('')
    const chars = name.split('')
    // count invalid characters found
    let invalidCount = 0
    chars.forEach((chr) => {
      if (invalidChars.includes(chr)) { invalidCount++ }
    })
    if (invalidCount > 0) {
      errors.push(`contains ${invalidCount} invalid ${(invalidCount > 1) ? "characters" : "character"}`)
    }
    // -- check if all characters are numbers
    if (Number(name)) {
      errors.push("cannot contain only numbers")
    }
    if (Number(name.charAt(0))) {
      errors.push("first character cannot be a number")
    }
    
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }

  //NAME VALIDATION
  export function nameValidator(name) {
    // store errors in an array to be shown to user
    let errors = []
    // check length of name
    const len = name.length
    if (len < 2) {
      errors.push("minimum 2 characters")
    }
    // -- check if it contains invalid characters including space
    // list of invalid characters (" and \) have to be escaped
    const invalidChars = "~!@#$%^&*()+=-`|{}[]:;\"'\\?/><,. ".split('')
    const chars = name.split('')
    // count invalid characters found
    let invalidCount = 0
    chars.forEach((chr) => {
      if (invalidChars.includes(chr)) { invalidCount++ }
    })
    if (invalidCount > 0) {
      errors.push(`contains ${invalidCount} invalid ${(invalidCount > 1) ? "characters" : "character"}`)
    }
    // -- check if all characters are numbers
    if (Number(name)) {
      errors.push("cannot contain only numbers")
    }
    if (Number(name.charAt(0))) {
      errors.push("first character cannot be a number")
    }
    
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }

  //SURNAME VALIDATOR
  export function surnameValidator(name) {
    // store errors in an array to be shown to user
    let errors = []
    // check length of name
    const len = name.length
    if (len < 2) {
      errors.push("minimum 2 characters")
    }
    // -- check if it contains invalid characters including space
    // list of invalid characters (" and \) have to be escaped
    const invalidChars = "~!@#$%^&*()+=-`|{}[]:;\"'\\?/><,. ".split('')
    const chars = name.split('')
    // count invalid characters found
    let invalidCount = 0
    chars.forEach((chr) => {
      if (invalidChars.includes(chr)) { invalidCount++ }
    })
    if (invalidCount > 0) {
      errors.push(`contains ${invalidCount} invalid ${(invalidCount > 1) ? "characters" : "character"}`)
    }
    // -- check if all characters are numbers
    if (Number(name)) {
      errors.push("cannot contain only numbers")
    }
    if (Number(name.charAt(0))) {
      errors.push("first character cannot be a number")
    }
    
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }

  //SUBURB VALIDATION
  export function suburbValidator(name) {
    // store errors in an array to be shown to user
    let errors = []
    // check length of name
    const len = name.length
    if (len < 5) {
      errors.push("minimum 5 characters")
    }
    // -- check if it contains invalid characters
    // list of invalid characters (" and \) have to be escaped
    const invalidChars = "~!@#$%^&*()+=-`|{}[]:;\"'\\?/><,.".split('')
    const chars = name.split('')
    // count invalid characters found
    let invalidCount = 0
    chars.forEach((chr) => {
      if (invalidChars.includes(chr)) { invalidCount++ }
    })
    if (invalidCount > 0) {
      errors.push(`contains ${invalidCount} invalid ${(invalidCount > 1) ? "characters" : "character"}`)
    }
    // -- check if all characters are numbers
    if (Number(name)) {
      errors.push("cannot contain only numbers")
    }
    if (Number(name.charAt(0))) {
      errors.push("first character cannot be a number")
    }
    
    if (errors.length === 0) {
      return { valid: true, errors: errors }
    }
    else {
      return { valid: false, errors: errors }
    }
  }