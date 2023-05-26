import React, {useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import homeProducts from './HomeProducts.module.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getGames } from '../../services/api/api';
import { homeGames } from '../../store/gamesHomeSlice';
import { RootState } from '../../store/store';
import ProductCard from '../ProductCard/ProductCard';

interface HomeProductsProps {
    imglink : string;
    areaTitle: string;
    productIdxStart: number;
    productIdxEnd: number;
}


const HomeProducts = ({imglink, productIdxStart, productIdxEnd, areaTitle} : HomeProductsProps) => {
const dispatch = useDispatch();
const getGamesHome = useSelector((state: RootState) => state.getGamesHome.results)
useEffect(() => {
    async function fetchData (): Promise<void> {
      try {
        const response = await getGames();
        dispatch(homeGames(response.results));
      } catch (error) {
        throw new Error('Không tìm thấy dữ liệu');
      }
    }
    void fetchData();
  }, []);
  return (
    <Container>
        <Row className={homeProducts.areaBanner}>
            <Link to={"/"}>
                <img src={imglink} alt="" width={'100%'}/>
                <p>{areaTitle}</p>
            </Link> 
        </Row>
        <Row>
            {getGamesHome.slice(productIdxStart, productIdxEnd) && getGamesHome.slice(productIdxStart, productIdxEnd).map((item) => {
                return (
                <Col xs={12} sm={6} md={3} key={item.id} >
                    <ProductCard id={item.id} name={item.name} background_image={item.background_image} metacritic={item.metacritic} rating={item.rating} genres={item.genres} platforms={item.platforms}/>
                </Col>
                )
            })}
        </Row>
    </Container>
  )
}

export default HomeProducts