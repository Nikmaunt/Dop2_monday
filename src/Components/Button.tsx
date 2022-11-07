import React from 'react';

type ButtonPropsType ={
    name:string
    callback: () => void
}

export const Button = (props:ButtonPropsType) => {
    const {name, callback} = props
    const onClickButtonHandler = () =>{
        callback()
    }
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

