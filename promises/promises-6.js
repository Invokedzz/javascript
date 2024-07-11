/* const fetchPromise = fetch(  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

fetchPromise.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
}).then((data) => {
    console.log(data[0].name)
}).catch((error) => {
    console.error(`Could not get products: ${error}`);
}); */

/* const fetchP = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

fetchP.then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
}).then((data) => {
    console.log(data[0].name);
}).catch((error) => {
    console.error(`Could not get products: ${error}`);
}); */

/* const fFetchpromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const sFetchpromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

const tFetchpromise = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");

Promise.all([fFetchpromise, sFetchpromise, tFetchpromise]).then((responses) => {
    for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
    }
}).catch((error) => {
    console.error(`Failed to fetch: ${error}`);
}); */

/* const firstFetch = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const secondFetch = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

const thirdFetch = fetch("bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");

Promise.all([firstFetch, secondFetch, thirdFetch]).then((responses) => {
    for (const response of responses) {
        console.log(`${response.url}: ${response.status}`);
    }
}).catch((error) => {
    console.error(`Failed to fetch: ${error}`);
}); */

/* const oneFetch = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

const twoFetch = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found");

const threeFetch = fetch("https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json");

Promise.any([oneFetch, twoFetch, threeFetch]).then((responses) => {
    console.log(`${responses.url}: ${responses.status}`);
}).catch((err) => {
    console.error(`Failed to fetch: ${err}`);
}); // Nessa aqui tu não pode inserir uma const "response" com "responses" no loop. Porque você busca qualquer Promise, e não todas elas.   */

/* async function fetchProducts() {
    try {
        const response = await fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        if (!response.ok) {
            throw new Error(`http error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data[0].name);
    } catch (err) {
        console.error(`Could not get products: ${err}`);
    }
}

fetchProducts(); // Returns "baked beans". */

async function fetchBeans () {
    const res = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
    if (!res.ok) {
        throw new Error(`http error: ${res.status}`);
    }
    const dt = await res.json();
    return dt;
}

const promise = fetchBeans();
promise.then((data) => {
    console.log(data[0].name);
}).catch((error) => {
    console.error(`Could not get products: ${error}`);
})