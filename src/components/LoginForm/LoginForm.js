import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import { Button, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <Input type="email" placeholder="Email" name="email" size="md" />
      </label>
      <label className={css.label}>
        Password
        <Input
          type="password"
          placeholder="Password"
          name="password"
          size="md"
        />
      </label>
      <Button variant="solid" type="submit">
        Log In
      </Button>
    </form>
  );
};
