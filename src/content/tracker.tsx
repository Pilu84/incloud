import * as React from 'react';


interface TrackerProps extends React.ClassAttributes<any> {
    getTrackerNumer(trackertime: string): void;
}
interface TrackerState extends React.ClassAttributes<any> {
    running: boolean;
    trackerNum: number;
    trackerString: string;
}

export class Tracker extends React.Component<TrackerProps, TrackerState> {
    constructor(props: any) {
        super(props);

        this.state = {
            running: false,
            trackerNum: 0,
            trackerString: ''
        };


        this.tracker = this.tracker.bind(this);
        this.getTrackerString = this.getTrackerString.bind(this);

    }

    componentDidMount() {
        this.getTrackerString(this.state.trackerNum);
    }

    render() {

        const { running, trackerNum, trackerString } = this.state;

        return (
            <div>
                <h2>Tracker</h2>

                <div>
                    <p>{trackerString}</p>
                    {!running &&
                        <>
                            <button
                                onClick={() => this.setState({ running: true })}
                            >
                                Start
                            </button>
                            {trackerNum !== 0 &&
                                <>
                                    <button
                                        onClick={() => this.setState({ trackerNum: 0 })}>
                                        Clear
                            </button>

                                    <button
                                        onClick={() => this.props.getTrackerNumer(trackerString)}
                                    >
                                        Get the tracker as time
                                    </button>
                                </>
                            }
                        </>
                    }
                    {running &&
                        <>
                            {this.tracker(trackerNum)}
                            <button
                                onClick={() => this.setState({ running: false })}
                            >Stop
                            </button>
                        </>
                    }
                </div>

            </div>
        );
    }

    tracker(num: number) {

        setTimeout(() => {
            num++;
            this.getTrackerString(num);
            this.setState({ trackerNum: num });
        }, 1000);

    }

    getTrackerString(num: number) {

        let formatNum = num;
        let hours = 0;
        let minutes = 0;
        const seconds = num % 60;
        if (formatNum > 3600) {
            hours = Math.floor(formatNum / 3600);
            formatNum = formatNum - (hours * 3600);
        }
        if (formatNum > 60) {
            minutes = Math.floor(formatNum / 60);
            if (minutes === 60) {
                minutes = 0;
            }
        }


        const hoursString = hours.toString().length === 2 ? hours.toString() : '0' + hours.toString();
        const minutesString = minutes.toString().length === 2 ? minutes.toString() : '0' + minutes.toString();
        const secondString = seconds.toString().length === 2 ? seconds.toString() : '0' + seconds.toString();

        const trackerString = hoursString + ':' + minutesString + ':' + secondString;

        this.setState({ trackerString });


    }

}

