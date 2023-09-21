let cars = document.querySelector(".cars");

async function getSmallApi(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    if (response) {
      showSmallContents(data);console.log(data);
    }
  } catch (err) {
    console.log(err.message, "Erorr");
  }
}

getSmallApi("../lamborghhini_js/theSmallDara.json");

function showSmallContents(carData) {
  let theCarth = ``;
  carData.forEach((model) => {
    theCarth += `
      <div class="theCar">
      <!-- image -->
      <div class="image">
        <img
          src="${model.theCarImage}"
          alt="Here is a picture"
        />
      </div>
      <!-- descriptions -->
      <div class="description">
        <m>Model: ${model.theCarName}</m>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic,
          quisquam.
        </p>
        <a>Price: ${model.theCarPrice}</a>
        <button>Learn more >:</button>
      </div>
    </div>
    `;
    cars.innerHTML = theCarth;
  });
}