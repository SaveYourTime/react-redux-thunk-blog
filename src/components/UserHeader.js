import React from 'react';
import { connect } from 'react-redux';

class PostList extends React.Component {
  render() {
    const { user } = this.props;
    if (!user) return null;
    return <span>{user.name}</span>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const { users } = state;
  const user = users.find((user) => user.id === ownProps.userId);
  return { user };
};

export default connect(mapStateToProps)(PostList);
