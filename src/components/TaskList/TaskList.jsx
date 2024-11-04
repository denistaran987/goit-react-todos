import Task from '../Task/Task';
import s from './TaskList.module.css';

const TaskList = ({ tasks, removeTask }) => {
  return (
    <div>
      <ul className={s.list}>
        {tasks.map(task => {
          return (
            <li className={s.item} key={task.id}>
              <Task task={task} removeTask={removeTask} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TaskList;
