import React, { Component } from 'react';

export default class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLength: 0,
            maxLength: 50,
        };

        this.onInputChangeHandler = this.onInputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onInputChangeHandler(event) {
        const maxLength = this.state.maxLength;
        const charLength = this.state.charLength;

        if (charLength < maxLength) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    [event.target.name]: event.target.value,
                    charLength: this.state.title.length
                        ? this.state.title.length + 1
                        : this.state.title.length + 1,
                };
            });
        } else {
            alert('Title is too long, please input your title again!');
            this.setState((prevState) => {
                return {
                    ...prevState,
                    title: '',
                    charLength: 0,
                };
            });
        }
    }

    onSubmitHandler(event) {
        event.preventDefault();

        if (this.state.title === '' || this.state.body === '') {
            alert('Title and notes is required!');
            return;
        }

        const { title, body } = this.state;
        const note = generateNoteObject(title, body);

        this.props.addNote(note);

        this.setState({
            title: '',
            body: '',
            charLength: 0,
            maxLength: 50,
        });
    }

    render() {
        return (
            <section className="notes-form">
                <p className="notes-form__charleft">
                    {this.state.charLength}/{this.state.maxLength}
                </p>
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        name="title"
                        value={this.state.title}
                        onChange={this.onInputChangeHandler}
                        type="text"
                        placeholder="Input title here..."
                    />
                    <textarea
                        name="body"
                        value={this.state.body}
                        onChange={this.onInputChangeHandler}
                        placeholder="Input notes here..."
                    ></textarea>
                    <button>Save</button>
                </form>
            </section>
        );
    }
}

function generateNoteObject(title, body) {
    return {
        id: generateId(),
        title,
        body,
        createdAt: generateDate(),
        archived: false,
    };
}

function generateId() {
    return +new Date();
}

function generateDate() {
    return new Date();
}
