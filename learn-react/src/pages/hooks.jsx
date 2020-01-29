// import React, { useState, useEffect } from "react";
// import axios from "axios";
// function Hooks() {
//   const [posts, setPosts] = useState("");

//   // async using fetch
//   // async function fetchData() {
//   //   const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
//   //   const json = await res.json();
//   //   console.log(json);
//   //   setPosts(json);
//   // }

//   // async using axios
//   // async function fetchData() {
//   //   const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//   //   const json = await res.data;
//   //   console.log(json);
//   //   setPosts(json);
//   // }

//   // async arrow function
//   // const fetchData = async () => {
//   //   const res = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//   //   const json = await res.data;
//   //   console.log(json);
//   //   setPosts(json);
//   // };

//   // promise using fetch

//   //promise using axios
//   // const petch = () => {
//   //   axios.get("https://pokeapi.co/api/v2/pokemon/ditto/").then(res => {
//   //     const data = res.data;
//   //     console.log(data);
//   //     setPosts(data);
//   //   });
//   // };

//   useEffect(() => {
//     // fetchData();
//     // const petch = () => {
//     // fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
//     //   .then(response => response.json())
//     //   .then(data => {
//     //     setPosts(data);
//     //     console.log(data);
//     //   });
//     // .then(console.log(posts));
//     // .then(data => console.log(data))
//     // .then(data => setPosts({ data }));
//     // };
//     // petch();
//     // console.log(posts);
//     // return () => {
//     //   console.log(posts);
//     // };
//     // [input]
//   }, []);

//   return (
//     <div>
//       {console.log(posts)}
//       {/* {posts.map(post => (
//         <li key={post.id}>{post.title}</li>
//       ))} */}
//       <h1>hooks </h1>
//       {posts.height}
//     </div>
//   );
// }
// export default Hooks;
