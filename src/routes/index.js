
const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login}
];

const privateRoutes = [
    // { path: '/dashboard', component: Dashboard, layout: MasterLayout},
    // { path: '/dashboard/tag', component: TagTable, layout: MasterLayout },
    // { path: '/dashboard/film', component: FilmTable, layout: MasterLayout },
];

export { publicRoutes, privateRoutes };