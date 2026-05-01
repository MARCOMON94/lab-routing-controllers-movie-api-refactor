// src/data/peliculas.js

let peliculas = [
  {
    id: 1,
    titulo: 'Inception',
    director: 'Christopher Nolan',
    anio: 2010,
    genero: 'ciencia-ficcion',
    nota: 8.8
  },
  {
    id: 2,
    titulo: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    anio: 1994,
    genero: 'crimen',
    nota: 8.9
  },
  {
    id: 3,
    titulo: 'El Señor de los Anillos',
    director: 'Peter Jackson',
    anio: 2001,
    genero: 'fantasia',
    nota: 8.8
  },
  {
    id: 4,
    titulo: 'Alien',
    director: 'Ridley Scott',
    anio: 1979,
    genero: 'ciencia-ficcion',
    nota: 8.5
  },
  {
    id: 5,
    titulo: 'El viaje de Chihiro',
    director: 'Hayao Miyazaki',
    anio: 2001,
    genero: 'animacion',
    nota: 8.6
  }
]

let resenas = [
  {
    id: 1,
    pelicula_id: 1,
    autor: 'María',
    texto: 'Obra maestra',
    puntuacion: 9
  },
  {
    id: 2,
    pelicula_id: 1,
    autor: 'Carlos',
    texto: 'Confusa pero brillante',
    puntuacion: 8
  },
  {
    id: 3,
    pelicula_id: 2,
    autor: 'Ana',
    texto: 'Clásico imprescindible',
    puntuacion: 10
  }
]

let nextPeliculaId = 6
let nextResenaId = 4

const db = {
  getAll: (genero) => {
    if (genero) {
      return peliculas.filter(pelicula => pelicula.genero === genero)
    }

    return peliculas
  },

  getById: (id) => {
    return peliculas.find(pelicula => pelicula.id === id) || null
  },

  create: (datos) => {
    const nuevaPelicula = {
      id: nextPeliculaId++,
      ...datos
    }

    peliculas.push(nuevaPelicula)
    return nuevaPelicula
  },

  update: (id, datos) => {
    const index = peliculas.findIndex(pelicula => pelicula.id === id)

    if (index === -1) {
      return null
    }

    peliculas[index] = {
      ...peliculas[index],
      ...datos
    }

    return peliculas[index]
  },

  delete: (id) => {
    const index = peliculas.findIndex(pelicula => pelicula.id === id)

    if (index === -1) {
      return null
    }

    return peliculas.splice(index, 1)[0]
  },

  getStats: () => {
    const conNota = peliculas.filter(pelicula => pelicula.nota !== null)

    if (conNota.length === 0) {
      return {
        media: null,
        total: peliculas.length,
        conNota: 0
      }
    }

    const suma = conNota.reduce((acc, pelicula) => acc + pelicula.nota, 0)
    const media = suma / conNota.length

    return {
      media: Number(media.toFixed(2)),
      total: peliculas.length,
      conNota: conNota.length
    }
  },

  getResenas: (peliculaId) => {
    return resenas.filter(resena => resena.pelicula_id === peliculaId)
  },

  createResena: (peliculaId, datos) => {
    const nuevaResena = {
      id: nextResenaId++,
      pelicula_id: peliculaId,
      ...datos
    }

    resenas.push(nuevaResena)
    return nuevaResena
  }
}

module.exports = db