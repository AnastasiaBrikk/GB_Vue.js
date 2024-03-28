import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import BlogPage from "../pages/BlogPage.vue";
import BlogDetails from "@/pages/BlogDetails.vue";
import ProjectPage from "../pages/ProjectPage.vue";
import ProjectDetailsPage from "@/pages/ProjectDetailsPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/blog",
    name: "BlogPage",
    component: BlogPage,
  },
  {
    path: "/blog/details",
    name: 'BlogDetails',
    component: BlogDetails,
  },
  {
    path: "/project",
    name: "ProjectPage",
    component: ProjectPage,
  },
  {
    path: "/project/details",
    name: 'ProjectDetailsPage',
    component: ProjectDetailsPage,
  },
  {
    path: "/:CatchAll(.*)",
    name: "404",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    //при переходе на новую страницу поднимает наверх
    return {
      top: 0,
    };
  },
});

export default router;
