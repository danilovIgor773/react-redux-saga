import { FetchedPosts } from "./components/FetchedPosts";
import PostForm from "./components/PostForm";
import { Posts } from "./components/Posts";

const SyncPostsHeader = () => {
  return <h2>Sync Posts</h2>;
};

const ASyncPostsHeader = () => {
  return <h2>Async Posts</h2>;
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <SyncPostsHeader />
          <Posts />
        </div>
        <div className="col">
          <ASyncPostsHeader />
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
