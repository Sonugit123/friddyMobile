
// export const validatePassword = (password: string, confirm: string) => {
//   const rules = {
//     length: password.length >= 8,
//     uppercase: /[A-Z]/.test(password),
//     special: /[^A-Za-z0-9]/.test(password),
//     match: password.length > 0 && password === confirm,
//   };

//   const isValid =
//     rules.length && rules.uppercase && rules.special && rules.match;

//   return { rules, isValid };
// };

export const validatePasswordStrength = (password: string) => {
  return {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };
};

export const validatePassword = (password: string, confirm?: string) => {
  const strength = validatePasswordStrength(password);

  const match =
    confirm !== undefined ? password.length > 0 && password === confirm : true;

  const isValid =
    strength.length && strength.uppercase && strength.special && match;

  return {
    rules: {
      ...strength,
      match,
    },
    isValid,
  };
};

