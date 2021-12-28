import React from 'react'
import trail from "../../trail/trail"
import Row from "../../components/Row/Row"
import Banner from "../../components/Banner/Banner"
import Nav from "../../components/Nav/Nav"
import { Link } from "react-router-dom";
import "./movieflixshow.scss"
import Footer from "../../components/Footer/Footer"



const Movieflixshow = () => {
    return (
        <div className="show">
            <Link to="/views" classname="btn btn-rounded">
                    Views
            </Link>
        <Nav />
         <Banner />
         <Row title="MOVIESFLIX ORIGINALS" 
         fetchUrl={trail.fetchNetflixOriginals} 
         isLargeRow/>

         <Row title="Trending Now" fetchUrl={trail.fetchTrending} />
         <Row title="Top Rated" fetchUrl={trail.fetchTopRated} />
         <Row title="Action Movies" fetchUrl={trail.fetchActionMovies} />
         <Row title="Comedy Movies" fetchUrl={trail.fetchComedyMovies} />
         <Row title="Horror Movies" fetchUrl={trail.fetchHorrorMovies} />
         <Row title="Romance Movies" fetchUrl={trail.fetchRomanceMovies} />
         <Row title="Documentaries" fetchUrl={trail.fetchDocumentaries} />
         
         <Footer/>
         </div>
         
    )
}

export default Movieflixshow