import React from 'react';

export default (props) => (
    <div>
        <h3>Create a new question</h3>
        <form name="saveQuestion" onSubmit={props.saveQuestion}>
            <div>
                <label htmlFor="question">Question</label>
                <input id="question"
                    value={props.question}
                    required
                    onChange={props.onChangeQuestion}
                    placeholder="Type a question..." /> 
            </div>
            <div>
                <label htmlFor="answer">Answer</label>
                <textarea id="answer"
                        value={props.answer}
                        required
                        onChange={props.onChangeAnswer}
                        placeholder="Type an answer...">
                </textarea> 
            </div>
            <div>
                <button type="submit">Create question</button>
            </div>
        </form>
    </div>
);