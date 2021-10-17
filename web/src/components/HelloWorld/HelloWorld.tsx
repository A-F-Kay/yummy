import React, { useEffect, useState } from 'react';
import { UserModel } from 'src/api';
import { api } from 'src/openapi';


export const HelloWorld = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    api.social.usersListUsersGet({}).then((resp) => setUsers(resp.data));
  }, []);

  return (
    <>
      <h1>Hello World</h1>

      <hr />

      <h2>List of users:</h2>
      {users.length === 0 && <span>No users.</span>}
      {users.map((u) => (
        <div key={u.id}>
          <h3>{u.name ?? `Unnamed(id=${u.id})`}</h3>
          <p>Username: @{u.username}</p>
          <p>Age: {u.age ?? 'Not specified'}</p>
        </div>
      ))}

      <hr />

      <h3>Environmental variables:</h3>
      <p>
        process.env.PRODUCTION: <b>{process.env.PRODUCTION.toString()}</b>
      </p>
      <p>
        process.env.NAME: <b>{process.env.NAME}</b>
      </p>
      <p>
        process.env.VERSION: <b>{process.env.VERSION}</b>
      </p>
    </>
  );
};
