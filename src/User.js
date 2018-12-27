import React, { Component } from "react";

class User extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.user !== nextProps.user;
  }
  render() {
    // const {
    //   user: { username }
    // } = this.props;
    // const { username } = this.props.user.toJS();
    // const username = this.props.user.get('username')을 해도 좋다.
    // 하지만 위와 같은 형식으로 toJS() 를 한 결과를 비 구조화 할당 하는 방법도 있다.
    const { username } = this.props.user;
    console.log("%가 랜더링 되고 있어요 !!!", username);

    return <div>{username}</div>;
  }
}

export default User;
