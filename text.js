
const jsonUrl = "https://jwonchi.github.io/kopoclass/JSON/news.json";
const newsContainer = document.getElementById("container"); 
console.log("newsContainer:", newsContainer);
fetch(jsonUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.news[0].title);

    data.news.forEach((item, index) => {
        console.log(item);
      const articleDiv = document.createElement("div");
      articleDiv.className = "news-article";

      const titleElement = document.createElement("div");
      titleElement.className = "aaa";
      titleElement.textContent = item.title;

      const contentElement = document.createElement("div");
      contentElement.textContent = item.content;

      articleDiv.appendChild(titleElement);
      articleDiv.appendChild(contentElement);
      newsContainer.appendChild(articleDiv);
    });
  })
  .catch((error) => {
    cole.ensorror("error", error);
  });

//   datas.array.forEach((element) => {
//     const li = document.createElement("li");
//     li.innerHTML = `${task}`;
//     document.getElementById("1").appendChild(li);
//   });