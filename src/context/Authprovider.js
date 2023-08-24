import React, { createContext } from 'react';
import Usefirebase from '../hooks/Usefirebase';

export const Authcontext = createContext()

const Authprovider = ({children}) => {
    const allContext = Usefirebase()
    return (
        <div>
            <Authcontext.Provider value={allContext}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;