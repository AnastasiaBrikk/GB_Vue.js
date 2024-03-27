import { createStore } from "vuex";

export default createStore({
  state: {
    //ArticlesComponent:
    tagArticle: [
      {
        id: 1,
        tag: "Kitchen",
        title: "Let’s Get Solution for Building Construction Work",
        img: require("@/assets/img/article-kitchen1.jpg"),
        text1: "",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        date: "26 December, 2022",
      },
      {
        id: 2,
        tag: "Kitchen",
        title: "Design sprints are great",
        img: require("@/assets/img/article-kitchen2.jpg"),
        text1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        date: "25 December, 2023",
      },
    ],
    articles: [
      {
        id: 1,
        tag: "Kitchen",
        title: "Let’s Get Solution for Building Construction Work",
        img: require("@/assets/img/article-kitchen1.jpg"),
        text1: "",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don't look even slightly believable. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        date: "26 December, 2022",
      },
      {
        id: 2,
        tag: "Kitchen",
        title: "Design sprints are great",
        img: require("@/assets/img/article-kitchen2.jpg"),
        text1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in. Contrary to popular belief. There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        date: "25 December, 2023",
      },
      {
        id: 3,
        tag: "Bedroom",
        title: "Design sprints are great",
        img: require("@/assets/img/article-bedroom1.jpg"),
        text1: "",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        date: "30 December, 2022",
      },
      {
        id: 4,
        tag: "Bedroom",
        title: "Design sprints are great",
        img: require("@/assets/img/article-bedroom2.jpg"),
        text1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        text2: "",
        date: "31 December, 2023",
      },
      {
        id: 5,
        tag: "Building",
        title: "Let’s Get Solution for Building Construction Work",
        img: require("@/assets/img/article-building1.png"),
        text1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        text2: "",
        date: "24 December, 2023",
      },
      {
        id: 6,
        tag: "Building",
        title: "Let’s Get Solution for Building Construction Work",
        img: require("@/assets/img/article-building2.jpg"),
        text1: "",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        date: "25 December, 2023",
      },
      {
        id: 7,
        tag: "Livingroom",
        title: "Let’s Get Solution for Building Construction Work",
        img: require("@/assets/img/article-livingroom1.jpg"),
        text1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        text2:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
        date: "21 December, 2022",
      },
      {
        id: 8,
        tag: "Livingroom",
        title: "Let’s Get Solution for Building Construction Work",
        img: require("@/assets/img/article-livingroom2.jpg"),
        text1:
          "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary. Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
        text2: "",
        date: "28 December, 2023",
      },
    ],
    tagsArticle: ["Kitchen", "Bedroom", "Building", "Livingroom"],
    currentTagArticle: "Kitchen",

    //ArticlesProjectComponent:
    tagProject: [
      {
        id: 1,
        img: require("@/assets/img/project-tag2-img1.jpg"),
        title: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 2,
        img: require("@/assets/img/project-tag2-img2.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 3,
        img: require("@/assets/img/project-tag2-img3.jpg"),
        title: "Minimal Bedroom table",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 4,
        img: require("@/assets/img/project-tag2-img4.jpg"),
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 5,
        img: require("@/assets/img/project-tag2-img5.jpg"),
        title: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 6,
        img: require("@/assets/img/project-tag2-img6.jpg"),
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 7,
        img: require("@/assets/img/project-tag2-img7.jpg"),
        title: "System Table",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 8,
        img: require("@/assets/img/project-tag2-img8.jpg"),
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
    ],
    projects: [
      {
        id: 1,
        img: require("@/assets/img/project-tag2-img1.jpg"),
        title: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 2,
        img: require("@/assets/img/project-tag2-img2.jpg"),
        title: "Classic Minimal Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 3,
        img: require("@/assets/img/project-tag2-img3.jpg"),
        title: "Minimal Bedroom table",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 4,
        img: require("@/assets/img/project-tag2-img4.jpg"),
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 5,
        img: require("@/assets/img/project-tag2-img5.jpg"),
        title: "Minimal Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 6,
        img: require("@/assets/img/project-tag2-img6.jpg"),
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 7,
        img: require("@/assets/img/project-tag2-img7.jpg"),
        title: "System Table",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 8,
        img: require("@/assets/img/project-tag2-img8.jpg"),
        title: "Modern Bedroom",
        category: "Decor / Artchitecture",
        type: "Bedroom",
      },
      {
        id: 9,
        img: require("@/assets/img/project-tag1-img1.jpg"),
        title: "Modern Bathroom",
        category: "Decor / Artchitecture",
        type: "Bathroom",
      },
      {
        id: 10,
        img: require("@/assets/img/project-tag1-img2.jpg"),
        title: "Modern Bathroom",
        category: "Decor / Artchitecture",
        type: "Bathroom",
      },
      {
        id: 11,
        img: require("@/assets/img/project-tag1-img3.jpg"),
        title: "Modern Bathroom",
        category: "Decor / Artchitecture",
        type: "Bathroom",
      },
      {
        id: 12,
        img: require("@/assets/img/project-tag1-img4.jpg"),
        title: "Modern Bathroom",
        category: "Decor / Artchitecture",
        type: "Bathroom",
      },
      {
        id: 13,
        img: require("@/assets/img/project-tag1-img5.jpg"),
        title: "Modern Bathroom",
        category: "Decor / Artchitecture",
        type: "Bathroom",
      },
      {
        id: 14,
        img: require("@/assets/img/project-tag3-img1.jpg"),
        title: "Modern Kitchen",
        category: "Decor / Artchitecture",
        type: "Kitchen",
      },
      {
        id: 15,
        img: require("@/assets/img/project-tag3-img2.jpg"),
        title: "Modern Kitchen",
        category: "Decor / Artchitecture",
        type: "Kitchen",
      },
      {
        id: 16,
        img: require("@/assets/img/project-tag3-img3.jpg"),
        title: "Modern Kitchen",
        category: "Decor / Artchitecture",
        type: "Kitchen",
      },
      {
        id: 17,
        img: require("@/assets/img/project-tag4-img1.jpg"),
        title: "Modern Living Area",
        category: "Decor / Artchitecture",
        type: "Living Area",
      },
      {
        id: 18,
        img: require("@/assets/img/project-tag4-img2.jpg"),
        title: "Modern Living Area",
        category: "Decor / Artchitecture",
        type: "Living Area",
      },
      {
        id: 19,
        img: require("@/assets/img/project-tag4-img3.jpg"),
        title: "Modern Living Area",
        category: "Decor / Artchitecture",
        type: "Living Area",
      },
      {
        id: 20,
        img: require("@/assets/img/project-tag4-img4.jpg"),
        title: "Modern Living Area",
        category: "Decor / Artchitecture",
        type: "Living Area",
      },
      {
        id: 21,
        img: require("@/assets/img/project-tag4-img5.jpg"),
        title: "Modern Living Area",
        category: "Decor / Artchitecture",
        type: "Living Area",
      },
      {
        id: 22,
        img: require("@/assets/img/project-tag4-img6.jpg"),
        title: "Modern Living Room",
        category: "Decor / Artchitecture",
        type: "Living Area",
      },
    ],
    tags: ["Bathroom", "Bedroom", "Kitchen", "Living Area"],
    currentTag: "Bedroom",

    //ProjectHomeComponent:
    projectsHome: [
      {
        id: 1,
        img: require("@/assets/img/projects-item1.jpg"),
        title: "Modern Kitchan",
        category: "Decor / Artchitecture",
      },
      {
        id: 2,
        img: require("@/assets/img/projects-item2.jpg"),
        title: "Modern Kitchan",
        category: "Decor / Artchitecture",
      },
      {
        id: 3,
        img: require("@/assets/img/projects-item3.jpg"),
        title: "Modern Kitchan",
        category: "Decor / Artchitecture",
      },
      {
        id: 4,
        img: require("@/assets/img/projects-item4.jpg"),
        title: "Modern Kitchan",
        category: "Decor / Artchitecture",
      },
    ],

    //ProjectDetaillsPage:
    title: "Minimal Look Bedrooms",
    text1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.",
    text2:
      "In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
  },
  getters: {
    //Обрабатывает и передаёт данные из state не меняя его
  },
  mutations: {
    //Методы которые изменяют state, синхронны

    filterArticle(state, currentTagArticle) {
      state.tagArticle = [];
      state.articles.forEach(article => {
          if(article.tag === currentTagArticle) {
          state.tagArticle.push(article);
          state.currentTagArticle = currentTagArticle;
          }
      });
  },

    //ArticlesProjectComponent:
    filterProject(state, currentTag) {
      state.tagProject = [];
      state.projects.forEach((project) => {
        if (project.type === currentTag) {
          state.tagProject.push(project);
          state.currentTag = currentTag;
        }
      });
    },
  },
  actions: {
    //Методы которые не изменяют state, могут работать асинхронно
  },
  modules: {},
});
