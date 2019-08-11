import axios from "axios";

const API = () => {
  return axios
    .get("https://api.punkapi.com/v2/beers")
    .then(res => {
      console.log("res", res);
      return res.data.map(beerItem => {
        return {
          image_url: beerItem.image_url,
          title: beerItem.name,
          tagline: beerItem.tagline,
          ibu: beerItem.ibu,
          abv: beerItem.abv,
          ebc: beerItem.ebc,
          description: beerItem.description,
          bestServed: beerItem.food_pairing
        };
      });
    })
    .catch(err => console.log(err));
};

export default API;
