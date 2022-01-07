import {createContext} from 'react';

const UserContext = createContext(null);

function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mx-auto mb-3 ' + bg + txt;
    }
  
    return (
      <>
      <div>
        {props.status && (
          <div class="alert alert-danger" role="alert">
            {props.status}
          </div>
        )}
      </div>
      
      <div className={classes()} style={{maxWidth: "18rem"}}>
        <div className="card-header text-dark">{props.header}</div>
        <div className="card-body text-dark">
          {/* <div className="text-start">
          
          </div> */}
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {/* {props.status && (<div id='createStatus'>{props.status}</div>)} */}
        </div>
      </div> 
      </>     
    );    
  }

export {UserContext, Card};