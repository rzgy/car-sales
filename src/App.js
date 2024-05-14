import "./App.css";
import Myname from "./components/Myname";
import PostCard from "./components/PostCard";

function App() {
  return (
    <div
      style={{
        height: "100%",
        background: "grey",
      }}
    >
      <h3>This is my Instagram clone</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="Posty">
          <PostCard
            title={"Happy GUY"}
            description={"I got my Liecens TODAY!😆"}
            postImage={
              "https://www.shutterstock.com/image-photo/emotional-young-black-guy-casual-600nw-2114910470.jpg"
            }
            likeButton={
              "https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like-Button.png"
            }
            numberOfLikes={0}
          />
          <PostCard
            title={"Catching waves"}
            description={"Today was CRAZYYYYYYY!!"}
            postImage={
              "https://images.ctfassets.net/xhzuh2up4xai/4qxBb6Nw4NARuV8AUDXZn6/1c594f817ac1aa69e81d8c07bfa90c0e/massive_waves.jpg?fm=jpg&fl=progressive&w=960&h=540&q=75"
            }
            likeButton={
              "https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like-Button.png"
            }
            numberOfLikes={0}
          />
          <PostCard
            title={"Happy"}
            description={"Post 1 desc"}
            postImage={
              "https://www.shutterstock.com/image-photo/emotional-young-black-guy-casual-600nw-2114910470.jpg"
            }
            likeButton={
              "https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like-Button.png"
            }
            numberOfLikes={0}
          />
          <PostCard
            title={"Happy "}
            description={"Post 1 desc"}
            postImage={
              "https://www.shutterstock.com/image-photo/emotional-young-black-guy-casual-600nw-2114910470.jpg"
            }
            likeButton={
              "https://www.vectorico.com/wp-content/uploads/2018/02/Facebook-Like-Button.png"
            }
            numberOfLikes={0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
