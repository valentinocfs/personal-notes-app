import React from 'react';
import { Icon } from '@iconify/react';

export default function DeleteButton({ id, onDelete }) {
    return (
        <button className="btn__delete btn--red" onClick={() => onDelete(id)}>
            <Icon icon="dashicons:trash" width="20" />
        </button>
    );
}
