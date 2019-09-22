import React from 'react';

import './Msg.css';

export interface Props {
}

interface State {
}


class Msg extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'msg'}>
        我是消息
      </div>
    );
  }

  componentDidMount(): void {
  }
}

export default Msg
