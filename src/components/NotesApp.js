import React, { Component } from 'react';
import { getInitialData } from '../utils';
import Footer from './Footer';
import Navbar from './Navbar';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

export default class NotesApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onFilterHandler = this.onFilterHandler.bind(this);
    }

    onDeleteHandler(id) {
        const [target] = this.state.notes.filter((note) => note.id === id);
        const confirm = window.confirm(
            `Are you sure you want to delete '${target.title}'?`
        );

        if (!confirm) return;

        const notes = this.state.notes.filter((note) => note.id !== id);

        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const [target] = this.state.notes.filter((note) => {
            if (note.id === id) {
                note.archived = !note.archived;
                return note;
            }
        });

        this.setState({ ...this.state.notes, target });
    }

    onAddNoteHandler(note) {
        this.setState({ notes: [...this.state.notes, note] });
    }

    onFilterHandler(query) {
        if (query === '') return;

        const keyword = query.toLowerCase();

        const notes = this.state.notes.filter(
            (note) =>
                note.title.toLowerCase().includes(keyword) ||
                note.body.toLowerCase().includes(keyword)
        );

        this.setState({ notes });
    }

    render() {
        return (
            <>
                <Navbar filterNote={this.onFilterHandler} />
                <main className="note-app">
                    <NoteForm addNote={this.onAddNoteHandler} />

                    <NoteList
                        notes={this.state.notes.reverse()}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                        isArchived={false}
                    />
                    <NoteList
                        notes={this.state.notes}
                        onDelete={this.onDeleteHandler}
                        onArchive={this.onArchiveHandler}
                        isArchived={true}
                    />
                </main>
                <Footer />
            </>
        );
    }
}
