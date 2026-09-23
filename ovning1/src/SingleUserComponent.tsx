import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

type adress = {
  city: string;
};

type userDate = {
  id: number;
  name: string;
  email: string;
  address: adress;
};

const SingleUserComponent = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<userDate | null>(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );
        const data = await response.json();
        setUser(data);
      } catch {
        console.log("error");
      }
    };
    fetchdata();
  }, [userId]);

  if (!user) return <div>Laddar...</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.address.city}</p>
    </div>
  );
};

export default SingleUserComponent;
