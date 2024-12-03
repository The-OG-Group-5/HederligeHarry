// Mockade bildata
const cars = [
    {
      id: "1",
      name: "Toyota Yaris",
      image: "./assets/images/yaris.jpg",
      description: "A reliable and compact car.",
      price: "150,000 SEK"
    },
    {
      id: "2",
      name: "Bugatti Chiron",
      image: "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg",
      description: "A supercar with exceptional speed and luxury.",
      price: "30,000,000 SEK"
    },
    {
        id: "3",
        name: "Bugatti Veyron",
        image: "https://hips.hearstapps.com/hmg-prod/images/bugatti-chiron-sport-mid-engined-w16-engine-exclusive-news-photo-1600704674.jpg?crop=1xw:0.99951xh;center,top&resize=980:*",
        description: "A sleek and powerful supercar.",
        price: "25,000,000 SEK"
      },
    {
      id: "4",
      name: "Lamborghini Huracan",
      image: "./assets/images/lambo.jpg",
      description: "A sleek and powerful supercar.",
      price: "25,000,000 SEK"
    },
    {
        id: "5",
        name: "Koenigsegg Agera RS",
        image: "https://www.europeanprestige.co.uk/blobs/stock/579/images/b16d88a1-ab4f-4c16-b0b5-a224aa6986ac/hi4a9713.jpg",
        description: "A monster in its own rights",
        price: "25,000,000 SEK"
      },
    {
        id: "6",
        name: "Aston Martin",
        image: "https://hips.hearstapps.com/hmg-prod/images/mac01637-1659386919.jpg?crop=0.794xw:0.795xh;0.157xw,0.0751xh&resize=980:*",
        description: "A sleek and powerful supercar.",
        price: "25,000,000 SEK"
      }
  ];
  
  // Hämta bilens ID från URL
  const getCarIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
  };
  
  // Visa bilens information
  const displayCarInfo = () => {
    const carId = getCarIdFromUrl();
    const car = cars.find((c) => c.id === carId);
  
    if (car) {
      document.getElementById("car-info").innerHTML = `
        <h1>${car.name}</h1>
        <img src="${car.image}" alt="${car.name}" style="max-width: 100%; height: auto;">
        <p>${car.description}</p>
        <p><strong>Price:</strong> ${car.price}</p>
      `;
    } else {
      document.getElementById("car-info").innerHTML = `<p>Car not found.</p>`;
    }
  };
  
  // Kör funktionen vid sidladdning
  displayCarInfo();