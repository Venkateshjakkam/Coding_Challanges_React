import  {useState } from 'react';
import './ToastBar.css';

const ToastBar = () => {
const [toast,setToast] = useState(false);
const [positiondivx, setPositiondivx] = useState(false);
const [positiondivy, setPositiondivy] = useState(false);
const [toastMessage,setToastMessage] = useState("I am toast message");

function handleToast(){
setToast(true);
setPositiondivx(true);
setPositiondivy(false);
}


  return (
    <div>
      <div>
        <select id="positiony" name>
            <option value="top">Top</option>
            <option value="bottom">Bottom</option>
        </select>

        <select id="positionx">
            <option value="left" >Left</option>
            <option value="right" >Right</option>
        </select>

        <input value={toastMessage} type="text" />
      </div>

      <div className="positiondivy"  >
        <h3>{toast ? toastMessage:""}</h3>
      </div>

      <div>
        <button onClick={handleToast}>Submit</button>
      </div>

    </div>
  )
}

export default ToastBar
