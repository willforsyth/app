import React from 'react';

const SellPage = (props) => {
 console.log(props.user.items)
 return(
     <div>
       <form action="" className="">
         <div className="editForm--item signup column column__center column__8-of-12">
           <label>Make</label>
           <input name="ItemName" type="text" placeholder='Nike Jordons' />
         </div>
         <div className="editForm--item column column__center column__8-of-12">
           <label>Brand</label>
           <select name="select">
            <option value="value1">Nike</option>
            <option value="value2">Adidas</option>
            <option value="value3">Puma</option>
          </select>
         </div>
         <div className="editForm--item column column__center column__8-of-12">
           <label>Brand</label>
             <ul className="radios">
                <li>
                    <input type="radio" className="radio" name="radio--01" id="radio--01-01" />
                    <span></span>
                    <label for="radio--01-01">Male</label>
                </li>
                <li>
                    <input type="radio" class="radio" name="radio--01" id="radio--01-02" />
                    <span></span>
                    <label for="radio--01-02">Female</label>
                </li>
            </ul>
         </div>
         <div className="editForm--item column column__center column__8-of-12">
           <label>Size</label>
           <select name="select">
            <option value="value1">3</option>
            <option value="value2">4</option>
            <option value="value3">5</option>
          </select>
         </div>
        <input type="submit" />
       </form>
     </div>
 )
}

export default SellPage;
