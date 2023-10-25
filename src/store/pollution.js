import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

const router = new Router({
  // ...autres routes...

  routes: [
    // ...autres routes...

    // Créez une route pour recevoir les données POST
    {
      path: '/recevoir-donnees',
      name: 'ReceiveData',
      component: {
        beforeRouteEnter (to, from, next) {
          // Utilise Axios pour récupérer les données du corps de la requête
          axios.post('/recevoir-donnees', to.body)
            .then(response => {
              // Faites quelque chose avec les données, par exemple, affichez-les dans le composant
              console.log(response.data)
              next()
            })
            .catch(error => {
              console.error(error)
              next(false)
            })
        }
      }
    }
  ]
})

export default router
