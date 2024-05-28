
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
  export function validatePassword(password) {
    const minLength = 4;
    const hasNumber = /\d/;
    const hasSpecialChar = /[@]/;
  
    if (password.length < minLength) {
      return false;
    }
    if (!hasNumber.test(password)) {
      return false;
    }
    if (!hasSpecialChar.test(password)) {
      return false;
    }
  
    return true;
  }
  