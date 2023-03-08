import { Button, Input } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        User name
        <Input type="text" placeholder="User name" name="name" size="md" />
      </label>
      <label className={css.label}>
        Email
        <Input type="email" placeholder="Email" name="email" size="md" />
      </label>
      <label className={css.label}>
        Password
        <Input
          name="password"
          type="password"
          placeholder="Password"
          size="md"
        />
      </label>
      <Button type="submit">Register</Button>
    </form>
  );
};
