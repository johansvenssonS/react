import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import UserCard from "./Usercard";
import { ClimbingBoxLoader } from "react-spinners";

const ParentUserComponent = () => {
  const {
    data: users,
    isLoading,
    //error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Kunde inte hämta användare" + res.status);
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="loading">
        <ClimbingBoxLoader size={100} color="red">
          Laddar användare...
        </ClimbingBoxLoader>
        <p>Laddar användare..</p>
      </div>
    );
  }

  // if (error) {
  //   return <p>Ett fel uppstod</p>;
  // }
  console.log(users);

  return (
    <div className="productgrid">
      {users.map((user) => (
        <UserCard key={user.id} user={user}></UserCard>
      ))}
    </div>
  );
};

export default ParentUserComponent;
