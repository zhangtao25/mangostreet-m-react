import React from 'react';
import './index.css';

export interface Props {
}
interface State {
}


class Mine extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          我是我
        </div>
    );
  }
  componentDidMount(): void {
  }
}

export default Mine
