import React from 'react';

export default ({ totalNumber }) => (
    <div className="headerText">
        <p>Here you can find {totalNumber > 0 ? totalNumber : 'no'} questions.</p>
        <p>Feel free to create your own questions!</p>
    </div>
);