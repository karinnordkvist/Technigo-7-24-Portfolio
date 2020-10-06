const projectArticle = document.querySelectorAll('.feat');

const projects = [
  {
    name: 'SmoothDay',
    description: 'Randomized smoothie-mixer built in Javascript',
    information:
      'Responsive website where you can randomize a smoothierecipe, select a favourite fruit and reveal a recipe.',
    img: './images/karin-nordkvist-smoothday.png',
    tags: ['html5', 'css3', 'javascript'],
  },
  {
    name: 'Pizzabot',
    description: 'Chat bot built in javascript',
    information: 'Responsive website with chat-layout to order pizza.',
    img: './images/karin-nordkvist-pizza.png',
    tags: ['html5', 'css3', 'javascript'],
  },
  {
    name: 'News site',
    description: 'Responsive flexbox-site built with HTML and CSS',
    information:
      'A website for your seasonal flowers built with Flexbox and CSS Grid.',
    img: './images/karin-nordkvist-inseason.png',
    tags: ['html5', 'css3'],
  },
  {
    name: 'Weather app',
    description: 'Responsive API-based weather app',
    information:
      'Built with HTML, CSS and Javascript, fetching data from Openweather API.',
    img: './images/karin-nordkvist-weatherbug.png',
    tags: ['html5', 'css3', 'javascript', 'API'],
  },
];

console.log(projects);

class projectTemplate {
  constructor(
    projectnName,
    projectDescription,
    projectInformation,
    projectImage,
    projectTag
  ) {
    this.projectName = projectnName;
    this.projectDescription = projectDescription;
    this.projectInformation = projectInformation;
    this.projectImage = projectImage;
    this.projectTag = projectTag;
  }
}

// const generateProjectInfo = (projects) => {
//   const projectInfo = projects.map((item) => {
//     return new projectTemplate(
//       item.name,
//       item.description,
//       item.information,
//       item.img,
//       item.tag
//     );
//   });
//   return projectInfo;
// };

// const getProjectHTML = (projects) => {
//     projects.forEach((item, index) => {
//         projectArticle[index].querySelector(".feat-img").src =
//         item.img;
//         projectArticle[index].querySelector(".restaurant-name").innerText =
//         item.restaurantName;
//         projectArticle[index].querySelector(".restaurant-address").innerText =
//         item.restaurantAddress;
//         projectArticle[index].querySelector(".restaurant-rating").innerText =
//             ` ${item.restaurantRating} ${item.restaurantUserRating}`;
//     });

// console.log(generateProjectInfo(projects));
