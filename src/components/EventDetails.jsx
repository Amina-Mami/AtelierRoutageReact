import { useParams } from "react-router-dom";
import events from "../events.json";
import NavigationBar from "./NavBar";

const EventDetails = () => {
  const { name } = useParams();

  const event = events.find((event) => event.name === name);

  if (!event) {
    return <div>No event details available.</div>;
  }

  const { description, price, img } = event;

  return (
    <>
      <NavigationBar />
      <div className="event-details-container">
        <div className="image-container">
          <img src={`/images/${img}`} alt={name} />
        </div>
        <div className="text-container">
          <h2>{name}</h2>
          <p>Description:</p>
          <p>{description}</p>
          <p>Price:</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
};

export default EventDetails;
