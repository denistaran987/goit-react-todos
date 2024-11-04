import s from './Filter.module.css';
import { useId } from 'react';

const Filter = () => {
  const randomId = useId();

  return (
    <div>
      <label htmlFor={randomId} className={s.label}>
        Search by name
      </label>
      <input type="text" id={randomId} />
    </div>
  );
};
export default Filter;
