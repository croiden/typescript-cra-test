import React from 'react';
import './App.css';

import Heading from './Heading';
import HeadingWithContent from './HeadingWithContent';
import Container from './Container';
import TextWithNumber from './TextWithNumber';
import List from './List';

function App() {
    return (
        <div>
            <Heading title={'Hello there..!'} />
            <HeadingWithContent>
                <strong>I am Learning...</strong>
            </HeadingWithContent>
            <Container>
                <strong>Hurray...</strong>
            </Container>
            <TextWithNumber>
                {(num) => `Todays number is ${num}`}
            </TextWithNumber>
            <List
                items={['Jack', 'Sadie', 'Oso']}
                render={(item: string) => <div>{item}</div>}
            ></List>
        </div>
    );
}

export default App;
