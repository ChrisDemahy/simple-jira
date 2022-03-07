import Validator from 'fastest-validator';
const v = new Validator();

/**
 * Validate an email address
 * @param e email address to validate
 */
export const validateEmail = async (e: string) => {
  try {
    const emailValidator = v.compile({ type: 'email', min: 6, max: 50 });
    const result = (await emailValidator(e)) || false;
    return result;
  } catch (e) {
    console.error('Email Validation Error!');
    console.debug(e);
    return false;
  }
};

/**
 * Validate a password
 * @param p password to validate
 */
export const validatePassword = async (p: string) => {
  try {
    const passwordValidator = v.compile({ type: 'string', min: 8, max: 50 });

    const result = passwordValidator(p);
  } catch (e) {
    console.error('Password Validation Error!');
    console.debug(e);
    return false;
  }
};
