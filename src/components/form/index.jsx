import './form.sass'

const Form = () => {
  return (
    <form className="subscription__form">
      <input
          type="text"
          className="subscription__input"
          name="Имя"
          placeholder="Имя"
          required/>
      <input
          type="text"
          className="subscription__input"
          name="Фамилия"
          placeholder="Фамилия"
          required/>
      <input
          type="text"
          className="subscription__input"
          name="Email"
          placeholder="Email"
          required/>
      <input
          className="subscription__btn"
          type="submit"
          value="Отправить"/>
    </form>
  )
}

export default Form