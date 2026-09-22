interface User {
  id: number;
  name: string;
  email: string;
}

const Users = (u: User) => {
  return (
    <li key={u.id}>
      <p>
        {u.name} - {u.email}
      </p>
    </li>
  );
};
export default Users;
