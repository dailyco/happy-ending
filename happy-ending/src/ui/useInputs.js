import { useState } from 'react';

function useInputs(initialInput) {
  const [input, setInput] = useState(initialInput);

  const onChange = e => {
    const { name, value } = e.target;
    setInput(input => ({ ...input, [name]: value }));
    localStorage.setItem(name, value);
    console.log(localStorage);

    for (let key in input) {
      if (key !== "isValidate") {
        if (input[key].length < 1) {
          setInput(input => ({...input, isValidate: false}));
          break;
        } else {
          setInput(input => ({...input, isValidate: true}));
        }
      }
    }
  };
  return [ input, onChange ];
}

export default useInputs;