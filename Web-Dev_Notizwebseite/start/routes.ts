/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'
import hash from '@adonisjs/core/services/hash'

router.get('/', async({ view })=>{
    return view.render('pages/home')
})


router.get('/login', async({view}) => {
    return view.render('pages/login')
});

router.get('/erstellen', async ({ view }) => {
    return view.render('pages/notiz_erstellen')
});

router.post('/login', async ({ request }) => {
    const name = request.input('name');
    const password = request.input('password');

    return name
});