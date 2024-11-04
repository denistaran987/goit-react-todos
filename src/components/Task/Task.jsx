import s from './Task.module.css';

const Task = ({ task, removeTask }) => {
  const { text, id } = task;
  return (
    <div className={s.container}>
      <p className={s.text}>{text}</p>
      <button
        onClick={() => {
          removeTask(id);
        }}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
export default Task;
