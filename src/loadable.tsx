import Loadable from 'react-loadable';

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "IndexChunk" */ './pages/home'),
  loading: () => null,
  modules: ['IndexChunk'],
});

const About = Loadable({
  loader: () => import(/* webpackChunkName: "AboutChunk" */ './pages/about'),
  loading: () => null,
  modules: ['AboutChunk'],
})

export default {
  About,
  Home,
};
