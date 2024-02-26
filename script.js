let searchBtn = document.querySelector(".btn");

let outputNews = document.querySelector(".output-news");

searchBtn.addEventListener("click", () => {
  let inputValue = document.querySelector(".input").value;
  let selectLang = document.querySelector("#language").value;
  let selectSort = document.querySelector("#sort").value;

  fetch(
    `https://newsapi.org/v2/everything?q=${inputValue}&language=${selectLang}&sortBy=${selectSort}&apiKey=4de97d916b5e4e0ca93ccc177458d61b`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      outputNews.innerHTML = "";

      data.articles.forEach((element) => {
        console.log(element);
        let title = element.title;
        let content = element.content;
        let image = element.urlToImage;
        let sourceBtn = element.url;
        if (image === null) {
          image = "./assets/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
        }
        outputNews.innerHTML += `
        <article> 
        <h3>${title}</h3>
        <p>${content}</p> 
        <img src="${image}">
        
        <a href="${sourceBtn}" target="_blank">More Info</a>
        </article>`;
      });
    })

    .catch((error) => {
      console.error("Error fetching", error);
    });
});
