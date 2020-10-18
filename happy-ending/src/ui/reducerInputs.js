import { useCallback, useReducer, useRef } from 'react';

function reducer (state, action) {
  switch (action.type) {
    case 'CREATE_MESSAGE':
      return {
        messages: state.messages.concat(action.message)
      };
    case 'CHANGE_MESSAGE':
      return {
        messages: state.messages.map(message => 
          message.id === +action.id ? { ...message, [action.name]: action.value} : message
        )
      };
    case 'REMOVE_MESSAGE':
      return {
        messages: state.messages.filter(message => message.id !== action.id)
      };
    default:
      return state;
  }
}

function useInputs(initialState) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { messages } = state;

  const nextId = useRef(messages.length);

  const onCreate = useCallback(() => {
    nextId.current += 1;
    dispatch({
      type: 'CREATE_MESSAGE',
      message: {
        id: nextId.current,
      }
    });
    localStorage.setItem("messages", JSON.stringify(state.messages));
    console.log(localStorage);
  }, [state.messages]);
  
  const onChange = useCallback(e => {
    const { id, name, value } = e.target;
    dispatch({
      type: 'CHANGE_MESSAGE',
      id,
      name,
      value,
    });
    localStorage.setItem("messages", JSON.stringify(state.messages));
    console.log(localStorage);
  }, [state.messages]);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_MESSAGE',
  //     id
  //   });
  // }, []);

  return [ state, onCreate, onChange ];
}

export default useInputs;