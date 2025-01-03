import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import Authprovider from './context/Authprovider';


createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Authprovider>
            <App></App>
        </Authprovider>
    </React.StrictMode>
)