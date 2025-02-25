function signIn() {
    alert("Google Sign-In Clicked!");
}

async function fetchStockData() {
    try {
        let response = await fetch("https://api.example.com/stocks");
        let data = await response.json();

        document.getElementById("stock1").innerHTML = `${data[0].name}: ₹${data[0].price}`;
        document.getElementById("stock2").innerHTML = `${data[1].name}: ₹${data[1].price}`;
        document.getElementById("stock3").innerHTML = `${data[2].name}: ₹${data[2].price}`;
    } catch (error) {
        console.log("Error fetching stock data", error);
    }
}

fetchStockData();
