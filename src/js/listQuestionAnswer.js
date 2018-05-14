import React from 'react';

export default ({ items, sortQuestions, removeQuestions, handleDisplayAnswer }) => (
    <div> 
        <h3>Created questions</h3>
        {items && items.map(item =>
            <div key={item.id}
                onClick={e => handleDisplayAnswer(item.id)}>
                <p>{item.question}</p>
                <p>{item.displayAnswer && item.answer}</p>
            </div>
        )}
        {items.length === 0 && <div>No question yet :-(</div>}
        <button onClick={sortQuestions}>Sort Questions</button>
        <button onClick={removeQuestions}>Remove Questions</button>
    </div>
);