import axios from "axios";

export const Api = {
  searchBeers(term) {
    if(!term) {
      return axios
      .get('https://api.punkapi.com/v2/beers?per_page=80')
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
            favored: false,
            id: beerItem.id
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
            favored: false,
            id: beerItem.id
          };
        });
      })
    }
  }
};

export function randomBeers() {
  return axios
    .get('https://api.punkapi.com/v2/beers/random')
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
          favored: false,
          id: beerItem.id
        };
      });
    })
};