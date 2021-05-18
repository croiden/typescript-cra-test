import React, { ReactElement, ReactNode } from 'react';

// defaultProps
const defaultContainerProps = {
    heading: <strong>TypeScript</strong>
};
type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

function Container({ heading, children }: ContainerProps): ReactElement {
    return (
        <div>
            <h1>{heading}</h1>
            {children}
        </div>
    );
}

Container.defaultProps = defaultContainerProps;

export default Container;
