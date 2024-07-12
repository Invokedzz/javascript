async function product () {
    try {
        const res = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
        if (!res.ok) {
            throw new Error(`http error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data[0].name);
    } catch(err) {
        console.error(err)
    }
}
product();

