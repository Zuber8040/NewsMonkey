import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';



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
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:38
    };
  }


  async updateNews(pageNo){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c5140dd23375463bbd2eed9755158ee3&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading:false
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

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        
        <div className="row">
          {!this.setState.loading && this.state.articles.map((articles) => {
            return (
              <div className="col-md-4" key={articles.url}>
                <NewsItems
                  title={articles.title.slice(0, 45)}
                  description={articles.description}
                  imageUrl={articles.urlToImage}
                  newsUrl={articles.url} 
                  author ={articles.author}
                  date={articles.publishedAt}
                  source={articles.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
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
        </div>
      </div>
    );
  }
}
