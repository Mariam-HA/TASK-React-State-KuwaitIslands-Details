import { useState } from "react";

export default function IslandForm({ island }) {
  // use 2 state for the name and phone

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleBookNow = () => {
    window.confirm(
      `Are you sure you want to book to ${island.name} with the Name:${name},Phone:${phone} `
    );
  };

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={handleName} />
      <input
        placeholder="Type Phone Number"
        // type="number"
        type="tel"
        id="phone"
        name="phone"
        pattern="[0-9]{8}"
        onChange={handlePhone}
      />
      <button className="book" onClick={handleBookNow}>
        Book for today!
      </button>
    </div>
  );
}
