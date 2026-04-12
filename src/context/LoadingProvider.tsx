import { createContext, PropsWithChildren, useContext, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};
