import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
    return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limit}`;
};

export async function getListOfCoffeeStoresPhotos() {
    const photos = await unsplash.search.getPhotos({
        query: 'coffee shop',
        page: 1,
        perPage: 10,
    });

    const unsplashResults = photos.response.results

    return unsplashResults.map((result) => result.urls["small"]);
    // console.log({ unsplashResults });
}

export async function fetchCoffeeStores() {
    const photos = await getListOfCoffeeStoresPhotos()
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: process.env.FOURSQUARE_API_KEY,
        }
    };

    const response = await fetch(getUrlForCoffeeStores("28.603561856411737,77.19362478225402", "coffee", 6), options)
    const data = await response.json();
    return data.results.map((result, idx) => {
        return {
            id: result.fsq_id,
            address: result.location.address,
            formatted_address: result.location.formatted_address,
            name: result.name,
            ...result,
            imgUrl: photos.length > 0 ? photos[idx] : "",
        }
    })
    // console.log(data.results)
    // .catch(err => console.error(err));
}