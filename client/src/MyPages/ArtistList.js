import React from "react";
import { useSelector } from "react-redux";
import ArtistCard from "./ArtistCard";

const ArtistList = () => {
  const users = useSelector((state) => state.userReducer.users);


  return (
    <div>
      {users
        ? users.allUsers
            .filter((user) => user.role === "artist")
            .map((user, i) => <ArtistCard key={i} firstName={user.firstName} id={user._id} />)
        : null}
    </div>
  );
};

export default ArtistList;
