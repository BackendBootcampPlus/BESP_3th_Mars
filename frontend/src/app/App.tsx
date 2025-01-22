import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
    fetch(import.meta.env.VITE_CORE_FRONT_BASE_URL + 'api/v1/test')
        .then((res) => res.json())
        .then((data) => console.log(data));

    return (
        <>
            <div>Hello World!!</div>
        </>
    );
}

export default App;
