import * as React from 'react';

interface MainState extends React.ClassAttributes<any> {
    dummy?: any;
}

export class Main extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);


    }

    render() {

        return (
            <h1>Hello World!</h1>
        );
    }

}

