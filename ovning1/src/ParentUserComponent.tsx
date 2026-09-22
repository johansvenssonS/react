import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Users from "./Users";

interface userDate {
  id: number;
  name: string;
  email: string;
  address: object;
}

const ParentUserComponent = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!res.ok) throw new Error("Kunde inte hämta användare" + res.status);
      return res.json();
    },
  });

  if (isLoading) {
    return <p>Laddar användare...</p>;
  }

  if (error) {
    return <p>Ett fel uppstod</p>;
  }
  console.log(users);

  return (
    <ul>
      {users.map((u: userDate) => (
        <Users id={u.id} name={u.name} email={u.email}></Users>
      ))}
    </ul>
  );
};

export default ParentUserComponent;
