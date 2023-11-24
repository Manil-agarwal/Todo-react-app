import React from "react";


function Todo() {
    return (
    <div className="ccol-sm-3 mx-3 my-2 alert bg-light">
        <div className="card-header">
            QuestCheck
        </div>
        <div className="card-body">
            <h4 className="card-title">Endeavor in the works</h4>
            <p classname="card-text">Your Quest</p>
           
        </div>
        <div className="actionButton" style={{display:'flex',justifyContent: 'space-between', alignItems:'center'}}>
                <div className="deleteButton">
                <button type="button" class="btn btn-primary">Delete</button>
                </div>
                <div className="Triumph attained">
                <button type="button" class="btn btn-primary">Triumph Attained</button>
                </div>
            </div>
    </div>);


}
export default Todo;
  