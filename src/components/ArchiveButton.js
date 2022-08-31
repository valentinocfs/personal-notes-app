import React from 'react';
import { Icon } from '@iconify/react';

export default function ArchiveButton({ id, isArchive, onArchive }) {
    return (
        <button
            className="btn__archive btn--green"
            onClick={() => onArchive(id)}
        >
            {isArchive ? (
                <Icon icon="ic:baseline-unarchive" width="20" />
            ) : (
                <Icon icon="bxs:archive-in" width="20" />
            )}
        </button>
    );
}
