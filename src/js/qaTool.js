import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';
import FillQuestionAnswer from './fillQuestionAnswer';
import ListQuestionAnswer from './listQuestionAnswer';

const sortList = items => items.sort((a, b) => (
    a.question.toUpperCase() < b.question.toUpperCase() && -1 ||
    a.question.toUpperCase() > b.question.toUpperCase() && 1 || 0
));

const nextId = items => items.reduce(((max, cur) => max < cur.id ? cur.id : max), 0) + 1;

export default class QaTool extends Component {
    state = {
        question: '',
        answer: '',
        qaList: [{
            id: 1,
            question: 'How to add a question?',
            answer: 'Easy: just fill the form below and submit it!',
            displayAnswer: false
        }]
    };

    saveQuestion = e => {
        const { question, answer } = this.state;
        this.setState(state => {
            return { 
                qaList: state.qaList.concat({
                    id: nextId(state.qaList),
                    question,
                    answer,
                    displayAnswer: false
                }) 
             };
        });
        this.setState({ question: '',
                        answer: ''});
        e.preventDefault();
    }

    handleQuestionChange = e => {
        const question = e.target.value;
        this.setState({ question });
    }

    handleAnswerChange = e => {
        const answer = e.target.value;
        this.setState({ answer });
    }

    sortQAList = () => {
        const list = this.state.qaList;
        this.setState({
            qaList: sortList(list)
        });
    }

    clearQAList = () => {
        this.setState({qaList: []})
    }

    displayAnswer = (id) => {
        const list = this.state.qaList.map(item => {
            if (item.id !== id) {
                return item;
            } 

            return {
                ...item,
                displayAnswer: !item.displayAnswer
            };
        });

        this.setState({
            qaList: list
        })
    }

    render() {
        const { question, answer } = this.state;
        return (
            <div>
                <ListQuestionAnswer items={this.state.qaList} 
                    sortQuestions={this.sortQAList}
                    removeQuestions={this.clearQAList}
                    handleDisplayAnswer={this.displayAnswer}/> 
                <FillQuestionAnswer 
                    question={question}
                    answer={answer}
                    onChangeQuestion={this.handleQuestionChange}
                    onChangeAnswer={this.handleAnswerChange}
                    saveQuestion={this.saveQuestion} />
            </div>
        );    
    }
}

render(<QaTool />, document.getElementById('app'));