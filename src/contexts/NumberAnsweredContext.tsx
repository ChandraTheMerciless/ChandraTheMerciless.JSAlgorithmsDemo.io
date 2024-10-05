import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';

// Define the initial number
const initialNumber = 0;

// Define action types
type Action = { type: 'increment' } | { type: 'decrement' }; // Add other action types if necessary

// Define the context types
type NumberAnsweredContextType = number;
type NumberAnsweredDispatchContextType = Dispatch<Action>;

// Create the context with default values
export const NumberAnsweredContext =
  createContext<NumberAnsweredContextType | null>(null);
export const NumberAnsweredDispatchContext =
  createContext<NumberAnsweredDispatchContextType | null>(null);

// Define the provider component's props
interface NumberAnsweredProviderProps {
  children: ReactNode;
}

export function NumberAnsweredProvider({
  children,
}: NumberAnsweredProviderProps) {
  const [numberAnswered, dispatch] = useReducer(
    numberAnsweredReducer,
    initialNumber
  );

  return (
    <NumberAnsweredContext.Provider value={numberAnswered}>
      <NumberAnsweredDispatchContext.Provider value={dispatch}>
        {children}
      </NumberAnsweredDispatchContext.Provider>
    </NumberAnsweredContext.Provider>
  );
}

// Define the reducer function
function numberAnsweredReducer(numberAnswered: number, action: Action): number {
  switch (action.type) {
    case 'increment':
      return numberAnswered + 1;
    case 'decrement':
      return numberAnswered - 1; // Add logic for decrement if needed
    default:
      return numberAnswered; // Return the current state if action type is not recognized
  }
}
