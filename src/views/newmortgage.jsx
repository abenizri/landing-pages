import React, { Component } from 'react'
import { Button, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../assets/favicon.ico'
import done from '../assets/ico-done.svg'
import bestresult from '../assets/best_result.png'
import '../App.css'

class NewMortgage extends Component {

  mouseEnter = (e) => {
    e.target.style.color = "#F2860A"
  }

  mouseLeave = (e) => {
    e.target.style.color = "#324158"
  }

  render() {
    const width = window.innerWidth
    const isMobile = width <= 800
    if(isMobile) {
      return (
        <div>
          <div>
            <div id="header" style={{textAlign: 'center'}}>
              <Col style={{display: 'inline-flex'}} xs="6">
                <div style={{marginTop: '13px', marginRight: '7px'}}>
                  <img src={icon} alt="icon" style={{width: '30px', height: '30px'}}/>
                </div>
                <div style={{paddingTop: '18px'}}>
                  <h6 style={{fontSize: '18px', fontStyle: 'italic', color:'#74818F', fontWeight:'bold', fontFamily:'Montserrat-Bold,sans-serif', marginBottom: '0px'}}>Lendlord</h6>
                </div>
              </Col>
              <div>
                <span style={{color: '#324158', fontWeight: 'normal', fontFamily: 'Montserrat-Regular,sans-serif', fontSize: '11px'}}>Free online mortgage broker for landlords</span>
              </div>
            </div>
            <div id="body" className="mobileGrid" style={{textAlign: 'center', paddingLeft: '12px', paddingRight: '12px'}}>
              <div id="title" style={{marginTop: '50px'}}>
                <h3 className="font_3" style={{fontWeight: 'bold', color: '#344350', fontSize: '22px', fontFamily: 'Montserrat-Bold,sans-serif', lineHeight: 'normal'}}>Get Your Optimum Buy to Let Mortgage
                </h3>
              </div>
              <div style={{paddingLeft: '6px', paddingRight: '6px'}}>
                <h1 className="font_0" style={{fontFamily: 'Montserrat-Italic,sans-serif', color: '#344158', fontSize: '14px', fontWeight: '500', fontStyle: 'italic', marginBottom: '0px'}}>Taking a mortgage for a new investment was never as easy to assess
                </h1>
              </div>
              <div id="content" style={{textAlign: 'start', marginTop: '22px'}}>
                <div>
                  <h6 style={{color:'#344350', fontFamily: 'proxima-n-w01-reg,sans-serif', fontSize: '14px', marginLeft: '12px'}}>Discover Now:</h6>
                  <div style={{display: 'flex', marginLeft: '12px', marginTop: '12px'}}>
                    <img src={done} alt="done" style={{width: '14px', height: '14px', marginTop: '2px'}}/>
                    <h1 className="font_0" style={{marginLeft: '8px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'14px'}}>Which lender will take your case</h1>
                  </div>
                  <div style={{display: 'flex', marginLeft: '12px', marginTop: '2px'}}>
                    <img src={done} alt="done" style={{width: '14px', height: '14px', marginTop: '2px'}}/>
                    <h1 className="font_0" style={{marginLeft: '8px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'14px'}}>How much can you borrow</h1>
                  </div>
                  <div style={{display: 'flex', marginLeft: '12px', marginTop: '2px'}}>
                    <img src={done} alt="done" style={{width: '14px', height: '14px', marginTop: '2px'}}/>
                    <h1 className="font_0" style={{marginLeft: '8px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'14px'}}>What is the best rate you can achieve</h1>
                  </div>
                  <div style={{marginTop: '18px', textAlign: 'center'}}>
                  <form action="https://app.lendlord.io/questionnaire">
                    <Button block color="warning" style={{width: '180px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '8px', height: '34px', display: 'inline', fontFamily: 'Montserrat-Bold, sans-serif', fontSize: '15px'}} id="newmortgage_go_to_questionnaire" type="submit" value="Yes">Get Started For free
                    </Button>
                  </form>
                  </div>
                </div>
              </div>
              <div style={{marginTop: '32px'}}>
                <img src={bestresult} alt="lenders" style={{width: '256px', height: '157px'}}/>
              </div>
            </div>
          </div>
          <div id="footer" style={{marginTop: '50px'}}>
            <div id="text" style={{margin: '0px 30px', paddingTop: '12px'}}>
              <p className="font_9" style={{lineHeight: '1.5em'}}>
                <span style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'raleway-bold,sans-serif'}}>Lendlord is a trading name of Windfall Limited. Windfall Limited is authorised and regulated by the Financial Conduct Authority. FCA Register ref: 225908</span>
              </p>
              <p><span/><span/></p>
              <p className="font_9" style={{lineHeight: '1.5em'}}>
                <span style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'raleway-bold,sans-serif'}}>Guidance contained within the website is targeted for UK residents only. Nothing on the website constitutes advice</span>
              </p>
            </div>
            <div id="copyright" style={{float: 'right', marginRight: '30px'}}>
              <span style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'raleway-bold,sans-serif'}}>© 2019</span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div id="header" style={{position: 'static', display: 'grid', height: 'auto', width: '100%', gridTemplatedivs: 'min-content min-content 1fr', gridTemplateColumns: '100%'}}>
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
              <div>
                <img src={icon} alt="icon" style={{width: '34px', height: '34px'}}/>
              </div>
              <div style={{display: 'grid', marginLeft: '6px'}}>
                <h6 style={{fontSize: '18px', fontStyle: 'italic', color:'#74818F', fontWeight:'bold', fontFamily:'Montserrat-Bold,sans-serif', marginBottom: '0px'}}>Lendlord</h6>
                <span style={{color: '#324158', fontWeight: 'normal', fontFamily: 'Montserrat-Regular,sans-serif', fontSize: '10px'}}>Free online mortgage broker for landlords</span>
              </div>
              <div style={{paddingTop: '12px', marginLeft: '60%'}}>
                <a role="button" href="https://app.lendlord.io/questionnaire" target="_self" data-content="https://app.lendlord.io/questionnaire" style={{textDecoration: 'none', textAlign: 'right', lineHeight: '34px', color: '#324158', transition: 'color 0.4s ease 0s', font: 'normal normal normal 12px/1.4em Montserrat-Regular,sans-serif'}} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>Sign Up Free</a>
              </div>
            </div>
          </div>
          <div id="body" style={{display: 'grid', position: 'static', height: 'auto', width: '100%', minHeight: '628px', gridTemplatedivs: 'in-content min-content min-content min-content min-content min-content min-content 1fr', gridTemplateColumns: '100%', boxSizing: 'border-box'}}>
            <div>
              <Row>
                <Col id="title" style={{marginTop: '45px'}} sm={{size: 10, offset: 1}}>
                  <h3 className="font_3" style={{fontSize: '48px', lineHeight: '1.2em', fontWeight: 'bold'}}>
                    <span style={{color: '#344350'}}>
                      <span style={{fontSize: '46px'}}>
                        <span className="mainHeader" style={{fontFamily: 'Montserrat-Bold,sans-serif'}}>Get Your Optimum Buy to Let Mortgage</span>
                      </span>
                    </span>
                  </h3>
                  <h1 className="font_0" style={{fontFamily: 'Montserrat-Italic,sans-serif', color: '#344158', fontSize: '20px', fontWeight: '500', fontStyle: 'italic', marginBottom: '0px'}}>Taking a mortgage for a new investment was never as easy to assess
                  </h1>
                </Col>
              </Row>
              <Row id="content" style={{marginTop: '20px'}}>
                <Col id="leftSide" sm={{size: 5, offset: 1}} style={{paddingRight: '0px'}}>
                  <div style={{marginTop: '20px'}}>
                    <form action="https://app.lendlord.io/questionnaire">
                      <Button block color="warning" style={{width: '180px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '10px', height: '34px', fontWeight: '900'}} id="newmortgage_go_to_questionnaire" type="submit" value="Yes">Get Started For free</Button>
                    </form>
                  </div>
                  <h6 style={{color:'#344350', fontFamily: 'proxima-n-w01-reg,sans-serif', fontSize: '20px', marginTop: '20px'}}>Discover Now:</h6>
                  <div style={{display: 'flex', marginTop: '40px', marginLeft: '12px'}}>
                    <img src={done} alt="done" style={{width: '20px', height: '20px'}}/>
                    <h1 className="font_0" style={{marginLeft: '12px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'20px'}}>Which lender will take your case</h1>
                  </div>
                  <div style={{display: 'flex', marginTop: '15px', marginLeft: '12px'}}>
                    <img src={done} alt="done" style={{width: '20px', height: '20px'}}/>
                    <h1 className="font_0" style={{marginLeft: '12px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'20px'}}>How much can you borrow</h1>
                  </div>
                  <div style={{display: 'flex', marginTop: '15px', marginLeft: '12px'}}>
                    <img src={done} alt="done" style={{width: '20px', height: '20px'}}/>
                    <h1 className="font_0" style={{marginLeft: '12px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'20px'}}>What is the best rate you can achieve</h1>
                  </div>
                  <div style={{marginTop: '16px'}}>
                    <h1 className="font_0" style={{fontSize:'12px', color: '#344350', fontFamily:'proxima-n-w01-reg,sans-serif', fontWeight:'normal'}}>Requires completion of less than 3 minutes questionnaire</h1>
                  </div>
                </Col>
                <Col id="rightSide" sm={{size: 6}} style={{paddingLeft: '0px', marginTop: '20px'}}>
                  <img src={bestresult} alt="lenders" style={{width: '468px', height: '287px'}}/>
                </Col>
              </Row>
            </div>
          </div>
          <div id="footer" style={{display: 'flex'}}>
            <div id="text" style={{width: '387px', margin: '5% 0px 5% 13%'}}>
              <p className="font_9" style={{lineHeight: '1.5em'}}>
                <span style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'raleway,sans-serif'}}>Lendlord is a trading name of Windfall Limited. Windfall Limited is authorised and regulated by the Financial Conduct Authority. FCA Register ref: 225908</span>
              </p>
              <p><span/><span/></p>
              <p className="font_9" style={{lineHeight: '1.5em'}}>
                <span style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'raleway,sans-serif'}}>Guidance contained within the website is targeted for UK residents only. Nothing on the website constitutes advice</span>
              </p>
            </div>
            <div id="copyright" style={{margin: 'auto 200px 70px auto'}}>
              <span style={{color: '#FFFFFF', fontSize: '14px', fontFamily: 'raleway,sans-serif'}}>© 2019</span>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default NewMortgage
