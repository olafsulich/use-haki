import { useReducer, useEffect } from 'react';
import { unableToReachLocation, geoIsNotSupported } from './helpers/errorMessages';

enum Status {
  Rejected = 'rejected',
  Resolved = 'resolved',
  Pending = 'pending',
  Idle = 'idle',
}

enum Type {
  Error = 'error',
  Success = 'success',
  Started = 'started',
}

type Error = PositionError | string;

type Action = { type: Type.Error; error: Error } | { type: Type.Success; position: Position } | { type: Type.Started };

type State = {
  status: Status;
  position: Position | null;
  error: Error | null;
};

const geoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case Type.Error:
      return {
        ...state,
        status: Status.Rejected,
        error: action.error,
      };
    case Type.Success:
      return {
        ...state,
        status: Status.Resolved,
        position: action.position,
      };
    case Type.Started:
      return {
        ...state,
        status: Status.Pending,
      };
    default:
      throw new Error(unableToReachLocation);
  }
};

const initialState: State = {
  status: Status.Idle,
  position: null,
  error: null,
};

const useGeoPosition = () => {
  const [state, dispatch] = useReducer(geoReducer, initialState);
  useEffect(() => {
    if (!navigator.geolocation) {
      dispatch({
        type: Type.Error,
        error: geoIsNotSupported,
      });
      return;
    }
    dispatch({ type: Type.Started });
    const geoWatch = navigator.geolocation.watchPosition(
      (position) => dispatch({ type: Type.Success, position }),
      (error) => dispatch({ type: Type.Error, error }),
    );

    return () => navigator.geolocation.clearWatch(geoWatch);
  }, []);

  const { status } = state;
  return {
    isLoading: status === Status.Idle || status === Status.Pending,
    isResolved: status === Status.Resolved,
    isRejected: status === Status.Rejected,
    ...state,
  };
};

export default useGeoPosition;
