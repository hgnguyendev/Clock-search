import { createContext, useState, ReactNode } from "react";

interface ContextProps {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}

// Cung cấp giá trị mặc định hợp lý cho context
export const ContextValue = createContext<ContextProps>({
  text: "", // giá trị mặc định cho text
  setText: () => {}, // hàm setText rỗng mặc định (tránh undefined)
});

interface ContextProviderProps {
  children: ReactNode;
}

// Provider để cung cấp context
export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [text, setText] = useState<string>("");

  return (
    <ContextValue.Provider value={{ text, setText }}>
      {children}
    </ContextValue.Provider>
  );
};
