import React from 'react';
import './form.sass'
const Form = () => {
  return (
    <form className="subscription__form">
      <input type="text" className="subscription__input" name="Имя" placeholder="Имя" required/><br/>
      <input type="text" className="subscription__input" name="Фамилия" placeholder="Фамилия" required/><br/>
      <input type="text" className="subscription__input" name="Email"placeholder="Email" required/><br/>
      <input className="subscription__btn" type="submit" value="Отправить"/>
        </form>
  );
};

export default Form;