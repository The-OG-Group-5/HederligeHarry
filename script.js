// Mockade bildata
const cars = [
    {
      id: "1",
      name: "Toyota Yaris",
      image: "./assets/images/yaris.jpg",
      description: "A reliable and compact car.",
<<<<<<< HEAD
      price: "150,000 SEK"
=======
      price: "150000",
      year: "2022"
>>>>>>> 5ca459bfdced5461a81c75881436acf005301f44
    },
    {
      id: "2",
      name: "Bugatti Chiron",
      image: "https://www.motortrend.com/uploads/2022/08/2022-Bugatti-Chiron-Super-Sport-2-1.jpg",
      description: "A supercar with exceptional speed and luxury.",
<<<<<<< HEAD
      price: "30,000,000 SEK"
=======
      price: "30000000",
      year: "2022"
>>>>>>> 5ca459bfdced5461a81c75881436acf005301f44
    },
    {
        id: "3",
        name: "Bugatti Veyron",
        image: "https://hips.hearstapps.com/hmg-prod/images/bugatti-chiron-sport-mid-engined-w16-engine-exclusive-news-photo-1600704674.jpg?crop=1xw:0.99951xh;center,top&resize=980:*",
        description: "A sleek and powerful supercar.",
<<<<<<< HEAD
        price: "25,000,000 SEK"
=======
        price: "25000000",
        year: "2023"
>>>>>>> 5ca459bfdced5461a81c75881436acf005301f44
      },
    {
      id: "4",
      name: "Lamborghini Huracan",
      image: "./assets/images/lambo.jpg",
      description: "A sleek and powerful supercar.",
<<<<<<< HEAD
      price: "25,000,000 SEK"
=======
      price: "25000000",
      year: "2019"
>>>>>>> 5ca459bfdced5461a81c75881436acf005301f44
    },
    {
        id: "5",
        name: "Koenigsegg Agera RS",
        image: "https://www.europeanprestige.co.uk/blobs/stock/579/images/b16d88a1-ab4f-4c16-b0b5-a224aa6986ac/hi4a9713.jpg",
        description: "A monster in its own rights",
<<<<<<< HEAD
        price: "25,000,000 SEK"
=======
        price: "25000000",
        year: "2020"
>>>>>>> 5ca459bfdced5461a81c75881436acf005301f44
      },
    {
        id: "6",
        name: "Aston Martin",
        image: "https://hips.hearstapps.com/hmg-prod/images/mac01637-1659386919.jpg?crop=0.794xw:0.795xh;0.157xw,0.0751xh&resize=980:*",
<<<<<<< HEAD
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
=======
        description: "Superduper car",
        price: "20000000",
        year: "2021"
      },
      {
        id: "7",
        name: "Lamborghini Aventador",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/2023_Lamborghini_Aventador_Ultimae.jpg",
        description: "A sleek and powerful supercar.",
        price: "25000000",
        year: "2023"
      },
      {
        id: "8",
        name: "Ford Mustang",
        image: "https://www.cjponyparts.com/media/images/resource-center/articles/large/what-is-an-eleanor-mustang-header_1.jpg",
        description: "Eleanor",
        price: "25000000",
        year: "1976"
      },
      {
        id: "9",
        name: "Tesla Cybertruck",
        image: "https://www.greendrive-accessories.com/blog/wp-content/uploads/2024/01/Tesla-Cybertruck-Towing-Prowess-and-Range-Revelations.png",
        description: "Minecraft car",
        price: "25000000",
        year: "2021"
      },
      {
        id: "10",
        name: "Volvo V70",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBzvFpwU_qkYHAzEYJGMpF2DUYUdQGSZpvig&s",
        description: "Practical car",
        price: "250000",
        year: "1992"
    
      }
  ];
  
const getCarIdFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
};

const displayCarInfo = () => {
  const carId = getCarIdFromUrl();
  const car = cars.find((c) => c.id === carId);

  if (car) {
    document.getElementById("car-info").innerHTML = `
      <h1>${car.name}</h1>
      <img src="${car.image}" alt="${car.name}" style="max-width: 100%; height: auto;">
      <p>${car.description}</p>
      <p><strong>Price:</strong> ${car.price.toLocaleString()} SEK</p>
      <p><strong>Year:</strong> ${car.year}</p>
    `;

    document.getElementById("principle").value = car.price;
  } else {
    document.getElementById("car-info").innerHTML = `<p>Car not found.</p>`;
  }
};

displayCarInfo();
>>>>>>> 5ca459bfdced5461a81c75881436acf005301f44
