import React, { useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    onInsert(text);
    setText('');
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="할 일을 입력하세요"
          value={text}
          onChange={onChange}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default TodoInsert;
