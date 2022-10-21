import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/layout";
import { useEffect, useState } from "react";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a second meetup!",
  },
  {
    id: "m2",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a second meetup!",
  },
  {
    id: "m3",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a second meetup!",
  },
  {
    id: "m4",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 some city",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);
  // useEffect(()=>{
  //   // Load API
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // },[]);

  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps(){
  // fetch data from an API
  return{
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  };
}

export default HomePage;
