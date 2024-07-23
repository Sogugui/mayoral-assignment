import React, { createContext, useState, ReactNode } from 'react';

type GridColsType = {
  mobile: string;
  lg: string;
};

type AppContextType = {
  gridCols: GridColsType;
  transformGrid: (cols: 'increment' | 'decrement') => void;
};

export const AppContext = createContext<AppContextType | undefined>(undefined);

type ProviderProps = {
  children: ReactNode;
};

const Provider = ({ children }: ProviderProps) => {
  const [gridCols, setGridCols] = useState<GridColsType>({
    mobile: 'grid-cols-2',
    lg: 'lg:grid-cols-4',
  });

  function transformGrid(action: 'increment' | 'decrement') {
    if (action === 'increment') {
      setGridCols(() => ({
        mobile: 'grid-cols-3',
        lg: 'lg:grid-cols-4',
      }));
    } else {
      setGridCols(() => ({
        mobile: 'grid-cols-2',
        lg: 'lg:grid-cols-3',
      }));
    }
  }
  const data = {
    gridCols,
    transformGrid,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default Provider;
