import React from 'react';

export default function DeleteButton({ id, onDelete }) {
    return (
        <button className="btn__delete btn--red" onClick={() => onDelete(id)}>
            Delete
        </button>
    );
}
