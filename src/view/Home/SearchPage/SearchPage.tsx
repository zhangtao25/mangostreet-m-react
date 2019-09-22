import React from 'react'
import {NavBar,Icon} from 'antd-mobile'
import './SearchPage.css'


export interface Props {

}

export interface State {

}
class SearchPage extends React.Component<Props,State>{
  constructor(props:Props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className={'search-page'}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}
        >NavBar</NavBar>
      </div>
    );
  }
}

export default SearchPage
