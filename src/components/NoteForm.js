import React, { Component } from 'react';

export default class NoteForm extends Component {
    constructor(props) {
        super(props);

        this.charLeft = React.createRef();

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
                    charLength: this.state.title.length,
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

        changeColorByCharLenght(this.state.charLength);
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
                <div className="notes-form__header">
                    <h3>New Notes</h3>
                    <p ref={this.charLeft} className="notes-form__charleft">
                        {this.state.charLength}/{this.state.maxLength}
                    </p>
                </div>
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

function changeColorByCharLenght(charLength) {
    const text = document.querySelector('.notes-form__charleft');

    text.classList.remove('primary', 'green', 'red', 'yellow');

    if (charLength > 0 && charLength < 25) {
        text.classList.add('green');
    } else if (charLength >= 25 && charLength < 40) {
        text.classList.add('yellow');
    } else if (charLength >= 40 && charLength < 50) {
        text.classList.add('red');
    } else {
        text.classList.add('primary');
    }
}
