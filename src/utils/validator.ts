export function multiValidator(...validators: Function[]) {
  return (value: string) => {
    for (const validator of validators) {
      const error = validator(value);

      if (error) {
        return error;
      }
    }
  };
}

export function required(value: string) {
  if (
    value === '' ||
    value === null ||
    value === undefined ||
    value.length === 0
  ) {
    return 'This field is required';
  }
}

export function hasSpecialCharacters(value: string) {
  const regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

  if (value.length === 0) {
    return;
  }

  if (regex.test(value)) {
    return 'This field should not contain a special character';
  }
}

export function validateEmail(value: string) {
  if (value.length === 0) {
    return;
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(value)) {
    return 'Invalid email format. Please enter a valid email address.';
  }
}
