import { Component } from "react";

class ShowData extends Component {
  constructor(props) {
    super();
    this.state = {
      alluser: props.userList,
    };
    console.log(this.state.alluser);
  }

  render() {
    return (
      <>
        <table border="2" cellPadding={5} cellSpacing={15}>
          <thead>
            <tr>
              <th scope="col">GRID</th>
              <th scope="col">NAME</th>
              <th scope="col">E-MAIL</th>
              <th scope="col">PASSWORD</th>
              <th scope="col">COURSE</th>
              <th scope="col">CITY</th>
            </tr>
          </thead>
          <tbody>
            {this.state.alluser.map((val) => {
              return (
                <tr>
                  <td>{val.grid}</td>
                  <td>{val.name}</td>
                  <td>{val.email}</td>
                  <td>{val.password}</td>
                  <td>{val.course},</td>
                  <td>{val.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default ShowData;
