import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';
import NoteItemBody from './NoteItemBody';

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
            {archived ? (
                <ArchiveButton
                    id={id}
                    onArchive={onArchive}
                    isArchive={archived}
                ></ArchiveButton>
            ) : (
                <ArchiveButton
                    id={id}
                    onArchive={onArchive}
                    isArchive={archived}
                />
            )}
            <DeleteButton id={id} onDelete={onDelete} />
        </article>
    );
}
