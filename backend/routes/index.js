import auth from './auth.js';
import lists from './lists.js';

export default function(baseURL, app) {
    app.use(baseURL + '/auth', auth);
    app.use(baseURL + '/lists', lists);
}