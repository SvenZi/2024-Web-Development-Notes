/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { Redirect } from '@adonisjs/core/http';
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')


router.on('/login').render('pages/login')

router.post('/login', async ({ request }) => {
    const name = request.input('name');
    const password = request.input('password');

    return name
});