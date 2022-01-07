import {useState, useContext} from 'react';
import {UserContext, Card} from './context.js';

function Withdraw(){
  const ctx = useContext(UserContext);  

  const [show, setShow]                   = useState(true);
  const [status, setStatus]               = useState('');
  const [balance, setBalance]             = useState(ctx.users[0].balance);
  const [withdrawAmount, setWithdrawAmount] = useState('');

  function validate(field) { 
    if (isNaN(field)) {
      setStatus('Error: Please enter a valid number');
      setTimeout(() => { setStatus(''); setWithdrawAmount('')}, 3000);
      return false;
    }
    return true;
  };

  function handlewithdraw() {
    if (!validate(withdrawAmount)) return;
    let current = (parseFloat(balance) - parseFloat(withdrawAmount)).toFixed(2);
    if (current < 0) {
      setStatus('Error: Your withdrew amount exceds your balance.');
      setTimeout(() => {setStatus(''); setWithdrawAmount('')}, 3000);
      return;
    }
    setBalance(current);
    ctx.users[0].balance = current;
    setShow(false)
  };

  function clearForm() {
    setWithdrawAmount('');
    setShow(true);
  };

  return (
    <div>
      <div className="py-2 bg-light">
        <h2>Withdraw</h2>
      </div>
      
      <div className="App-content">
          <Card            
            // bgcolor="secondary"
            header="Withdraw"
            status={status}
            body={show ? (  
                    <>
                    <div className="text-start">
                      <div className="lead mb-2">Balance: ${balance}</div>
                      
                      Withdraw Amount:<br/>
                      <input type="input" className="form-control" id="withdrawAmount" placeholder="Enter value" value={withdrawAmount} onChange={e => setWithdrawAmount(e.currentTarget.value)}/><br/>
                    </div>
                    
                    <button type="submit" className={!withdrawAmount ? "disabled btn btn-warning " : "btn btn-warning "} onClick={handlewithdraw}>Withdraw</button>
                    </>
                  ):(
                    <>
                    <h5 className="mb-3">Balance: ${balance}</h5>
                    <p>Amount withdrew: ${parseFloat(withdrawAmount).toFixed(2)}</p>
                    <button type="submit" className="btn btn-info" onClick={clearForm}>New withdraw</button>
                    </>
                  )}
          />
        </div>
    </div>
    
    
  )
}

export default Withdraw;