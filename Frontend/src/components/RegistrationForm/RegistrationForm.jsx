export const RegistrationForm = () => {
  return (
    <form>
      <input type="email" name="email" placeholder="Email" required />

      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        autoComplete="off"
      />

      <input
        type="password"
        name="confirm-password"
        placeholder="Confirm password"
        required
        autoComplete="off"
      />

      <input type="text" name="name" placeholder="First name" required />

      <button type="submit">register</button>
      <button type="submit">log in</button>
    </form>
  );
};
