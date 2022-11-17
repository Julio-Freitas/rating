import { createContext, useState } from "react";

type Rate = {
  id: number;
  value: number;
};
interface IContext {
  rate: Rate | null;
  finished: boolean;
  onSetRate: (rate: Rate) => void;
  onReset: (value?: boolean) => void;
  onSetFinised:(value?: boolean ) => void;
}

interface ProviderRate {
  children: React.ReactNode;
}
export const ContextRate = createContext<IContext>({} as IContext);

export const ProviderRate = ({ children }: ProviderRate) => {
  const [rate, setRate] = useState<Rate | null>(null);
  const [finished, setFinished] = useState(false)

  function onSetRate(item: Rate) {
    setRate(item);
  }

  function onReset() {
    setRate(null)
    setFinished(false)
  }

  function onSetFinised(value: boolean = false) {
    setFinished(value)
  }

  return (
    <ContextRate.Provider value={{ rate, onSetRate, finished, onReset, onSetFinised }}>
      {children}
    </ContextRate.Provider>
  );
};
