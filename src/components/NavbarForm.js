import React, { Component } from 'react';
import { Icon } from '@iconify/react';
export default class NavbarForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };

        this.onSearchInputChangeHandler =
            this.onSearchInputChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onSearchInputChangeHandler(event) {
        this.setState({ query: event.target.value });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        this.props.filterNote(this.state.query);

        this.setState({ query: '' });
    }

    render() {
        return (
            <form className="navbar--form" onSubmit={this.onSubmitHandler}>
                <input
                    type="search"
                    value={this.state.query}
                    placeholder="Search notes..."
                    onChange={this.onSearchInputChangeHandler}
                />
                <button>
                    <Icon icon="fa-solid:search" width="20" />
                </button>
            </form>
        );
    }
}
