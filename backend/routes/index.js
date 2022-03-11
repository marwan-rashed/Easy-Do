import auth from './auth.js';

export default function(baseURL, app) {
    app.use(baseURL + '/auth', auth);
}