export type Post = {
  id: number;
  title: string;
  postText: string;
  imageUrl: string;
  viewCount: number;
  likeCount: number;
  author: string;
};

const dummyPosts = [
  {
    id: 1,
    title: "First Post",
    postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imageUrl: "https://picsum.photos/200/300/?random=1",
    viewCount: 150,
    likeCount: 25,
    author: "John Doe",
  },
  {
    id: 2,
    title: "Second Post",
    postText:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://picsum.photos/200/300/?random=2",
    viewCount: 120,
    likeCount: 18,
    author: "Jane Doe",
  },
  {
    id: 3,
    title: "Third Post",
    postText:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    imageUrl: "https://picsum.photos/200/300/?random=3",
    viewCount: 200,
    likeCount: 30,
    author: "Alice Smith",
  },
  {
    id: 4,
    title: "Fourth Post",
    postText:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    imageUrl: "https://picsum.photos/200/300/?random=4",
    viewCount: 180,
    likeCount: 22,
    author: "Bob Johnson",
  },
  {
    id: 5,
    title: "Fifth Post",
    postText:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    imageUrl: "https://picsum.photos/200/300/?random=5",
    viewCount: 160,
    likeCount: 28,
    author: "Eve Williams",
  },
];

export default dummyPosts;
