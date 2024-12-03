const cars = [
    { id: 1, url: "/assets/images/yaris.jpg", type: "Sedan", year: 2020, price: 150000 },
    { id: 2, url: "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg", type: "SUV", year: 2019, price: 200000 },
    { id: 3, url: "/assets/images/bugatti-chiron.jpg", type: "Kombi", year: 2021, price: 180000 },
    { id: 4, url: "/assets/images/lambo.jpg", type: "Hatchback", year: 2018, price: 140000 },
    { id: 5, url: "https://hips.hearstapps.com/hmg-prod/images/mac01637-1659386919.jpg?crop=0.794xw:0.795xh;0.157xw,0.0751xh&resize=980:*", type: "Crossover", year: 2020, price: 190000 },
    { id: 6, url: "https://www.europeanprestige.co.uk/blobs/stock/579/images/b16d88a1-ab4f-4c16-b0b5-a224aa6986ac/hi4a9713.jpg?width=900&height=600&t=d7a06e51-49ec-474d-b218-3ed9d686cf7b", type: "Cabriolet", year: 2017, price: 250000 },
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
