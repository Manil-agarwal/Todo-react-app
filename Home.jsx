import React from "react";
import Todo from "./Todo";


function Home() {
    return (
    <div className="container">
        <div className="row justify-content-md-center mt4">
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>
            <Todo/>

        </div>
        <div className="" style={{position:"fixed", right:50, bottom:50, zIndex:1030}}>
           <button type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="btn btn-outline-light">
              Add More Quest!
           </button>
        </div>
    <div className="modal mt-5" id="exampleModal">
            <div className="modal-dialog" role ="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="modal-title">let's see what's next!</div>
                        <button type="button" className="btn-close"
                        data-bs-dismiss="modal"
                        arial-label="close">
                            <span arial-hidden="True"></span>
                        </button>

                    </div>
                    <div className="modal-body">
                        <div className="form-group" >
                            <textarea name="" 
                            className="form-control"
                            rows={3}
                            placeholder="And the Quest is...."></textarea>
                        </div>
                    </div>
                <div className="modal-footer">
                    <button className="btn btn-secondary">Save Quest</button>
                    <button className="btn btn-secondary" data-bs-dismiss="modal">Close Quest</button>
                </div>
                </div>
            </div>
        </div>
    </div>);


}
export default Home;
  