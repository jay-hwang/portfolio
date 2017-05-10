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
  title: "Couchbnb",
  description: "RESTful, single-page web application emulating Airbnb's functionality. <br/>
  Users can host and book homes for vacation or travel. <br/>
  Utilizes Google Maps API to create a geo-location based search engine.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1481593854/Screen_Shot_2016-12-12_at_5.49.25_PM_mdgdkg.png",
  github_url: "https://github.com/jay-hwang/couchbnb",
  live_url: "http://www.couchbnb.xyz/#/splash",
  stack: "Ruby on Rails, Postgres, JavaScript, React.js, Redux, CSS"
})

Project.create({
  user_id: 1,
  title: "Space Invaders",
  description: "Browser-version of the classic Arcade game: Space Invaders. <br/>
  Features a mystery UFO that drops power-up items, upgrading the player's ship. <br/>
  Leverages Object-Oriented Design & inheritance to maintain DRY code and manageability.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1481593853/Screen_Shot_2016-12-12_at_5.49.38_PM_mrrvq7.png",
  github_url: "https://github.com/jay-hwang/space_invaders/",
  live_url: "https://jay-hwang.github.io/space_invaders/",
  stack: "Vanilla JavaScript, HTML5 Canvas, CSS"
})

Project.create({
  user_id: 1,
  title: "Tackling Trafficking",
  description: "A blog-site dedicated to fighting Human Trafficking by raising awareness and support for victims. <br/>
  Applies responsive-design, employing media queries to allow access across all devices. <br/>
  Improved load-time by utilizing 3rd party cloud storage.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490659985/tackling-trafficking-in-india-_december-2013_-lg_u0htds.jpg",
  github_url: "https://github.com/jay-hwang/tackling_trafficking",
  live_url: "http://www.tacklingtrafficking.xyz",
  stack: "Ruby on Rails, Postgres, JavaScript, React.js, Redux, CSS"
})

Project.create({
  user_id: 1,
  title: "Algorithms & Data Structures",
  description: "A collection of hand rolled algorithms and data structures. Includes implementations of: <br/>
  Static Arrays,
  Dynamic Arrays,
  Hash Maps,
  LinkedLists,
  LRU Caches,
  Binary Search Trees,
  Heaps,
  Heap Sort,
  Quick Sort,
  Merge Sort,
  Topological Sort.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1493431934/algo-ds_gacjfq.jpg",
  github_url: "https://github.com/jay-hwang/algorithms-data-structures",
  live_url: "",
  stack: "Ruby"
})

Project.create({
  user_id: 1,
  title: "Pabang",
  description: "An automated job application script, built with Ruby & Selenium. <br/>
  Implements keyword matching algorithm to filter and query specified data.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490671817/Screen_Shot_2017-03-27_at_8.29.50_PM_jwbfso.png",
  github_url: "https://github.com/jay-hwang/pabang",
  stack: "Ruby, Selenium"
})

Project.create({
  user_id: 1,
  title: "ActiveRecord Lite",
  description: "My implementation of Rails ORM library: ActiveRecord. <br/>
  Implemented key ActiveRecord functionality, including attr_accessor, attr_reader, attr_writer, ::all, ::find. <br/>
  Features ActiveRecord::Associations",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490661548/activerecord_qfxxgm.jpg",
  github_url: "https://github.com/jay-hwang/active-record",
  stack: "Ruby"
})

Project.create({
  user_id: 1,
  title: "Rails Lite",
  description: "My implementation of the popular web-framework: Ruby on Rails.
  Designed & implemented: <br/>
  HTTP request-response cycle,
  Rails' Rack Server,
  Rails' ControllerBase class,
  Cookies,
  Custom Router",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490672152/Screen_Shot_2017-03-27_at_8.34.59_PM_ylguwz.png",
  github_url: "https://github.com/jay-hwang/rails-lite",
  live_url: "",
  stack: "Ruby"
})

Project.create({
  user_id: 1,
  title: "Site-Blocker",
  description: "Spending too much time watching Netflix or browsing FaceBook? <br/>
  Use Site-Blocker, a Google Chrome extension you can use to block any site at any time. <br/>
  The extension will block the specified sites at the selected times, keeping you focused and productive.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490659657/Screen_Shot_2017-03-27_at_5.01.48_PM_stdtny.png",
  github_url: "https://github.com/jay-hwang/site-blocker",
  live_url: "",
  stack: "JavaScript ES6, HTML, CSS"
})

Project.create({
  user_id: 1,
  title: "Minesweeper",
  description: "Terminal-based version of the classic computer game: Minesweeper. <br/>
  Utilizes Breadth-First-Search for dynamic tile traversal. <br/>
  Coming soon for browsers!",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490658805/minesweeper_v0mzel.png",
  github_url: "https://github.com/jay-hwang/minesweeper",
  stack: "Ruby"
})

Project.create({
  user_id: 1,
  title: "LRU Cache",
  description: "Hand-rolled implementation of an LRU Cache. <br/>
  Features custom rendition of Hash Map and Linked List. <br/>
  Implemented hashing function to hash various data types into a deterministic hash.",
  image_url: "https://res.cloudinary.com/ddgtwtbre/image/upload/v1490661634/LRU-Cache-650x296_yrwxsm.png",
  github_url: "https://github.com/jay-hwang/lru_cache",
  stack: "Ruby"
})


# Project.create({
#   user_id: 1,
#   title: "React Band",
#   description: "",
#   image_url: "",
#   github_url: "",
#   live_url: ""
# })
