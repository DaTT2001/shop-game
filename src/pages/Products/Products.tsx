import React, { useEffect } from "react";
import products from "./Products.module.css";
import { Col, Container, Row } from "react-bootstrap";
import { getGamesFilter1 } from "../../services/api/api";
import { Game } from "../../services/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { setGames, setPage, setSearch, setGenres, setPlatforms } from "../../store/filterGamesSlice";
import { RootState } from "../../store/store";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useForm, useWatch } from "react-hook-form";

const Products = () => {
  const dispatch = useDispatch();
  const { register, control } = useForm();
  const { games, page, search, platforms, genres } = useSelector(
    (state: RootState) => state.filterGames
  );
  const formData = useWatch({ control });
  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        const response = await getGamesFilter1(page, formData.search, formData.genres, formData.platforms);
        dispatch(setGames(response.results));
        console.log(search);
      } catch (error) {
        throw new Error("Không tìm thấy dữ liệu");
      }
    }
    void fetchData();
  }, [page, formData]);
 
  useEffect(() => {
    console.log(formData);  
  }, [formData]);
  return (
    <div className={products.productsList}>
      <Container>
        <Row>
          <Col md={3}>
            <form id={products["formContainer"]}>
            <div className={products['form-search']}>
                <label>
                  <input
                    type="text"
                    {...register("search")}
                  />
                </label>
              </div>
              <span className={products['field-class']}>Select Genres</span>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="action"
                  />
                  Action
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="adventure"
                  />
                  Adventure
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="casual"
                  />
                  Casual
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="indie"
                  />
                  Indie
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="massively-multiplayer"
                  />
                  Massively Multiplayer
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="role-playing-games"
                  />
                  RPG
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="simulation"
                  />
                  Simulation
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="sports"
                  />
                  Sports
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="strategy"
                  />
                  Strategy
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="puzzle"
                  />
                  Puzzle
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="platformer"
                  />
                  Platformer
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="fighting"
                  />
                  Fighting
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="shooter"
                  />
                  Shooter
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="horror"
                  />
                  Horror
                </label>
              </div>
              <div className={products['form-checkbox']}>
                <label>
                  <input
                    type="checkbox"
                    {...register("genres")}
                    value="educational"
                  />
                  Educational
                </label>
              </div>
              <span className={products['field-class']}>Select Platforms</span>
              <div className={products['form-checkbox']}>
                  <label>
                    <input
                      type="checkbox"
                      {...register("platforms")}
                      value="Windows"
                    />
                    Windows
                  </label>
              </div>
              <div className={products['form-checkbox']}>
                  <label>
                    <input
                      type="checkbox"
                      {...register("platforms")}
                      value="Nintendo"
                    />
                    Nintendo
                  </label>
              </div>
              <div className={products['form-checkbox']}>
                  <label>
                    <input
                      type="checkbox"
                      {...register("platforms")}
                      value="PS4"
                    />
                    Play Station 4
                  </label>
              </div>
              <div className={products['form-checkbox']}>
                  <label>
                    <input
                      type="checkbox"
                      {...register("platforms")}
                      value="PS5"
                    />
                    PS5
                  </label>
              </div>


              <button type="submit">Submit</button>
            </form>
            {/* <div className={products["filter-icon"]}>
              <i className="bi bi-sliders"></i>
            </div>
            <div className={products["filter-table"]}>
              <i className="bi bi-x-circle-fill filter-table-close"></i>
              <form id="formElement">
                <div className={products["filter-search"]}>
                  <label htmlFor="product-search">Product name</label>
                  <input type="text" name="product_name" id="product-name" />
                </div>
                <div className={products["type"]}>
                  <span>Select Type</span>
                  <label htmlFor="action-checkbox">
                    <input
                      type="checkbox"
                      id="action-checkbox"
                      name="genres"
                      value="action"
                    />
                    Action
                  </label>
                  <label htmlFor="adventure-checkbox">
                    <input
                      type="checkbox"
                      id="adventure-checkbox"
                      name="genres"
                      value="adventure"
                    />
                    Adventure
                  </label>
                  <label htmlFor="casual-checkbox">
                    <input
                      type="checkbox"
                      id="casual-checkbox"
                      name="genres"
                      value="casual"
                    />
                    Casual
                  </label>
                  <label htmlFor="indie-checkbox">
                    <input
                      type="checkbox"
                      id="indie-checkbox"
                      name="genres"
                      value="indie"
                    />
                    Indie
                  </label>
                  <label htmlFor="multiplayer-checkbox">
                    <input
                      type="checkbox"
                      id="multiplayer-checkbox"
                      name="genres"
                      value="massively-multiplayer"
                    />
                    Massively Multiplayer
                  </label>
                  <label htmlFor="racing-checkbox">
                    <input
                      type="checkbox"
                      id="racing-checkbox"
                      name="genres"
                      value="racing"
                    />
                    Racing
                  </label>
                  <label htmlFor="rpg-checkbox">
                    <input
                      type="checkbox"
                      id="rpg-checkbox"
                      name="genres"
                      value="role-playing-games"
                    />
                    RPG
                  </label>
                  <label htmlFor="simulation-checkbox">
                    <input
                      type="checkbox"
                      id="simulation-checkbox"
                      name="genres"
                      value="simulation"
                    />
                    Simulation
                  </label>
                  <label htmlFor="sports-checkbox">
                    <input
                      type="checkbox"
                      id="sports-checkbox"
                      name="genres"
                      value="sports"
                    />
                    Sports
                  </label>
                  <label htmlFor="strategy-checkbox">
                    <input
                      type="checkbox"
                      id="strategy-checkbox"
                      name="genres"
                      value="strategy"
                    />
                    Strategy
                  </label>
                  <label htmlFor="puzzle-checkbox">
                    <input
                      type="checkbox"
                      id="puzzle-checkbox"
                      name="genres"
                      value="puzzle"
                    />
                    Puzzle
                  </label>
                  <label htmlFor="platformer-checkbox">
                    <input
                      type="checkbox"
                      id="platformer-checkbox"
                      name="genres"
                      value="platformer"
                    />
                    Platformer
                  </label>
                  <label htmlFor="fighting-checkbox">
                    <input
                      type="checkbox"
                      id="fighting-checkbox"
                      name="genres"
                      value="fighting"
                    />
                    Fighting
                  </label>
                  <label htmlFor="shooter-checkbox">
                    <input
                      type="checkbox"
                      id="shooter-checkbox"
                      name="genres"
                      value="shooter"
                    />
                    Shooter
                  </label>
                  <label htmlFor="horror-checkbox">
                    <input
                      type="checkbox"
                      id="horror-checkbox"
                      name="genres"
                      value="horror"
                    />
                    Horror
                  </label>
                  <label htmlFor="music-checkbox">
                    <input
                      type="checkbox"
                      id="music-checkbox"
                      name="genres"
                      value="music"
                    />
                    Music
                  </label>
                  <label htmlFor="educational-checkbox">
                    <input
                      type="checkbox"
                      id="educational-checkbox"
                      name="genres"
                      value="educational"
                    />
                    Educational
                  </label>
                </div>
                <div className="platforms">
                  <span>Select platforms</span>
                  <label htmlFor="Windows-checkbox">
                    <input
                      type="checkbox"
                      id="Windows-checkbox"
                      name="platforms"
                      value="4"
                    />
                    Windows
                  </label>
                  <label htmlFor="Nintendo-checkbox">
                    <input
                      type="checkbox"
                      id="Nintendo-checkbox"
                      name="platforms"
                      value="8"
                    />
                    Nintendo
                  </label>
                  <label htmlFor="PS4-checkbox">
                    <input
                      type="checkbox"
                      id="PS4-checkbox"
                      name="platforms"
                      value="9"
                    />
                    Play Station 4
                  </label>
                  <label htmlFor="PS5-checkbox">
                    <input
                      type="checkbox"
                      id="PS5-checkbox"
                      name="platforms"
                      value="187"
                    />
                    PS5
                  </label>
                </div>
                <div className={products["released"]}>
                  <span>Release date</span>
                  <div>
                    <input type="date" name="release_start" />
                    <span>-</span>
                    <input type="date" name="release_end" />
                  </div>
                </div>
                <div className={products["metacritic"]}>
                  <span>Metacritic</span>
                  <div>
                    <input
                      type="number"
                      name="metacritic_start"
                      value="1"
                      min="1"
                      max="99"
                      onBlur={checkInput}
                    />
                    <span>-</span>
                    <input
                      type="number"
                      name="metacritic_end"
                      value="99"
                      min="1"
                      max="99"
                      onBlur={checkInput}
                    />
                  </div>
                </div>
              </form>
            </div> */}
          </Col>
          <Col md={9}>
            <Container>
              <Row>
                {games &&
                  games.map((item: Game) => {
                    return (
                      <Col xs={12} sm={6} md={3} key={item.id}>
                        <ProductCard
                          id={item.id}
                          name={item.name}
                          background_image={item.background_image}
                          metacritic={item.metacritic}
                          rating={item.rating}
                          genres={item.genres}
                          platforms={item.platforms}
                        />
                      </Col>
                    );
                  })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
