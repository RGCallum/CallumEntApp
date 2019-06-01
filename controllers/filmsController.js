const User = require('../models/User')
const Film = require('../models/Film')

const filmsController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(req.params.userId).populate('films')
            .then((user) => {
                res.send(user.films)
            })
    },
    show: (req, res) => {
        var filmId = req.params.filmId
        Film.findById(filmId)
            .then((film) => {
                res.send(film)
            })
    },
    delete: (req, res) => {
        var filmId = req.params.filmId
        Film.findByIdAndDelete(filmId)
            .then(() => {
                res.send(200)
            })
    },
    update: (req, res) => {
        var filmId = req.params.filmId
        Film.findByIdAndUpdate(filmId, req.body, { new: true })
            .then((updatedFilm) => {
                updatedFilm.save()
                res.send(updatedFilm)
            })
    },
    create: (req, res) => {
        var userId = req.params.userId
        User.findById(userId)
            .then((user) => {
                console.log(user)
                Film.create(req.body)
                    .then((newFilm) => {
                        console.log(newFilm)
                        user.films.push(newFilm)
                        user.save()
                        res.send(newFilm)
                    })
            })
    }

}

module.exports = filmsController