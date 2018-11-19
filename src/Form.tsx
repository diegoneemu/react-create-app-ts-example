import * as React from 'react';
import { Fragment } from 'react';

interface IProps {
  text: string;
  age?: number;
}

interface IState {
  email: string;
  name: string;
}

class Form extends React.Component<IProps, IState> {
  public state: IState = {
    email: '',
    name: ''
  };

  public handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    // const { name, value }: {name: keyof IState, value:string} = e.target;
    const { name, value }: any = e.target;

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  public render() {
    const { text } = this.props;
    const { name } = this.state;

    return (
      <Fragment>
        <div className="Hello">Hello {name}, welcome!</div>
        <div className="Form">{text}</div>
        <input name="name" value={name} onChange={this.handleChange} />
      </Fragment>
    );
  }
}

export default Form;
