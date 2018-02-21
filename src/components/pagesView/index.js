import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from 'actions/pages'

import { Switch, Route, Link, withRouter } from 'react-router-dom'


const Item = ({ excerpt, id, title }) => (
  <div className="Pages__List--Container">
        <Link to={`/pages/${id}`}><h3 dangerouslySetInnerHTML={{ __html: title && title.rendered}}></h3></Link>
  </div>
)


const List = ({ pages: { pages } }) => (
  <div className="Pages__List--Group-Container">
    {pages && pages.map(item => <Item key={item.id} {...item} />)}
  </div>
)


const Detailed = ({ pages: { pages } , id }) => {
  let page = pages && pages.find( item => item.id === parseInt(id, 10))
  return (
    <div className="PageView__Container">
    <h3 dangerouslySetInnerHTML={{ __html: page && page.title.rendered}}></h3>
    <div dangerouslySetInnerHTML={{ __html: page && page.content.rendered}}></div>
    </div>
  )
}

class PagesView extends React.Component {
    componentDidMount() {
      this.props.fetchPages();
    }

    render() {
      const { pages } = this.props
      return (
        console.log(this.pages),
        <Switch>
          <Route
            exact
            path="/"
            component={ () => (<List pages={pages} />) }
          />
          <Route
            path="/pages/:id"
            component={({ match }) => ( <Detailed pages={pages} id={match.params.id} /> )}
          />
        </Switch>)
    }
}


function mapStateToProps(state){
    return {
      pages: state.pages,
    };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PagesView));
