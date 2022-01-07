import {useState, useContext, useEffect} from 'react';
import {UserContext, Card} from './context.js';

function CreateAccount(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const ctx = useContext(UserContext);  

  useEffect(() => {
    document.title = 'BadBank - Create Account';
  })

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }
 

  return (
    <div>
      <div className="py-2 bg-light">
        <h2>Create Account</h2>
      </div>
      
      <div className="row mt-4">
        <div className="text-white my-2 lead">Create your Account with us: </div>
      </div>
      
        <div className="App-content">
          <Card            
            // bgcolor="secondary"
            header="Create Account"
            status={status}
            body={show ? (  
                    <>
                    Name<br/>
                    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className={!name && !email && !password ? "disabled btn btn-info " : "btn btn-info "} onClick={handleCreate}>Create Account</button>
                    </>
                  ):(
                    <>
                    <h5>Success</h5>
                    <button type="submit" className="btn btn-info" onClick={clearForm}>Add another account</button>
                    </>
                  )}
          />
        </div>
      
    </div>    
  )
}

export default CreateAccount;