import React from 'react';

import './Mall.css';

export interface Props {
}

interface State {
}


class Mall extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={'mall'}>
        我是商场
      </div>
    );
  }

  componentDidMount(): void {
  }
}

export default Mall
