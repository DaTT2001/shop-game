import React, {useEffect} from 'react'
import products from './Products.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { getGamesFilter } from '../../services/api/api'
import { Game } from '../../services/interfaces'
import { useDispatch, useSelector } from 'react-redux';
import { setGames, setPage, setFilter } from '../../store/filterGamesSlice';
import { RootState } from '../../store/store'
import ProductCard from '../../components/ProductCard/ProductCard'

const Products = () => {
  const dispatch = useDispatch();
  const {games, page, filter, } = useSelector((state: RootState) => state.filterGames)

  useEffect(() => {
    async function fetchData (): Promise<void> {
      try {
        const response = await getGamesFilter(page, filter);
        dispatch(setGames(response.results));
        console.log(filter);
        
      } catch (error) {
        throw new Error('Không tìm thấy dữ liệu');
      }
    }
    void fetchData();
  }, [page, filter]);
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if(event.target.value.trim() === '') {
      dispatch(setFilter(''));
    }
    dispatch(setFilter(event.target.value));
  };

  const handleNextPage = () => {
    dispatch(setPage(page + 1));
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  return (
    <div className={products.productsList}>
          <div>
      <input type="text" value={filter} onChange={handleFilterChange} />
      <button onClick={handlePreviousPage}>Previous</button>
      <button onClick={handleNextPage}>Next</button>
    </div>
      <Container>
        <Row>
        {games && games.map((item: Game) => {
                return (
                <Col xs={12} sm={6} md={3} key={item.id} >
                    <ProductCard id={item.id} name={item.name} background_image={item.background_image} metacritic={item.metacritic} rating={item.rating} genres={item.genres} platforms={item.platforms}/>
                </Col>
                )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default Products