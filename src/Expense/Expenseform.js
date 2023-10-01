import { useState } from "react";
import "./Expenseform.css";
import Expense from "./Expense";

function Expenseform() {
  // const[title,settitle]=useState("");
  // const[price,setprice]=useState("");

  const [userinput, setuserinput] = useState({
    title: "",
    price: ""
  });

  function handletitlechange(event) {
    // settitle(event.target.value);
    setuserinput({
      ...userinput,
      title: event.target.value
    });
    console.log(userinput);
  }

  function handlepricechange(event) {
    setuserinput({
      ...userinput,
      price: event.target.value
    });
  }

  function submithandler() {
    alert("Submitted");
  }

  return (
    <form>
      <div className="Form-fields">
        <div className="title-inp">
          <label> Title</label>
          <input type="text" onClick={handletitlechange} />
        </div>
        <div className="price-inp">
          <label>Price</label>
          <input type="number" onClick={handlepricechange} />
        </div>
        <button onClick={submithandler}>Submit</button>
      </div>
    </form>
  );
}

export default Expenseform;
