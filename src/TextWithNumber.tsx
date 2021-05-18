import React, { useState, ReactNode } from 'react';

// FUnctional props
function TextWithNumber({
    header,
    children
}: {
    header?: (num: number) => ReactNode;
    children: (num: number) => ReactNode;
}) {
    const [number, setNumber] = useState<number>(1);
    return (
        <div>
            <h1>{header?.(number)}</h1>
            <h1>{children(number)}</h1>
            <div>
                <button onClick={() => setNumber(number + 1)}>Add</button>
            </div>
        </div>
    );
}

export default TextWithNumber;
