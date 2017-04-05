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
  title: "Tackling Trafficking",
  description: "Blog site raising awareness and support for victims of global trafficking, child-labor and modern-day slavery.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490659985/tackling-trafficking-in-india-_december-2013_-lg_u0htds.jpg",
  github_url: "https://github.com/jay-hwang/tackling_trafficking",
  live_url: "http://www.tacklingtrafficking.xyz"
  })

Project.create({
  user_id: 1,
  title: "Pabang",
  description: "A bot that automates job applications. Built with Ruby and Selenium, it crawls the web and applies to jobs specified by the user. Follow the link to see the source code or to install it.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490671817/Screen_Shot_2017-03-27_at_8.29.50_PM_jwbfso.png",
  github_url: "https://github.com/Aelho-Pak/pabang"
})

Project.create({
  user_id: 1,
  title: "ActiveRecord Lite",
  description: "This is my 'lite' version of Rails ActiveRecord. It features the basic functionality of ActiveRecord. You can create attr_accessor/reader/writer, make database queries like Object.all, Object.find, and you can also make belongs_to, has_many, has_one_through associations.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490661548/activerecord_qfxxgm.jpg",
  github_url: "https://github.com/jay-hwang/active-record"
})

Project.create({
  user_id: 1,
  title: "Rails Lite",
  description: "In this project, I implemented my own rendition of Ruby on Rails. The purpose of this project is to gain a better understanding of the inner-workings of Rails. Mainly the following:

  HTTP request-response cycle
  Rails' Rack Server
  Rails' ControllerBase class
  Cookies
  Custom Router",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490672152/Screen_Shot_2017-03-27_at_8.34.59_PM_ylguwz.png",
  github_url: "https://github.com/jay-hwang/rails-lite",
  live_url: ""
})

Project.create({
  user_id: 1,
  title: "LRU Cache",
  description: "This is my LRU Cache. The LRU Cache is made up of a Hash Map and a Linked List, so I created my own rendition of a Hash Map and a Linked List as well. The hash map needs a hashing function to hash different data types into a deterministic hash, so I also created the necessary hashing functions to hash different data types.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490661634/LRU-Cache-650x296_yrwxsm.png",
  github_url: "https://github.com/jay-hwang/lru_cache"
})

Project.create({
  user_id: 1,
  title: "Minesweeper",
  description: "This is a remake of the classic game, Minesweeper. Built with Ruby, you can play it directly in your terminal!

  Coming soon for browsers!",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490658805/minesweeper_v0mzel.png",
  github_url: "https://github.com/jay-hwang/minesweeper"
})

Project.create({
  user_id: 1,
  title: "Site-Blocker",
  description: "Spending too much time watching Netflix or browsing FaceBook? Use Site-Blocker, a Google Chrome extension you can use to block any site at any time. You specify the site url and times you don't want to be able to access it, and the extension   will keep you from getting distracted.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490659657/Screen_Shot_2017-03-27_at_5.01.48_PM_stdtny.png",
  github_url: "https://github.com/jay-hwang/site-blocker",
  live_url: ""
})

# Project.create({
#   user_id: 1,
#   title: "React Band",
#   description: "",
#   image_url: "",
#   github_url: "",
#   live_url: ""
# })
