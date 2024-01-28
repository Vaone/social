import { FC } from "react";
import { PostType } from "../../redux/profilePage-reducer";
import MyPosts from "./MyPosts/MyPosts";

type ProfilePropsType = {
  posts: PostType[];
  newPostText: string;
  onChangeInput: (text: string) => void;
  onClickAddPost: () => void;
};

const Profile: FC<ProfilePropsType> = ({
  posts,
  newPostText,
  onChangeInput,
  onClickAddPost,
}) => {
  return (
    <div>
      <p>Background</p>
      <p>avatar + Name</p>
      <p>Info</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
        quibusdam debitis omnis reprehenderit delectus, doloremque aut repellat
        ut ducimus et officia expedita soluta voluptatem sapiente minus
        mollitia, odit quo provident optio repellendus illo? Provident
        architecto doloremque voluptatibus doloribus blanditiis sequi, eligendi
        accusantium unde adipisci sit tenetur ullam esse exercitationem modi
        magni explicabo quo eum qui assumenda quaerat optio possimus vero quas.
        Accusantium, magnam sint? Tempora ea necessitatibus ipsam laudantium
        vero expedita esse natus? Tempore, tempora. Quam vero reprehenderit
        consectetur odit est dolores quasi ipsa tempore quisquam consequatur.
        Alias similique et expedita, non ad incidunt sapiente quia! Aliquam
        voluptas necessitatibus sit atque minima debitis eveniet aut et rerum,
        dolores eos natus amet. Placeat nostrum accusamus modi mollitia fuga
        voluptates asperiores perspiciatis, minus, quidem quasi doloribus
        corrupti consectetur ad aliquam pariatur iure voluptatibus consequuntur
        quos, a ab commodi quisquam explicabo rerum. Veritatis tempore adipisci
        enim nam doloribus temporibus iusto illum suscipit provident!
      </p>
      <MyPosts
        posts={posts}
        newPostText={newPostText}
        onChangeInput={onChangeInput}
        onClickAddPost={onClickAddPost}
      />
    </div>
  );
};

export default Profile;
