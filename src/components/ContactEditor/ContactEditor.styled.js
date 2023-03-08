import styled from 'styled-components';
import { Form } from 'formik';

export const Label = styled.label`
  display: block;
  margin: 1em;
  font-size: 1.5em;
  font-weight: bolder;

  button {
    border: none;
    border-radius: 5px;
    background-color: silver;
    color: white;
    padding: 15px 32px;
    text-align: center;
    display: inline-block;
    font-size: 16px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s;
  }

  button:hover {
    background-color: #4caf50;
    color: white;
  }
`;

export const StyledForm = styled(Form)`
  padding: 0 5em 0 5em;
  text-align: center;
`;

export const InvalidValue = styled.div`
  background-color: red;
  text-align: center;
  border-radius: 0.6em;
  margin-top: 0.5em;
`;
