import * as React from 'react';
import { Tracker } from '../content/tracker';
import style from './main.less';


interface MainState extends React.ClassAttributes<any> {
    dummy?: any;
}

export class Main extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);


    }

    render() {

        return (
            <div className={style.main}>
                <Tracker />
            </div>
        );
    }

}

