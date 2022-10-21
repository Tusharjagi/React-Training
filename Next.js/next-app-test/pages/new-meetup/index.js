import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  async function addMeetupHandler(enteredMeetupData) {
    // console.log(enteredMeetupData)
    const response = await fetch('https://some-domain.com/abc')
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetupPage;
