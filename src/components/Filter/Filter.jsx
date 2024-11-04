import s from './Filter.module.css';
import { useId } from 'react';

const Filter = ({ filter, setFilter }) => {
  const randomId = useId();

  return (
    <div>
      <label htmlFor={randomId} className={s.label}>
        Search by name
      </label>
      <input
        type="text"
        id={randomId}
        value={filter}
        onChange={e => {
          setFilter(e.target.value);
        }}
      />
    </div>
  );
};
export default Filter;
