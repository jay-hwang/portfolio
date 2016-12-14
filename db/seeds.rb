# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({
  username: "jay",
  password: "password"
})

Project.create({
  user_id: 1,
  title: "CouchBnB",
  description: "CouchBnB (www.couchbnb.xyz) is a clone of AirBnB, built with Ruby on Rails and React. It is a Single-page app with a RESTful API where users can host and book homes for vacation or travel. It also employs AJAX requests to fetch the geo-coords of cities to manipulate state in the database and front-end React Components.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1481593854/Screen_Shot_2016-12-12_at_5.49.25_PM_mdgdkg.png",
  github_url: "https://github.com/jay-hwang/couchbnb",
  live_url: "http://www.couchbnb.xyz/#/splash"
})

Project.create({
  user_id: 1,
  title: "Space Invaders",
  description: "A simple remake of the classic arcade game: Space Invaders. It was written using Vanilla JavaScript, HTML Canvas and CSS. It features power-up items that drop if you manage to hit the mystery UFO! Just follow the link to play.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1481593853/Screen_Shot_2016-12-12_at_5.49.38_PM_mrrvq7.png",
  github_url: "https://github.com/jay-hwang/space_invaders/",
  live_url: "https://jay-hwang.github.io/space_invaders/"
})

Project.create({
  user_id: 1,
  title: "Pabang",
  description: "A script that automates job applications. Built with Ruby and Selenium, it crawls the web and applies to jobs specified by the user. Follow the link to see the source code or to install it.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1481678753/Screen_Shot_2016-12-13_at_5.25.14_PM_xdfu9n.png",
  github_url: "https://github.com/Aelho-Pak/pabang"
})

Project.create({
  user_id: 1,
  title: "Minesweeper",
  description: "This is a remake of the classic game, Minesweeper. Built with Ruby, you can play it directly in your terminal!",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1481681935/genesis_dhfvfg.png",
  github_url: "https://github.com/jay-hwang/minesweeper"
})
