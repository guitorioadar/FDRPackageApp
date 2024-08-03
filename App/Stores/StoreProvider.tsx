import React, { createContext, ReactNode, useContext } from 'react';
import rootStore from './rootStore';

const MobXProviderContext = createContext(rootStore);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    return (
        <MobXProviderContext.Provider value={rootStore}>
            {children}
        </MobXProviderContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(MobXProviderContext);
    if (!context) {
        throw new Error('useStore must be used within a StoreProvider');
    }
    return context;
};