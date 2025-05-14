export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <p>Please enter your credentials to log in.</p>
      <p>
        Dont have an account? <a href="/auth/register">Register here</a>.
      </p>
      <p>
        Forgot your password? <a href="/auth/forgot-password">Reset it here</a>.
      </p>
    </>
  );
}
