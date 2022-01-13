import React from "react";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

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
    if (!title.trim()) return;
    const newPost = {
      title,
      id: Date.now().toString(),
    };
    this.props.createPost(newPost);
    this.setState({ title: "" }, () => {
      console.log("onSubmit => title", this.state.title);
    });
  };

  render() {
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
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
