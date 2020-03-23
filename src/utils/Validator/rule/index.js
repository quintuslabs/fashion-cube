export const DEFAULT_RULE = {
  isRequired: true
};
export const NAME_RULE = {
  isRequired: true,
  minLength: 3
};
export const PHONE_RULE = {
  isRequired: true,
  maxLength: 15,
  minLength: 10
};
export const EMAIL_RULE = {
  isRequired: true,
  isEmail: true
};
