const loadAllNewsCategories = async() => {
      const url = `https://openapi.programming-hero.com/api/news/categories`;
      const res = await fetch(url);
      const data = await res.json();
     setALlMenu(data.data.news_category)
     // displayNewsCategories(data.data.news_category);
}

const setALlMenu = (data) => {
      // console.log(data);
      const newsMenu = document.getElementById('all-menu')
      for (const news of data) {
            // console.log(news.category_name); 
            const li = document.createElement('li');
            li.innerHTML = `<a onclick = "loadNewses('id')" class="nav-link" href="#">${news.category_name}</a>`;
            newsMenu.appendChild(li);
            
      }
}

const loadNewses = (id) => {
      const url = `https://openapi.programming-hero.com/api/news/category/01`;
      fetch(url)
      .then(res => res.json())
      .then(data => displayNews(data.data)) 
      
      
}
// display no news found

const noNews = document.getElementById('no-news-found');
// if (data.length === 0) {
//       noNews.classList.remove('d-none')
// }
// else {
//       noNews.classList.add('d-none')
// }
// display all news

const displayNews = news => {
      const newsContainer = document.getElementById('news-container')
      news.forEach(data => {
            const newsDiv = document.createElement('div')
            newsDiv.classList.add('col');
            newsDiv.innerHTML = `
            <div class="card">
                  <img src="${data.image_url}" class="card-img-top" alt="...">
                  <div class="card-body">
                        <h3 class="card-title">${data.title}</h3>
                        <p class="card-text">${data.details}</p>
                  </div>
            </div>
            `;
            newsContainer.appendChild(newsDiv);
            
      });
      console.log(news);
}



loadNewses()

loadAllNewsCategories()















// https://openapi.programming-hero.com/api/news/category/01
// const displayNewsCategories = categories => {
//       const catagoriesContainer = document.getElementById('categories-container');
//       categories.forEach(category => {
//             // console.log(category)
//             const categoryDiv = document.createElement('div');
//             categoryDiv.classList.add('col');
//             categoryDiv.innerHTML = `
//             <div class="card">
//                   <img src="..." class="card-img-top" alt="...">
//                   <div class="card-body">
//                         <h5 class="card-title">Card title</h5>
//                         <p class="card-text">This is a longer card with supporting text below as
//                         a natural lead-in to additional content. This content is a little
//                         bit longer.</p>
//                   </div>
//             </div>
//             `;
//             catagoriesContainer.appendChild(categoryDiv);           
//       });

// }
   



