import { useCallback, useReducer } from 'react';

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const SET_DATA = 'SET_DATA';

const formReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      let formIsValid = true;
      for (const inputID in state.inputs) {
        if (inputID === action.inputID) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputID].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputID]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    case SET_DATA:
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initializeInputs, initializeValid) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initializeInputs,
    isValid: initializeValid,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({ type: INPUT_CHANGE, value: value, isValid: isValid, inputID: id });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: SET_DATA,
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
