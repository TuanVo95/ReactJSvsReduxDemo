import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onToDoFormSubmit:PropTypes.func,
};
TodoForm.defaultProps={
    onToDoFormSubmit:null,
}

function TodoForm(props) {

    const {onToDoFormSubmit} = props;
    const [$value,setValue] = useState('');

    function handleValueChang(e)
    {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        if(onToDoFormSubmit)
        {
            console.log("call parent onToDoFormSubmit");
            const formValues = {
                title:$value,
            }
            onToDoFormSubmit(formValues);
            setValue('');
        }
       
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={$value} onChange={handleValueChang}></input>
        </form>
    );
}

export default TodoForm;