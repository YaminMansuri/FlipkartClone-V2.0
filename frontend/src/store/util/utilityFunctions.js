export const updateState = (oldState, updatedState) => {
  return { ...oldState, ...updatedState };
};

export const dispatchAction = (actionType, payloadData) => {
  return {
    type: actionType,
    payload: payloadData,
  };
};
