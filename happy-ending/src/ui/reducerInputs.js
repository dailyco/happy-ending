import { useCallback, useReducer, useRef } from 'react';

function reducer (state, action) {
  let messages;
  switch (action.type) {
    case "CREATE_MESSAGE":
      messages = state.messages.concat(action.message);
      break;
    case "CHANGE_MESSAGE":
      messages = state.messages.map(message => message.id === +action.id ? { ...message, [action.name]: action.value} : message);
      break;
    case "REMOVE_MESSAGE":
      messages = state.messages.filter(message => message.id !== +action.id);
      break;
    default:
      messages = state.messages;
  }
  localStorage.setItem("messages", JSON.stringify(messages));
  return { messages };
}

function useInputs(initialState) {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { messages } = state;

  const nextId = useRef(messages.length);

  const onCreate = useCallback(() => {
    nextId.current += 1;
    dispatch({
      type: "CREATE_MESSAGE",
      message: {
        id: nextId.current,
        to: "",
        message: "",
      }
    });
  }, []);
  
  const onChange = useCallback(e => {
    const { id, name, value } = e.target;
    dispatch({
      type: "CHANGE_MESSAGE",
      id,
      name,
      value,
    });
  }, []);

  const onRemove = useCallback(e => {
    const { id } = e.target;
    nextId.current -= 1;
    dispatch({
      type: "REMOVE_MESSAGE",
      id,
    });
  }, []);

  return [ state, onCreate, onChange, onRemove ];
}

export default useInputs;