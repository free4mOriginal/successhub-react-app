import axios from "axios";

const Api = {
  searchBeers(term) {
    if(!term) {
      return axios
      .get('https://api.punkapi.com/v2/beers')
      .then(res => {
        return res.data.map(beerItem => {
          return {
            image_url: beerItem.image_url,
            title: beerItem.name,
            tagline: beerItem.tagline,
            ibu: beerItem.ibu,
            abv: beerItem.abv,
            ebc: beerItem.ebc,
            description: beerItem.description,
            bestServed: beerItem.food_pairing,
            index: beerItem.id-1,
            favored: false
          };
        });
      })
    } else {
      return axios
      .get(`https://api.punkapi.com/v2/beers?beer_name=${term}`)
      .then(res => {
        return res.data.map(beerItem => {
          return {
            image_url: beerItem.image_url,
            title: beerItem.name,
            tagline: beerItem.tagline,
            ibu: beerItem.ibu,
            abv: beerItem.abv,
            ebc: beerItem.ebc,
            description: beerItem.description,
            bestServed: beerItem.food_pairing,
            index: beerItem.id-1,
            favored: false
          };
        });
      })
    }
  }
};

export default Api;
