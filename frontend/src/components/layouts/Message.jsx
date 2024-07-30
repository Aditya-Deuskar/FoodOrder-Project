import React from 'react'

export default function Message({ variant, Children }) {
    return <div className={`alert alert-${variant}`}>
        {Children}
    </div>
}
