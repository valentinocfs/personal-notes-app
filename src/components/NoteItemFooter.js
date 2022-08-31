import React from 'react';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

export default function NoteItemFooter({ archived, id, onArchive, onDelete }) {
    return (
        <div className="note-item__footer">
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
        </div>
    );
}
