import { createRouter, createWebHistory } from 'vue-router';
import FormList from '../components/FormList.vue'
import AddForm from '../components/AddForm.vue';
import EditForm from '../components/EditForm.vue';
import DeleteForm from '../components/DeleteForm.vue';
import NotFound from '../components/NotFound.vue';

const routes = [
  {
    path: '/users/list',
    component: FormList
  },
  {
    path: '/users/add',
    component: AddForm
  },
  {
    path: '/users/edit/:userId',
    component: EditForm,
    
  },
  {
    path: '/users/delete/:userId',
    component: DeleteForm,
    
  },
  {
    path: '/:notFound',
    name: 'notFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
