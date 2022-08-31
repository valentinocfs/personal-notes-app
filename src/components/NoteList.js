import React from 'react';
import NoteItem from './NoteItem';

export default function NoteList({ notes, isArchived, onDelete, onArchive }) {
    const filterArchiveNotes = notes.filter(
        (note) => note.archived === isArchived
    );

    const notesCategory = isArchived ? 'archived' : 'active';

    return (
        <section className={`notes-${notesCategory}`}>
            <h2>{isArchived ? 'Notes Archived' : 'Notes Active'}</h2>
            <div className="note-list">
                {filterArchiveNotes.length ? (
                    filterArchiveNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            onDelete={onDelete}
                            onArchive={onArchive}
                            {...note}
                        />
                    ))
                ) : (
                    <article>
                        <p>Can't find your {notesCategory} notes.</p>
                    </article>
                )}
            </div>
        </section>
    );
}
