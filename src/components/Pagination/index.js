import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination:PropTypes.object.isRequired,
    onPageChange:PropTypes.func,
};
Pagination.defaultProps={
   onPageChange:null,
}

function Pagination(props) {
    const {pagination,onPageChange} = props;
    const {_page, _limit, _totaRows} = pagination;
    const _totaPages = Math.ceil(_totaRows/_limit);
    
    function handlePageChange(newpage)
    {
        if(onPageChange)
        {
            onPageChange(newpage);
        }
    }
    return (
        <div>
            <button disabled={_page <=1 } onClick={()=>handlePageChange(_page-1)}>
             Prev
            </button>
            <button disabled={_page >=  _totaPages } onClick={()=>handlePageChange(_page+1)}>
            Next
           </button>
        </div>
    );
}

export default Pagination;