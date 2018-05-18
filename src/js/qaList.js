import React from 'react';

export default ({ items, sortQuestions, removeQuestions, handleDisplayAnswer, tooltip }) => (
    <div className="list"> 
        <h3 tooltip={tooltip} tooltip-position="bottom">Created questions</h3>
        {items && items.map(item =>
            <div className="questionBorder" key={item.id}
                onClick={e => handleDisplayAnswer(item.id)}>
                <p>{item.question}</p>
                <p>{item.displayAnswer && item.answer}</p>
            </div>
        )}
        {items.length === 0 && <div className="emptyList">No question yet :-(</div>}
        <button className="btn sort margin-top"
            onClick={sortQuestions}>Sort Questions</button>
        <button className="btn remove margin-top"
            onClick={removeQuestions}>Remove Questions</button>
    </div>
);