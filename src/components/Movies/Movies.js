/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React,{ useContext } from "react";
import { useDispatch } from "react-redux";
import { MovieContext } from "../../Context/MovieContext";
import { addItem } from "../../Redux/cart/cart.actions";
import Container from "../GlobalComponents/Container";
import Loader from "../GlobalComponents/Loader";

const Movies = () => {

  const { movies, isLoading } = useContext(MovieContext);

  console.log("Movie",movies);
  
  const dispatch= useDispatch();

  return (

    <div css={styles} className="movies">
      <Container>
        {movies.results && movies.results.length === 0 && (
          <h1 className="error">Result not found</h1>
        )}
        {!isLoading ? (
          movies.results &&
          movies.results.map((movieItem, index) => (
            <React.Fragment> 
            <img
              key={index}
              src={`https://image.tmdb.org/t/p/w400/${movieItem.poster_path}`}
              alt="poster"
              onClick={()=>dispatch(addItem(movieItem))}
            />
          
            </React.Fragment> 
          ))
        ) : (
          <Loader />
        )}
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  .container {
    &:nth-child(1) {
      height: 68vh;
      overflow-y: scroll;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      &::-webkit-scrollbar {
        width: 0;
      }
      .error {
        font-size: 38px;
        color: red;
        height: 32px;
      }
    }
    img {
      width: 100%;
      max-width: 240px;
      height: 360px;
      margin: 10px 0;
    }
  }
  @media (max-width: 600px) {
    .container {
      img {
        max-width: 100%;
        height: 500px;
      }
    }
  }
  @media (min-width: 601px) and (max-width: 854px) {
    .container {
      img {
        max-width: 48%;
      }
    }
  }
  @media (min-width: 855px) and (max-width: 1144px) {
    .container {
      img {
        max-width: 31%;
      }
    }
  }
  @media (min-width: 1145px) and (max-width: 1365px) {
    .container {
      img {
        max-width: 23.4%;
      }
    }
  }
`;

export default Movies;
