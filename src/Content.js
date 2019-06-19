import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';
import { Button } from 'reactstrap';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Maps from './Maps';
import Datasort from 'react-data-sort'





export default class Content extends React.Component {
 
  render() {
      var my_result={background:'#E5E8E8', height:'40px',fontFamily: 'Roboto,sans-serif',fontStyle: 'normal',fontWeight: 'normal',fontSize: '16px',lineHeight: '19px',paddingTop:'10px',paddingLeft:'19px'}
      var sort_by={fontStyle:'normal',fontWeight:'bold',fontSize: '14px',lineHeight: '16px',color: '#000000',fontFamily: 'Roboto,sans-serif'}

      const sortName = [{ name: 'Mingmitr Coffee',name: 'Wake up Coffee',name: 'Starbucks Coffee',   }]
      
    return (
      <Container fluid>
        <Row>
          <Col xs="5" className="listview ">
          
              <div style={my_result} >
                  <p>Result:_____________near_______________</p>
              </div>

              <div className='float-right mt-3' style={sort_by}>
                Sort by : 
                <Button className="btn-sort ml-2 mr-2 active"   size="sm" >Name</Button>{' '}
                <Button className="btn-sort mr-2"   size="sm">Distance</Button>{' '}
              </div>
              
            
          <div className="shop_box" >
                  <Media className="mt-5 mb-3">
                    <Media left href="#">

                      <Media  src={require('./ming.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                          Mingmitr Coffee
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                          มิ่งมิตร คอฟฟี่
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 2.2 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 2.2 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 59 ซอยศิริมังคลาจารย์ 7, ถนนศิริมังคลาจารย์, ตำบลสุเทพ อำเภอเมืองเชียงใหม่ จังหวัดเชียงใหม่, 50200 ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200  </a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./wakeup.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                          Wake up Coffee
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                          เวคอัพ คอฟฟี่
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 1.7 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 1.7 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 30, 1-3 ถนนนิมมานเหมินท์ ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200k </a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./starbuck.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                        Starbucks Coffee
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                        สตาร์บัคส์ คอฟฟี่
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 1.9 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 1.9 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 20/5 ถนน บุญเรืองฤทธิ์ ตำบล ศรีภูมิ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200   </a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./amazon.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                        Cafe' Amazon Nimman 11
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                        คาเฟ่ อเมซอน
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 0.9 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 0.9 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 45, 113-115 ถนน นิมมานเหมินท์ ซอย 11 ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200 </a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./amazon.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                        Akha Ama La Fattoria
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                        กาแฟอาข่า อ่ามา ลา แฟททอเรีย
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 0.9 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 0.9 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 175/1 ถนน ราชดำเนิน ตำบล พระสิงห์ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200 </a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./amazon.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                        Boonraksa Coffee By Wat Pansao
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                        กาแฟ บุญรักษา
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 0.9 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 0.9 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 8 ถนน บุญเรืองฤทธิ์ ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200</a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>
          
          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./amazon.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                        Roastniyom Coffee
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                        กาแฟรสนิยม
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 0.9 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 0.9 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 51 ถนนศิริมังคลาจารย์ ตำบลสุเทพ อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200</a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

          <div className="shop_box" >
                  <Media className="mb-3">
                    <Media left href="#">
                      <Media  src={require('./amazon.jpg')} className='ml-3 mt-3 img-fluid' />
                    </Media>

                  <Media body>
                  <Container>
                    <Row>
                      <Col sm="6">
                        <Media className="Name_eng mt-3">
                        Ristr8to Lab
                        </Media>
                    
                        <Media className="Name_thai mt-2">
                        ริสเทรตโต้ แล็บ
                        </Media>
                      </Col>
                            
                      <Col sm="6">
                        <Media className="mt-3 Distance_eng">
                          Distance : 0.9 km
                        </Media>

                        <Media className="Distance_thai mt-2">
                          ระยะทาง : 0.9 กิโลเมตร
                        </Media>
                      </Col>

                    <div className="ml-3 mt-2">
                      <FontAwesomeIcon icon={faMapMarkerAlt}  />
                      <a className="location "> 14 ถนน นิมมานเหมินท์ ซอย 3 ตำบล สุเทพ อำเภอ เมืองเชียงใหม่ เชียงใหม่ 50200</a>
                    </div>
                  </Row>
                </Container>
                </Media>
              </Media>
                  <hr></hr>
          </div>

         
          
          </Col>


        {/* Put Google Maps*/}
          <Col xs="7" className="mapview">

          
         <Maps />
          
          </Col>  

        </Row>
      </Container>
    );
  }
}

