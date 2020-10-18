import { useState } from 'react';

function useInputs(initialInput) {
  const [input, setInput] = useState(initialInput);

  const onChange = e => {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
    localStorage.setItem(name, value);
    console.log(localStorage);
  };

  return [ input, onChange ];
}

export default useInputs;