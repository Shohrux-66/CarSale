let cars = document.querySelector(".cars");
let moreInformations = document.querySelector(".more-informations");


// top contens
async function getSmallApi(api) {
  try {
    const response = await fetch(api);
    const data = await response.json();
    if (response) {
      showSmallContents(data);
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

// sider cars

async function getMoreapi(apjsn) {
  try {
    const responsed = await fetch(apjsn);
    const moreData = await responsed.json();

    if (responsed) {
      showMoreApiFnC(moreData);
      console.log(moreData, "<===");
    }
  } catch (err) {
    console.log(err.message, "Erorr");
  }
}

getMoreapi("../lamborghhini_js/bigger.json");

function showMoreApiFnC(moreCars) {
  theCar = ``;
  moreCars.forEach((mrCAR) => {
    theCar += `
    <div class="content">
    <div class="content-vidio">
      <video
        src="${mrCAR.theCarVideo}"
        controls
        autoplay
        muted
      ></video>
    </div>
    <div class="big-description">
      <div class="location">
        <c>></c>
        <o>
          <h6>${mrCAR.theCarModelName}</h6>
          <p>MODEL INFORMATIONS</p>
        </o>
      </div>
      <div class="options-1">
        <p>POWER (COMBINED ICE+EE)</p>
        <h6>${mrCAR.theCarPowerCMB}</h6>
      </div>
      <div class="options-2">
        <p>MAX.SPEED</p>
        <p>${mrCAR.theCarMXSpeed}</p>
      </div>
      <div class="options-3">
        <p>0-100 KM/H</p>
        <p>${mrCAR.theCarSEC}</p>
      </div>
      <div class="bottom-descrip">
        <h4>< Click on two marts for a better view</h5>
      </div>
    </div>
  </div>
    `;
    moreInformations.innerHTML = theCar;
  });
}
