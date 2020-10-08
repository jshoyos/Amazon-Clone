import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return(
        <div className="home">
            <img className="home_image" src="https://cdn.technadu.com/wp-content/uploads/2018/07/Amazon-Prime-Day-2018-Featured-Banner.jpg" alt="Amazon Banner"/>

            {/*product id, title,price,rating,image*/}
            <div className={"home_row"}>
                <Product
                    id={834289574}
                    title={"Defender Without Time\n" +
                    "Cyborg Of The Banished\n" +
                    "Bandits Of Tomorrow\n" +
                    "Gangsters Of The Land\n" +
                    "Hunters And Spiders\n" +
                    "Soldiers And Swindlers\n" +
                    "Choice Of The Banished\n" +
                    "Harmony Of Water\n" +
                    "Breaking The Jungle\n" +
                    "Binding To The Void"}
                    price={11.96}
                    rating={5}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"/>
                <Product
                    id={454}
                    title={"Hello"}
                    price={11.96}
                    rating={5}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"/>
            </div>
            <div className={"home_row"}>
                <Product
                    id={333}
                    title={"Hello"}
                    price={11.96}
                    rating={5}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"/>
                <Product
                    id={3322}
                    title={"Hello"}
                    price={11.96}
                    rating={5}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"/>
                <Product
                    id={2343}
                    title={"Hello"}
                    price={11.96}
                    rating={5}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"/>
            </div>
            <div className={"home_row"}>
                <Product
                    id={40549}
                    title={"Defender Without Time\n" +
                    "Cyborg Of The Banished\n" +
                    "Bandits Of Tomorrow\n" +
                    "Gangsters Of The Land\n" +
                    "Hunters And Spiders\n" +
                    "Soldiers And Swindlers\n" +
                    "Choice Of The Banished\n" +
                    "Harmony Of Water\n" +
                    "Breaking The Jungle\n" +
                    "Binding To The Void"}
                    price={11.96}
                    rating={5}
                    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc.jpg?ts=1588152105"/>
            </div>
        </div>
    )

}
export default Home