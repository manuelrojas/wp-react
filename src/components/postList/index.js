import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions/posts'
import { Comment } from 'semantic-ui-react'

const Item = ({ excerpt, date,  }) => (
  <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>
          <span dangerouslySetInnerHTML={{ __html: excerpt && excerpt.rendered}}></span>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Author Profile</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
  </Comment>
)


const List = ({ posts: { posts } }) => (
  <Comment.Group>
    {posts && posts.map(item => <Item key={item.id} {...item} />)}
  </Comment.Group>
)

class PostList extends React.Component {
    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { posts } = this.props

      return (
        <List posts={posts} />
      )
    }
}

function mapStateToProps(state){
    return {
      posts: state.posts,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
