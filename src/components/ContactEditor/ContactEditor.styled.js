import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Label = styled.label`
  display: block;
  margin: 1em;
  font-size: 1.5em;
  font-weight: bolder;
`;

export const StyledForm = styled(Form)`
  padding: 0 5em 0 5em;
  text-align: left;
`;

export const InvalidValue = styled.div`
  width: 30%;
  color: white;
  font-size: 1.2rem;
  padding: 0.6rem;
  background-color: red;
  text-align: center;
  border-radius: 0.3em;
  margin-top: 0.5em;
`;

export const StyledField = styled(Field)`
  box-shadow: inset #abacaf 0 0 0 1px;
  border: 0;
  background: rgba(0, 0, 0, 0);
  width: 30%;
  appearance: none;
  position: relative;
  border-radius: 3px;
  padding: 9px 12px;
  line-height: 1.4;
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: 400;
  height: 40px;
  transition: all 0.2s ease;
  :hover {
    box-shadow: 0 0 0 0 #fff inset, silver 0 0 0 1px;
  }
  :focus {
    background: #fff;
    outline: 0;
    box-shadow: 0 0 0 0 #fff inset, lime 0 0 0 2px;
  }
`;
