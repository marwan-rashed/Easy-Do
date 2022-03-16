import auth from './auth.js';
import lists from './lists.js';
import tasks from './tasks.js';
import profile from './profile.js';

export default function(baseURL, app) {
    app.use(baseURL + '/auth', auth);
    app.use(baseURL + '/lists', lists);
    app.use(baseURL + '/tasks', tasks);
    app.use(baseURL + '/profile', profile);
}