import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import { Card, Icon, Image } from 'semantic-ui-react'

import * as actions from 'actions/users'

const WordPressUser =  ({ user }) => {
  const imgSrc = user && user.avatar_urls && user.avatar_urls['96']
  return (
  <Card>
    <Image style={{height: '240px'}} src={imgSrc}/>
    <Card.Content>
      <Card.Header>
        {user && user.name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Joined in 2015
        </span>
      </Card.Meta>
      <Card.Description>
        {user && user.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)
}


class UserView extends React.Component {
    componentDidMount() {
      console.log('componentDidMount')
      this.props.getUser(1);
    }

    render(){
      const { user } = this.props;

      return (
        <WordPressUser {...user} />
      )
    }
}

function mapStateToProps(state){
    return {
      user: state,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserView);
