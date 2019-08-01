import React from 'react';
import './index.css';

export interface Props {
}
interface State {
}


class Mall extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          我是商场
        </div>
    );
  }
  componentDidMount(): void {
  }
}

export default Mall
