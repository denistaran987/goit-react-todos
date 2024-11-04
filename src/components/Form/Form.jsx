import s from './Form.module.css';

const Form = ({ onTask }) => {
  const handleSubmmit = (e) => {
    e.preventDefault();
    onTask({
      id: Date.now(),
      text: e.target.elements.text.value,
    });
    e.target.reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmmit}>
      <input className={s.field} type="text" name="text" />
      <button type="submit">Add task</button>
    </form>
  );
};
export default Form;
