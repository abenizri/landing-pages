import React, { Component } from 'react'
import { Row, Col, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../assets/favicon.ico'
import done from '../assets/ico-done.svg'
import graph from '../assets/graph.png'
import logo from '../assets/logo.svg'
import '../App.css'

class Newmortgage extends Component {

  render() {
    const width = window.innerWidth
    const isMobile = width <= 800
    if(isMobile) {
      return (
        <div>
          <div>
            <div id="header" style={{textAlign: 'center'}}>
              <div style={{display: 'inline-flex'}}>
                <div style={{marginTop: '13px', marginRight: '7px'}}>
                  <img src={icon} style={{width: '30px', height: '30px'}}/>
                </div>
                <div style={{paddingTop: '18px'}}>
                  <h6 style={{fontSize: '18px', fontStyle: 'italic', color:'#74818F', fontWeight:'bold', fontFamily:'Montserrat-Bold,sans-serif', marginBottom: '0px'}}>Lendlord</h6>
                </div>
              </div>
              <div>
                <span style={{color: '#324158', fontWeight: 'normal', fontFamily: 'Montserrat-Regular,sans-serif', fontSize: '11px'}}>Free online mortgage broker for landlords</span>
              </div>
            </div>
            <div id="body" className="mobileGrid" style={{textAlign: 'center', paddingLeft: '12px', paddingRight: '12px'}}>
              <div id="title" style={{marginTop: '60px'}}>
                <h3 className="font_3" style={{lineHeight: '1.2em', fontWeight: 'bold', color: '#324158', fontSize: '23px', fontFamily: 'Montserrat-Bold,sans-serif'}}>Start Saving Today
                </h3>
              </div>
              <div style={{paddingLeft: '6px', paddingRight: '6px'}}>
                <h1 className="font_0" style={{fontFamily: 'Montserrat-Italic,sans-serif', color: '#324158', fontSize: '13px', fontWeight: '500', fontStyle: 'italic', marginBottom: '0px'}}>Save 20-30% of your monthly mortgage costs
                </h1>
              </div>
              <div id="content" style={{textAlign: 'start', marginTop: '10px'}}>
                <div>
                  <form action="https://app.lendlord.io/questionnaire" style={{textAlign: 'center'}}>
                    <Button block color="warning" style={{width: '180px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '10px', height: '34px', fontWeight: '900', display: 'inline'}} id="newmortgage_go_to_questionnaire" type="submit" value="Yes">Get Started For free
                    </Button>
                  </form>
                  <div style={{display: 'flex', marginLeft: '12px', marginTop: '20px'}}>
                    <img src={icon} alt="logo" style={{width: '14px', height: '14px'}}/>
                    <h1 className="font_0" style={{marginLeft: '8px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'14px'}}>Fill in your portfolio mortgage details</h1>
                  </div>
                  <div style={{display: 'flex', marginLeft: '12px'}}>
                    <img src={icon} alt="logo" style={{width: '14px', height: '14px'}}/>
                    <h1 className="font_0" style={{marginLeft: '8px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'14px'}}>Lendlord platform will analyse the data</h1>
                  </div>
                  <div style={{display: 'flex', marginLeft: '12px'}}>
                    <img src={icon} alt="logo" style={{width: '14px', height: '14px'}}/>
                    <h1 className="font_0" style={{marginLeft: '8px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'14px'}}>Discover how much you can save</h1>
                  </div>
                  <div style={{marginTop: '15px', textAlign: 'center'}}>
                  </div>
                </div>
              </div>
              <div style={{marginTop: '20px'}}>
                <img src={graph} alt="lenders" style={{width: '167px', height: '179px'}}/>
              </div>
            </div>
          </div>
          <div id="footer" style={{}}>
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
          <div>
            <div id="header" style={{position: 'static', display: 'grid', height: 'auto', width: '100%', gridTemplatedivs: 'min-content min-content 1fr', gridTemplateColumns: '100%'}}>
              <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                <div>
                  <img src={icon} style={{width: '34px', height: '34px'}}/>
                </div>
                <div style={{display: 'grid', marginLeft: '6px'}}>
                  <h6 style={{fontSize: '18px', fontStyle: 'italic', color:'#74818F', fontWeight:'bold', fontFamily:'Montserrat-Bold,sans-serif', marginBottom: '0px', height: '6px'}}>Lendlord</h6>
                  <span style={{color: '#324158', fontWeight: 'normal', fontFamily: 'Montserrat-Regular,sans-serif', fontSize: '10px'}}>Free online mortgage broker for landlords</span>
                </div>
                <div style={{paddingTop: '12px', marginLeft: '60%'}}>
                  <a className="signupp" role="button" href="https://app.lendlord.io/questionnaire" target="_self" data-content="https://app.lendlord.io/questionnaire" style={{textDecoration: 'none', textAlign: 'right', lineHeight: '34px', color: '#324158', transition: 'color 0.4s ease 0s', font: 'normal normal normal 12px/1.4em Montserrat-Regular,sans-serif'}}>Sign Up Free</a>
                </div>
              </div>
            </div>
            <div id="body" style={{display: 'flex', justifyContent: 'center'}}>
              <div id="leftSide" style={{display: 'grid'}}>
                <div id="title" style={{marginTop: '65px'}}>
                  <h3 className="font_3" style={{fontSize: '48px', lineHeight: '1.2em', fontWeight: 'bold'}}>
                    <span style={{color: '#344350'}}>
                      <span style={{fontSize: '46px'}}>
                        <span className="mainHeader" style={{fontFamily: 'Montserrat-Bold,sans-serif'}}>Start Saving Today</span>
                      </span>
                    </span>
                  </h3>
                  <h1 className="font_0" style={{fontFamily: 'Montserrat-Italic,sans-serif', color: '#344158', fontSize: '20px', fontWeight: '500', fontStyle: 'italic', marginBottom: '0px'}}>Save 20-30% of your monthly mortgage costs
                  </h1>
                  <form action="https://app.lendlord.io/questionnaire" style={{marginTop: '20px'}}>
                    <Button block color="warning" style={{width: '200px', backgroundColor: '#FF9F08', color: '#fff', padding: '0', borderRadius: '10px', height: '34px', fontWeight: '900', fontFamily: 'Montserrat-Bold'}} id="newmortgage_go_to_questionnaire" type="submit" value="Yes">Get Started For free</Button>
                  </form>
                  <div>
                    <div style={{display: 'flex', marginTop: '50px', marginLeft: '12px', alignItems: 'center'}}>
                      <img src={icon} alt="logo" style={{width: '15px', height: '15px'}}/>
                      <h1 className="font_0" style={{marginLeft: '12px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'20px', marginBottom: '0px'}}>Fill in your portfolio mortgage details</h1>
                    </div>
                    <div style={{display: 'flex', marginLeft: '12px', alignItems: 'center'}}>
                      <img src={icon} alt="logo" style={{width: '15px', height: '15px'}}/>
                      <h1 className="font_0" style={{marginLeft: '12px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'20px', marginBottom: '0px'}}>Lendlord platform will analyse the data</h1>
                    </div>
                    <div style={{display: 'flex', marginLeft: '12px', alignItems: 'center'}}>
                      <img src={icon} alt="logo" style={{width: '15px', height: '15px'}}/>
                      <h1 className="font_0" style={{marginLeft: '12px', fontWeight:'normal', fontFamily:'proxima-n-w01-reg,sans-serif', color:'#344350', fontSize:'20px', marginBottom: '0px'}}>Discover how much you can save</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div id="rightSide" style={{marginLeft: '100px', marginTop: '60px'}}>
                <div id="rightSide">
                  <img src={graph} alt="lenders" style={{width: '289px', height: '311px'}}/>
                </div>
              </div>
            </div>
          </div>
          <div style={{height: '300px'}}/>
          <div id="footer" style={{display: 'flex'}}>
            <div id="text" style={{width: '387px', margin: '67px 0px 68px 222px'}}>
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

export default Newmortgage
