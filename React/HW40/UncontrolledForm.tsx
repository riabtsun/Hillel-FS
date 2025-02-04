import { useRef } from 'react';

const UncontrolledForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Entered name: ' + inputRef.current?.value);
  };
  return (
    <div>
      <h2>UncontrolledForm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' ref={inputRef} />
        </label>
        <button type='submit'>Надіслати</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
