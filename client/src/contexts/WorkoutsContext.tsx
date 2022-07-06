import { createContext, PropsWithChildren, useReducer } from "react";
import { IWorkout } from "../components/WorkoutDetails";

enum Method {
  CREATE = "CREATE",
  SET = "SET",
}

// TODO: Add types to context and reducer

export const WorkoutsContext = createContext<{
  workouts: IWorkout[];
  dispatch: React.Dispatch<
    | { type: Method.CREATE; payload: IWorkout }
    | { type: Method.SET; payload: IWorkout[] }
  >;
} | null>(null);

const reducer = (
  state: typeof initialState,
  action:
    | { type: Method.CREATE; payload: IWorkout }
    | { type: Method.SET; payload: IWorkout[] }
): typeof initialState => {
  switch (action.type) {
    case Method.CREATE:
      return { workouts: [action.payload, ...state.workouts] };
    case Method.SET:
      return { workouts: action.payload };
    default:
      return state;
  }
};

const initialState: { workouts: IWorkout[] } = {
  workouts: [],
};

const WorkoutsProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer<typeof reducer, typeof initialState>(
    reducer,
    initialState,
    // ? What is initializer in useReducer hook?
    (arg) => arg
  );

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export { WorkoutsProvider };
