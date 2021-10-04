import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";




export default class News extends Component {

  static defaultProps = {
    country:'in',
    pageSize: 8,
    category:'general',
  };
  
  static propTypes= {
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }


  async updateNews(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5140dd23375463bbd2eed9755158ee3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading:false,

    });
  }


  async componentDidMount() {
    this.updateNews();  
  }

  // c5140dd23375463bbd2eed9755158ee3

  handlePrevClick = async () => {
    console.log("Prev");
    this.setState({page:this.state.page-1});
    this.updateNews();
  };
  handleNextClick = async () => {
    console.log("Next");
   
    this.setState({page:this.state.page+1});
    this.updateNews();

  };
  fetchMoreData =  async () => {
    this.setState({page:this.state.page+1});

    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5140dd23375463bbd2eed9755158ee3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false,

    }); 
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData }
          hasMore={true}
          loader={<Spinner/>}
        >
          <div className="container">

      
        <div className="row">
          { this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItems
                  title={element.title.slice(0, 45)}
                  description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url} 
                  author ={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>  
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
          &larr;Prev
          </button>
          <button disabled={this.state.page + 1>Math.ceil(this.state.totalResults /this.props.pageSize)}
            type="button"
            className="btn btn-dark "
            onClick={this.handleNextClick}
            >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}
