import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

PostFillterFrom.propTypes = {
    onSubmit:PropTypes.func,
};
PostFillterFrom.defaultProps = {
    onSubmit:null,
};


function PostFillterFrom(props) {
    const {onSubmit} = props;
    const [searchTerm, setSeachTerm]= useState('');
    const typingTimeoutRef = useRef(null);

    function handleSearchTermChange(e)
    {
        const val = e.target.value;
        setSeachTerm(val);
        if(!onSubmit) return;

        if(typingTimeoutRef.current)
        {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {searchTerm:val};
            onSubmit(formValues);
        }, 300);

    }

    return (
      <form>
          <input value={searchTerm} onChange={handleSearchTermChange}/>
        </form>
    );
}

export default PostFillterFrom;