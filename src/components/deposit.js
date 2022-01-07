import {useState, useContext, useEffect} from 'react';
import {UserContext, Card} from './context.js';

function Deposit(){
  useEffect(() => {
    document.title = 'BadBank - Deposit'
  })

  const ctx = useContext(UserContext);  

  const [show, setShow]                   = useState(true);
  const [status, setStatus]               = useState('');
  const [balance, setBalance]             = useState(ctx.users[0].balance);
  const [depositAmount, setDepositAmount] = useState('');

  function validate(field) {
    if(field < 0) {
      setStatus('Error: ' + "Can't deposit a negative number");
      setTimeout(() => {setStatus(''); setDepositAmount('')}, 3000);
      return false;
    }
    if (isNaN(field)) {
      setStatus('Error: ' + "Please enter a valid number");
      setTimeout(() => {setStatus(''); setDepositAmount('')}, 3000);
      return false;
    }
    return true;
  }

  function handleDeposit() {
    if(!validate(depositAmount)) return;
    let current = (parseFloat(balance) + parseFloat(depositAmount)).toFixed(2);
    setBalance(current);
    ctx.users[0].balance = current;
    setShow(false)
  }

  function clearForm() {
    setDepositAmount('');
    setShow(true);
  }

  return (
    <div>
      <div className="py-2 bg-light">
        <h2>Deposit</h2>
      </div>
      
      <div className="App-content">
          <Card            
            // bgcolor="secondary"
            header="Deposit"
            status={status}
            body={show ? (  
                    <>
                    <div className="text-start">
                      <div className="lead mb-2">Balance: ${balance}</div>
                      
                      Deposit Amount:<br/>
                      <input type="input" className="form-control" id="depositAmount" placeholder="Enter value" value={depositAmount} onChange={e => setDepositAmount(e.currentTarget.value)}/><br/>
                    </div>
                    
                    <button type="submit" className={!depositAmount ? "disabled btn btn-info " : "btn btn-info "} onClick={handleDeposit}>Deposit</button>
                    </>
                  ):(
                    <>
                    <h5 className="mb-3">Balance: ${balance}</h5>
                    <p>Amount deposited: ${parseFloat(depositAmount).toFixed(2)}</p>
                    <button type="submit" className="btn btn-info" onClick={clearForm}>New Deposit</button>
                    </>
                  )}
          />
        </div>
    </div>
    
    
  )
}

export default Deposit;