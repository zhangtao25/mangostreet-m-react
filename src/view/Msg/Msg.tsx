import React from 'react';
// import './index.css';

export interface Props {
}
interface State {
}


class Msg extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
        <div>
          我是消息
        </div>
    );
  }
  componentDidMount(): void {
  }
}

export default Msg
