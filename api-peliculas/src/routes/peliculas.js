const { Router } = require('express')

const {
  listarPeliculas,
  obtenerPelicula,
  crearPelicula,
  actualizarPelicula,
  eliminarPelicula,
  listarResenas,
  crearResena
} = require('../controllers/peliculasController')

const router = Router()

// Rutas anidadas: reseñas de una película
router.get('/:id/resenas', listarResenas)
router.post('/:id/resenas', crearResena)

// Rutas de películas
router.get('/', listarPeliculas)
router.get('/:id', obtenerPelicula)
router.post('/', crearPelicula)
router.put('/:id', actualizarPelicula)
router.delete('/:id', eliminarPelicula)

module.exports = router