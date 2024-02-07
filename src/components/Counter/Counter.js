import React from 'react';
import useCounter from '../../hooks/useCounter'
import { ThemeContext } from "../../App";
import { LoginContext } from "../../App";

const Counter = () => {

    const login = React.useContext(LoginContext);
    const theme = React.useContext(ThemeContext);

    const [counter, handleIncrement, handleDecrement] = useCounter(25);
    const [secondCounter, secondHandleIncrement, secongHandleDecrement] = useCounter(70);

    return (
    <div style={{ background: theme.background, color: theme.fontColor }}>
        {login.currentUsername ? (
        <>
            <p>Valor actual: {counter}</p>
            <button onClick={handleDecrement}>Decrementar</button>
            <button onClick={handleIncrement}>Aumentar</button>

            <h2>Contador 2:</h2>
            <p>Valor actual: {secondCounter}</p>
            <button onClick={secongHandleDecrement}>Decrementar</button>
            <button onClick={secondHandleIncrement}>Aumentar</button>
        </>
        ) :(
            <p>No tienes permiso para ver este contenido</p>  
        )}
    </div>
    
    );        
}

export default Counter;