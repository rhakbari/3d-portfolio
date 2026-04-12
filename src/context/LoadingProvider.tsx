import { createContext, PropsWithChildren, useContext, useState } from "react";

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  progress: number;
  setProgress: (value: number) => void;
  modelReady: boolean;
  setModelReady: (value: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
  progress: 0,
  setProgress: () => {},
  modelReady: false,
  setModelReady: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [modelReady, setModelReady] = useState(false);

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        progress,
        setProgress,
        modelReady,
        setModelReady,
      }}
    >
      <main className="main-body">{children}</main>
    </LoadingContext.Provider>
  );
};
