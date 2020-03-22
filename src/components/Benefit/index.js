import React from "react";

function Benefit(params) {
  return (
    <div class="benefit">
      <div class="container">
        <div class="row benefit_row">
          <div class="col-lg-3 benefit_col">
            <div class="benefit_item d-flex flex-row align-items-center">
              <div class="benefit_icon">
                <i class="fa fa-truck" aria-hidden="true"></i>
              </div>
              <div class="benefit_content">
                <h6>free shipping</h6>
                <p>Suffered Alteration in Some Form</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 benefit_col">
            <div class="benefit_item d-flex flex-row align-items-center">
              <div class="benefit_icon">
                <i class="fa fa-money" aria-hidden="true"></i>
              </div>
              <div class="benefit_content">
                <h6>cach on delivery</h6>
                <p>The Internet Tend To Repeat</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 benefit_col">
            <div class="benefit_item d-flex flex-row align-items-center">
              <div class="benefit_icon">
                <i class="fa fa-undo" aria-hidden="true"></i>
              </div>
              <div class="benefit_content">
                <h6>45 days return</h6>
                <p>Making it Look Like Readable</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 benefit_col">
            <div class="benefit_item d-flex flex-row align-items-center">
              <div class="benefit_icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
              <div class="benefit_content">
                <h6>opening all week</h6>
                <p>8AM - 09PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefit;
