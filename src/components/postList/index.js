import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions/posts'
import { Comment } from 'semantic-ui-react'

import { Switch, Route, Link, withRouter } from 'react-router-dom'


const Item = ({ excerpt, date, id }) => (
  <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>
          <span dangerouslySetInnerHTML={{ __html: excerpt && excerpt.rendered}}></span>
        </Comment.Text>
        <Link to={`/posts/${id}`}>View</Link>
      </Comment.Content>
  </Comment>
)


const List = ({ posts: { posts } }) => (
  <Comment.Group>
    {posts && posts.map(item => <Item key={item.id} {...item} />)}
  </Comment.Group>
)


const Detailed = ({ posts: { posts } , id }) => {
  let post = posts && posts.filter( item => item.id === parseInt(id, 10))[0]
  return (<Item {...post} />)
}

class PostList extends React.Component {
    componentDidMount() {
      this.props.fetch();
    }

    render() {
      const { posts } = this.props
      return (
        <Switch>
          <Route
            exact
            path="/"
            component={ () => (<List posts={posts} />) }
          />
          <Route
            path="/posts/:id"
            component={({ match }) => ( <Detailed posts={posts} id={match.params.id} /> )}
          />
        </Switch>)
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));
