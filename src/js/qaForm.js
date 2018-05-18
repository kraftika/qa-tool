import React from 'react';

export default (props) => (
    <div className="questionForm">
        <h3 tooltip={props.tooltip} tooltip-position="bottom">Create a new question</h3>
        <form name="saveQuestion" onSubmit={props.saveQuestion}>
            <div className="questionInputs">
                <input id="question"
                    type="text"
                    value={props.question}
                    required
                    onChange={props.onChangeQuestion}
                    placeholder="Question" /> 
                <textarea id="answer"
                        value={props.answer}    
                        required
                        onChange={props.onChangeAnswer}
                        placeholder="Answer">
                </textarea> 
            </div>
            <div>
                <button type="submit" className="btn create">Create question</button>
            </div>
        </form>
    </div>
);