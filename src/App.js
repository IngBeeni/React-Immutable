import React, { Component } from "react";
import UserList from "./UserList";
import { /*Map,*/ List, Record } from "immutable";

const User = Record({
  id: null,
  username: null
});

const Data = Record({
  input: "",
  users: List()
});

class App extends Component {
  id = 3;

  state = {
    // input: "",
    // users: [
    //   {
    //     id: 1,
    //     username: "ingbeeni"
    //   },
    //   {
    //     id: 2,
    //     username: "mjkim"
    //   }
    // ]

    // data: Map({
    //   input: "",
    //   users: List([
    //     Map({
    //       id: 1,
    //       username: "velopert"
    //     }),
    //     Map({
    //       id: 2,
    //       username: "mjkim"
    //     })
    //   ])
    // })

    data: Data({
      users: List([
        User({
          id: 1,
          username: "velopert"
        }),
        User({
          id: 2,
          username: "mjkim"
        })
      ])
    })
  };

  onChange = e => {
    const { value } = e.target;
    const { data } = this.state;
    this.setState({
      data: data.set("input", value)
    });
  };

  onButtonClick = () => {
    const { data } = this.state;

    this.setState({
      data: data.set("input", "").update("users", users =>
        // input 값을 공백으로 만든 후 users에 새 Map으로 업데이트
        users.push(
          // Map({
          //   id: this.id++,
          //   username: data.get("input")
          // })
          new User({
            id: this.id++,
            username: data.get("input")
          })
        )
      )
    });
  };

  render() {
    const { onChange, onButtonClick } = this;
    // const { data } = this.state;
    // const { input, users } = this.state;
    // const input = data.get("input");
    // const users = data.get("users");
    const {
      data: { input, users }
    } = this.state;

    return (
      <div>
        <div>
          <input onChange={onChange} value={input} />
          <button onClick={onButtonClick}>추가</button>
        </div>
        <h1>사용자 목록</h1>
        <div>
          <UserList users={users} />
        </div>
      </div>
    );
  }
}

export default App;
