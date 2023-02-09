import { useState } from "react";

function App() {
  const [values, setValues] = useState({
    firstName: '',
    secondName: '',
    email: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const eventHandlerFirstName = (e) => {
    setValues({...values, firstName: e.target.value})
  }
  const eventHandlerSecondName = (e) => {
    setValues({...values, secondName: e.target.value})
  }
  const eventHandlerEmail = (e) => {
    setValues({...values, email: e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.firstName && values.secondName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className="App">
      <div class="form-container">
        <form 
        onSubmit={handleSubmit} 
        className="register-form">
          {submitted && valid ? <div className="success-message">Форма отправлена</div> : null} 
          <input
            onChange={eventHandlerFirstName}
            className="form-field"
            placeholder="Имя"
            name="first-name">
          </input>
          {submitted && !values.firstName ? <span>Введите имя</span> : null} 
          <input 
            onChange={eventHandlerSecondName}
            className="form-field"
            placeholder="Фамилия"
            name="second-name">
          </input>
          {submitted && !values.secondName ? <span>Введите фамилию</span> : null} 
          <input 
            onChange={eventHandlerEmail}
            className="form-field"
            placeholder="email"
            name="email">
          </input>
          {submitted && !values.email ? <span>Введите email</span> : null} 
         <button className="form-field">Отправить</button>
        </form>
      </div>
    </div>
  );
}

export default App;
