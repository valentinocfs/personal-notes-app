import React from 'react';

export default function ArchiveButton({ id, isArchive, onArchive }) {
    return (
        <button
            className="btn__archive btn--green"
            onClick={() => onArchive(id)}
        >
            {isArchive ? <i>Unarchive</i> : <i>Archive</i>}
        </button>
    );
}
