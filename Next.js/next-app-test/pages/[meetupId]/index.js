import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
      title="First Meetup"
      address="Some street some city"
      description="This is a first meetup"
    />
    // <Fragment>
    //   <img
    //     src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg"
    //     alt="A first meetup"
    //   />
    //   <h1>A First Meetup</h1>
    //   <address>Some Street 5, Some city</address>
    //   <p>The Meetup description</p>
    // </Fragment>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        id: "m9",
        title: "First Meetup",
        address: "Some street some city",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
