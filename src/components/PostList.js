import React from 'react';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';
import { avatars } from '../constant';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    const { posts } = this.props;
    return posts.map((post) => {
      const { id, userId, title, body } = post;
      const avatar = avatars[userId % avatars.length];
      return (
        <div className="ui item" key={id}>
          <div className="ui tiny image">
            <img src={`https://semantic-ui.com/images/avatar/large/${avatar}.jpg`} alt="" />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta">
              <UserHeader userId={userId} />
            </div>
            <div className="description">
              <p>{body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided items">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  const { posts } = state;
  return { posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
