import {useContext} from 'react';

import {UserContext} from './context';

function AllData(){
  const ctx = useContext(UserContext);
  return (
    <>
    <div>
      <div className="py-2 bg-light">
        <h2>All Data in Store</h2>
      </div>

      <div className="App-content">
        {/* {JSON.stringify(ctx)}<br/> */}
        <div className="container">
          <table class="table table-light">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((user, index) => {
                return (
                  <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>$ {parseFloat(user.balance).toFixed(2)}</td>
                </tr>
                )              
              })}
            
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
    
    
    </>
  );
}

export default AllData;