import React from 'react';
import './index.css';

export interface Props {
}
interface State {
}


class Home extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div className={'home'}>
          我是主页
        </div>
    );
  }
  componentDidMount(): void {
  }
}

export default Home
