const cars = [
    { id: 1, url: "/assets/images/yaris.jpg", type: "Sedan", year: 2020, price: 150000 },
    { id: 2, url: "url2.jpg", type: "SUV", year: 2019, price: 200000 },
    { id: 3, url: "url3.jpg", type: "Kombi", year: 2021, price: 180000 },
    { id: 4, url: "url4.jpg", type: "Hatchback", year: 2018, price: 140000 },
    { id: 5, url: "url5.jpg", type: "Crossover", year: 2020, price: 190000 },
    { id: 6, url: "url6.jpg", type: "Cabriolet", year: 2017, price: 250000 },
    { id: 7, url: "url7.jpg", type: "Pickup", year: 2016, price: 300000 },
    { id: 8, url: "url8.jpg", type: "Sportbil", year: 2022, price: 500000 },
    { id: 9, url: "url9.jpg", type: "Minivan", year: 2020, price: 170000 },
    { id: 10, url: "url10.jpg", type: "Elbil", year: 2023, price: 400000 }
];

var url = new URL(window.location.href);
var id = url.searchParams.get("id");
const car = cars.find(c => c.id === parseInt(id));

if (car) {
    document.getElementById("car-info").innerHTML = `
        <img src="${car.url}" alt="Bild på bilen">
        <p>Typ: ${car.type}</p>
        <p>Årtal: ${car.year}</p>
        <p>Pris: ${car.price} SEK</p>
    `;
} else {
    document.getElementById("car-info").innerText = "Ingen bil hittades med detta ID.";
}
