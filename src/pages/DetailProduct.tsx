import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { getGameDetail } from '../services/api/api';
import { GameDetails } from '../services/interfaces';
import { defaultGameDetail } from '../services/constains';

const DetailProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState<GameDetails>(defaultGameDetail);
  const gameID = Number(id)
  useEffect(()=>{
    const getApiDetail = async () => {
      const response = await getGameDetail(gameID)
      console.log(response, 'response');
      setData(response)
    }
    getApiDetail()
  },[gameID]);
  return (
    <div className='detail-product'>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className='images-box'>
              <img src={`${data && data.background_image}`} alt=''/>
            </div>
          </Col>
          <Col xs={12} sm={6} md={8}>
            <div className='content-box'>
              <h2 className='title-detail'>{data && data.name}</h2>
              <div className='rating-detail'>

              </div>
              <div className='short-details'>
              </div>

              <div className='buy-product'>
                <div className='quanlity-product'>
                  <div className='name-buy-product'>
                    Quantity
                  </div>
                  <div className='counter-product'>
                    <Button variant="outline-secondary">-</Button>
                    <span>0</span>
                    <Button variant="outline-secondary">+</Button>
                  </div>
                </div>

                <Button variant="dark">Add To Card</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DetailProduct