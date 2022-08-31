import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NoteItemBody';
import NoteItemFooter from './NoteItemFooter';

export default function NoteItem({
    id,
    title,
    body,
    createdAt,
    archived,
    onDelete,
    onArchive,
}) {
    return (
        <article className="note-item" id={`note-${id}`}>
            <NoteItemBody title={title} body={body} createdAt={createdAt} />
            <NoteItemFooter
                archived={archived}
                id={id}
                onArchive={onArchive}
                onDelete={onDelete}
            />
        </article>
    );
}
