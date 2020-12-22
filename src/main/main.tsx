import * as React from 'react';
import { Termine } from '../content/termine';
import { Tracker } from '../content/tracker';
import style from './main.less';


interface MainState extends React.ClassAttributes<any> {
    timeValue: string;
}

export class Main extends React.Component<{}, MainState> {
    constructor(props: any) {
        super(props);

        this.state = {
            timeValue: ''
        }
    }

    render() {

        return (
            <div className={style.main}>
                <div>
                    <Tracker 
                        getTrackerNumer={(timeValue: string) => this.setState({timeValue})}
                    />
                </div>

                <div>
                    <Termine 
                        timeValue={this.state.timeValue}
                    />
                </div>
            </div>
        );
    }

}

