import React from "react";
import { connect } from "react-redux";
import { createPost, showAlert } from "../redux/actions";
import { Alert } from "./Alert";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  inputChangeHandler = (e) => {
    e.persist();

    this.setState((prev) => {
      console.log("[INPUT CAHNGE] prev", prev);
      return {
        ...prev,
        ...{ [e.target.name]: e.target.value },
      };
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { title } = this.state;

    if (!title.trim()) {
      const message = "Post message cannot be empty";
      this.props.showAlert(message);
      return;
    }

    const newPost = {
      title,
      id: Date.now().toString(),
    };

    this.props.createPost(newPost);

    this.setState({ title: "" });
  };

  render() {
    const { alertMessage } = this.props;
    const alertToRender = alertMessage && <Alert alertText={alertMessage} />;

    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="title">Type your post here:</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={this.inputChangeHandler}
            value={this.state.title}
          />
        </div>
        <button className="btn btn-success mt-2 mb-2" type="submit">
          Submit
        </button>
        {alertToRender}
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alertMessage: state.app.alert,
  };
};

const mapDispatchToProps = {
  createPost,
  showAlert,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
