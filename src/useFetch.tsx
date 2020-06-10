import { useReducer, useEffect, useCallback } from 'react';

enum Type {
  Error = 'error',
  Success = 'success',
  Started = 'started',
}

enum Status {
  Rejected = 'rejected',
  Resolved = 'resolved',
  Pending = 'pending',
  Idle = 'idle',
}

type Action = { type: Type.Started } | { type: Type.Success; data: unknown[] } | { type: Type.Error; error: Error };

type State = {
  status: Status;
  data: unknown[];
  error: Error | null;
};

const fetchReducer = (state: State, action: Action) => {
  switch (action.type) {
    case Type.Started:
      return {
        ...state,
        status: Status.Pending,
      };
    case Type.Success:
      return {
        ...state,
        status: Status.Resolved,
        data: action.data,
      };
    case Type.Error:
      return {
        ...state,
        status: Status.Rejected,
        error: action.error,
      };
    default:
      throw new Error();
  }
};

const initialState: State = {
  status: Status.Idle,
  data: [],
  error: null,
};

const useFetch = (path: string) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const getData = useCallback(async () => {
    try {
      const response = await fetch(path);
      const data = await response.json();
      dispatch({ type: Type.Success, data: data });
    } catch (error) {
      dispatch({ type: Type.Error, error: error });
    }
  }, [path]);

  useEffect(() => {
    dispatch({ type: Type.Started });
    getData();
  }, []);

  const { status } = state;
  return {
    isLoading: status === Status.Idle || status === Status.Pending,
    isResolved: status === Status.Resolved,
    isRejected: status === Status.Rejected,
    ...state,
  };
};

export default useFetch;
