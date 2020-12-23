import React from 'react';

const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`

class Genres extends Component {
  constructor(props) {
    super(props)
    this.state = {
      genres: [],
    }
  }
  componentDidMount(){
    Axios.get(genresUrl)
    .then((response) => {
      this.setState({genres: response.data.genres})
    })
    .catch((err) => console.log(err));
  }
  render() {
    const { classes } = this.props
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <React.Fragment>
          <Button
            variant="contained" {...bindTrigger(popupState)}
            href=""
            target="_blank"
            className={classes.navLink}
          >
            Genres <ExpandMoreIcon className={classes.icons} />
          </Button>
         
        </React.Fragment>
      )}
    </PopupState>
    )
  }
}
export default Genres;