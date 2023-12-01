export const passwordPattern = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+-=[]{}'"\\|,.<>/?~])`
);
export const namePattern = new RegExp(`^[a-zA-ZąćęłńóśżźĄĆĘŁŃÓŚŻŹ]+$`);
