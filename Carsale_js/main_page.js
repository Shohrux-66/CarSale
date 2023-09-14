let SecondSmallBlank = document.querySelector(".secondSmallBlank");
let open = document.querySelector(".Open");
let close = document.querySelector(".Close");
let tEC = document.querySelector(".the_example_contents");

async function theApi(apiCars) {
  try {
    const response = await fetch(apiCars);
    const data = await response.json();
    if (response) {
      showApi(data);
    }
  } catch (err) {
    console.log(err.message, "Erorr");
  }
}

theApi("../Carsale_js/theCarData.json");

function showApi(products) {
  let api = ``;
  products.forEach((item) => {
    api += `
    <div class="the_content" id= "${item.id}">
      <div class="content_image">
        <a href="${item.CarPage}">
          <img
            src="${item.CarImage}"
            alt="Here is a picture"
            style="width:100%"
          />
        </a>
      </div>
      <div class="to_-_to-one">
        <div class="the_content_description">
          <p>${item.CarName}</p>
        </div>
        <div class="the_link_to_shop_now">
          <a
            href="${item.CarPage}"
            >More info</a
          >
        </div>
      </div>
    </div>
    `;
    tEC.innerHTML = api;
  });
}

open.addEventListener("click", () => {
  SecondSmallBlank.classList.add("opened");
});

close.addEventListener("click", () => {
  SecondSmallBlank.classList.remove("opened");
});
