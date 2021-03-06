import * as React from 'react';
import style from './style.less';
import { Services } from '../services/services';


interface TermineProps extends React.ClassAttributes<any> {
    timeValue: string;
}

interface TermineState extends React.ClassAttributes<any> {
    timeString: string;
    desc: string;
    error: boolean;
    message: string;
}

export class Termine extends React.Component<TermineProps, TermineState> {
    constructor(props: any) {
        super(props);

        this.state = {
            timeString: this.props.timeValue ? this.props.timeValue : '',
            desc: '',
            error: false,
            message: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.timeValue !== this.props.timeValue) {
            this.setState({ timeString: this.props.timeValue });
        }
    }

    handleSubmit(e: any) {
        e.preventDefault();

        if (this.state.desc === '') {
            this.setState({error: true});
        } else {
            const services = new Services;
            const data = {
                time: this.state.timeString,
                descript: this.state.desc
            }
            services.setData('setdesc', data, (res: any) => {
                if (res.success) {
                    this.setState({message: 'Succes', desc: '', timeString: ''});
                }
            });
        }

    }


    render() {

        const { timeString, error, message } = this.state;

        return (
            <div className={style.timeWrapper}>
                <h2>Book a time</h2>

                {message &&
                    <div className={style.succes}>
                        <p>Succes</p>
                    </div>
                }

                <form onSubmit={this.handleSubmit}>
                    {error &&
                        <p className={style.error}>Please write a description</p>
                    }
                    <label htmlFor={'appt-time'}>Choose a time: </label>
                    <input id='appt-time'
                        type='time'
                        name='appt-time'
                        value={timeString}
                        step={2}
                        onChange={(e: any) => this.setState({ timeString: e.target.value })}
                    />

                    <label htmlFor={'appt-description'} className={style.description}>
                        Give a description: <span className={style.required}>*</span>
                    </label>
                    <textarea id='appt-description'
                        rows={10}
                        cols={50}
                        value={this.state.desc}
                        onChange={(e: any) => this.setState({desc: e.target.value})}
                    >

                    </textarea>

                    <input type='submit' value='Save' />

                </form>
            </div>
        );
    }

}

