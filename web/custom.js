$(document).ready(function () {
  const width = window.innerWidth
  const isMobile = width <= 800
  if(isMobile) {
    document.getElementById('root').innerHTML = `
      <div>
        <div>
          <div id="header" style="text-align: center">
            <div style="display: inline-flex" class="col-xs-6">
              <div style="margin-top: 13px; margin-right: 7px">
                <img src='./images/favicon.ico' alt="icon" style="width: 30px; height: 30px"/>
              </div>
              <div style="padding-top: 18px">
                <h6 style="font-size: 18px; font-style: italic; color: #74818F; font-weight: bold; font-family: Montserrat-Bold,sans-serif; margin-bottom: 0px">Lendlord</h6>
              </div>
            </div>
            <div>
              <span style="color: #324158; font-weight: normal; font-family: Montserrat-Regular,sans-serif; font-size: 11px">Free online mortgage broker for landlords</span>
            </div>
          </div>
          <div id="body" class="mobileGrid" style="text-align: center; padding-left: 12px; padding-right: 12px">
            <div id="title" style="margin-top: 50px">
              <h3 class="font_3" style="font-weight: bold ;color: #344350; font-size: 22px; font-family: Montserrat-Bold,sans-serif; line-height: normal">Get Your Optimum Buy to Let Mortgage
              </h3>
            </div>
            <div style="padding-left: 6px; padding-right: 6px">
              <h1 class="font_0" style="font-family: Montserrat-Italic,sans-serif; color: #344158; font-size: 14px; font-weight: 500; font-style: italic; margin-bottom: 0px">Taking a mortgage for a new investment was never as easy to assess
              </h1>
            </div>
            <div id="content" style="text-align: start; margin-top: 22px">
              <div>
                <h6 style="color:#344350; font-family: proxima-n-w01-reg,sans-serif; font-size: 14px; margin-left: 12px">Discover Now:</h6>
                <div style="display: flex; margin-left: 12px; margin-top: 12px">
                  <img src='./images/ico-done.svg' alt="done" style="width: 14px; height: 14px; margin-top: 2px"/>
                  <h1 class="font_0" style="margin-left: 8px; font-weight: normal; font-family: proxima-n-w01-reg,sans-serif; color: #344350; font-size:14px">Which lender will take your case</h1>
                </div>
                <div style="display: flex; margin-left: 12px; margin-top: 2px">
                  <img src='./images/ico-done.svg' alt="done" style="width: 14px; height: 14px; margin-top: 2px"/>
                  <h1 class="font_0" style="margin-left: 8px; font-weight: normal; font-family: proxima-n-w01-reg,sans-serif; color: #344350; font-size:14px">How much can you borrow</h1>
                </div>
                <div style="display: flex; margin-left: 12px; margin-top: 2px">
                  <img src='./images/ico-done.svg' alt="done" style="width: 14px; height: 14px; margin-top: 2px"/>
                  <h1 class="font_0" style="margin-left: 8px; font-weight: normal; font-family: proxima-n-w01-reg,sans-serif; color: #344350; font-size:14px">What is the best rate you can achieve</h1>
                </div>
                <div style="margin-top: 18px; text-align: center">
                <form action="https://app.lendlord.io/questionnaire">
                  <Button block color="warning" style="width: 180px; background-color: #FF9F08; color: #fff; padding: 0; border-radius: 8px; height: 34px; display: inline; font-family: Montserrat-Bold, sans-serif; font-size: 15px" id="newmortgage_go_to_questionnaire" type="submit" value="Yes">Get Started For free
                  </Button>
                </form>
                </div>
              </div>
            </div>
            <div style="margin-top: 32px">
              <img src='./images/best_result.png' alt="lenders" style="width: 256px; height: 157px"/>
            </div>
          </div>
        </div>
        <div id="footer" style="margin-top: 50px">
          <div id="text" style="margin: 0px 30px; padding-top: 12px">
            <p class="font_9" style="line-height: 1.5em">
              <span style="color: #FFFFFF; font-size: 14px; font-family: raleway-bold,sans-serif">Lendlord is a trading name of Windfall Limited. Windfall Limited is authorised and regulated by the Financial Conduct Authority. FCA Register ref: 225908</span>
            </p>
            <p><span/><span/></p>
            <p class="font_9" style="line-height: 1.5em">
              <span style="color: #FFFFFF; font-size: 14px; font-family: raleway-bold,sans-serif">Guidance contained within the website is targeted for UK residents only. Nothing on the website constitutes advice</span>
            </p>
          </div>
          <div id="copyright" style="justify-content: center; align-items: center; display: flex; flex-direction: column">
            <span style="color: #FFFFFF; font-size: 14px; font-family: raleway-bold,sans-serif">© 2019</span>
          </div>
        </div>
      </div>
    `
  } else {
    document.getElementById('root').innerHTML = `
      <div>
        <div id="header" style="position: static; display: grid; height: auto; width: 100%;  min-content:1fr; min-content: 1fr; grid-template-columns: 100%">
          <div style="margin-top: 20px; display: flex; justify-content: center">
            <div>
              <img src='./images/favicon.ico' alt="icon" style="width: 34px; height: 34px"/>
            </div>
            <div style="display: grid; margin-left: 6px">
              <h6 style="font-size: 18px; font-style: italic; color: #74818F; font-weight: bold; font-family: Montserrat-Bold,sans-serif; margin-bottom: 0px">Lendlord</h6>
              <span style="color: #324158; font-weight: normal; font-family: Montserrat-Regular,sans-serif; font-size: 10px">Free online mortgage broker for landlords</span>
            </div>
            <div style="padding-top: 12px; margin-left: 60%">
              <a role="button" href="https://app.lendlord.io/questionnaire" target="_self" data-content="https://app.lendlord.io/questionnaire" style="text-decoration: none; text-align: right; line-height: 34px; color: #324158; transition: color 0.4s ease 0s; font: normal normal normal 12px/1.4em Montserrat-Regular,sans-serif" onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>Sign Up Free</a>
            </div>
          </div>
        </div>
        <div id="body" style="height: 480px;justify-content: center; align-items: center; display: flex; flex-direction: column">
          <div>
            <div class="">
              <div class="col" id="title" style="margin-Top: 45px"  class="col-sm-10 offset-sm-1">
                <h3 class="font_3" style="font-size: 48px; line-height: 1.2em; font-weight: bold">
                  <span style="color: #344350">
                    <span style="font-size: 46px">
                      <span class="mainHeader" style="font-family: Montserrat-Bold,sans-serif">Get Your Optimum Buy to Let Mortgage</span>
                    </span>
                  </span>
                </h3>
                <h1 class="font_0" style="font-family: Montserrat-Italic,sans-serif; color: #344158; font-size: 20px; font-weight: 500; font-style: italic; margin-bottom: 0px">Taking a mortgage for a new investment was never as easy to assess
                </h1>
              </div>
            </div>
            <div  class="row" id="content" style="margin-top: 20px">
              <div id="leftSide" class="col-sm-5 offset-sm-1" style="padding-right: 0px">
                <div style="margin-top: 20px">
                  <form action="https://app.lendlord.io/questionnaire">
                    <Button block color="warning" style="width: 180px; background-color: #FF9F08; color: #fff; padding: 0; border-radius: 10px; height: 34px; font-weight: 900" id="newmortgage_go_to_questionnaire" type="submit" value="Yes">Get Started For free</Button>
                  </form>
                </div>
                <h6 style="color: #344350; font-family: proxima-n-w01-reg,sans-serif; font-size: 20px; margin-top: 20px">Discover Now:</h6>
                <div style="display: flex; margin-top: 40px;  margin-left: 12px">
                  <img src='./images/ico-done.svg' alt="done" style="width: 20px; height: 20px"/>
                  <h1 class="font_0" style="margin-left: 12px; font-weight: normal; font-family: 'proxima-n-w01-reg,sans-serif'; color:#344350; font-size:20px">Which lender will take your case</h1>
                </div>
                <div style="display: flex; margin-top: 15px; margin-Left: 12px">
                  <img src='./images/ico-done.svg' alt="done"  style="width: 20px; height: 20px"/>
                  <h1 class="font_0" style="margin-left: 12px; font-weight: normal; font-family: 'proxima-n-w01-reg,sans-serif'; color:#344350; font-size:20px">How much can you borrow</h1>
                </div>
                <div style="display: flex; margin-top: 15px; margin-left: 12px">
                  <img src='./images/ico-done.svg' alt="done" style="width: 20px; height: 20px"/>
                  <h1 class="font_0" style="margin-left: 12px; font-weight: normal; font-family: 'proxima-n-w01-reg,sans-serif'; color:#344350; font-size:20px">What is the best rate you can achieve</h1>
                </div>
                <div style="margin-top: 16px">
                  <h1 class="font_0" style="font-size: 12px; color: #344350; font-family: proxima-n-w01-reg,sans-serif; font-weight: normal">Requires completion of less than 3 minutes questionnaire</h1>
                </div>
              </div>
              <div id="rightSide" class="col-sm-6" style="padding-left: 0px; margin-top: 20px">
                <img src='./images/best_result.png' alt="lenders" style="width: 468px; height: 287px"/>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 150px;"></div>
        <div id="footer" style="display: flex; ">
          <div id="text" style="width: 387px; margin: 5% 0px 5% 13%">
            <p class="font_9" style="line-height: 1.5em">
              <span style="color: #FFFFFF; font-size: 14px; font-family: raleway,sans-serif">Lendlord is a trading name of Windfall Limited. Windfall Limited is authorised and regulated by the Financial Conduct Authority. FCA Register ref: 225908</span>
            </p>
            <p><span/><span/></p>
            <p class="font_9" style="line-height: 1.5em">
              <span style="color: #FFFFFF; font-size: 14px; font-family: raleway,sans-serif">Guidance contained within the website is targeted for UK residents only. Nothing on the website constitutes advice</span>
            </p>
          </div>
          <div id="copyright" style="margin: auto 200px 70px auto">
            <span style="color: #FFFFFF; font-size: 14px; font-family: raleway,sans-serif">© 2019</span>
          </div>
        </div>
      </div>
    `
  }
})
