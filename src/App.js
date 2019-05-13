
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider ,TimePicker} from "material-ui-pickers";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [selectedDate, handleDateChange] = useState(new Date());
  const style = {
            padding: '2% 0',    
    };
  return (
  <div class="container" style={style}>
  <div class="row">  
   <MuiPickersUtilsProvider utils={DateFnsUtils}>  
   <div style={style} class="col-lg-6 col-md-5 col-xs-12 text-center">
      <DatePicker   value={selectedDate} onChange={handleDateChange} />	 
   </div>	
   <div style={style} class="col-lg-6 col-md-5 col-xs-12 text-center">   
      <TimePicker value={selectedDate} onChange={handleDateChange} />
   </div>
    </MuiPickersUtilsProvider>
	</div>
	</div>
  );
}

export default App;
