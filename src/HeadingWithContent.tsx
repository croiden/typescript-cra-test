import React, { ReactElement, ReactNode } from 'react';

function HeadingWithContent({
    children
}: {
    children: ReactNode;
}): ReactElement {
    return <h1>{children}</h1>;
}

export default HeadingWithContent;
