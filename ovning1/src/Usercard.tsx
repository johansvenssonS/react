import { Link } from "react-router-dom";

type adress = {
  city: string;
};

type userDate = {
  id: number;
  name: string;
  email: string;
  address: adress;
};

type props = {
  user: userDate;
};

const UserCard = (props: props) => {
  return (
    <>
      <Link to={`/users/${props.user.id}`} key={props.user.id}>
        <div key={props.user.id} className="productCard">
          <p>namn: {props.user.name} </p>
          <p>email: {props.user.email} </p>
          <p>stad: {props.user.address.city} </p>
        </div>
      </Link>
    </>
  );
};
export default UserCard;
