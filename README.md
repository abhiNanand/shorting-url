# shorting-url

URL Shortener
This is a simple and efficient URL Shortening Service built using Node.js, Express.js, and MongoDB.
It allows users to shorten long URLs into compact, shareable links, track visit history, and redirect users to the original website.

Key Features
Shorten Long URLs into unique, easy-to-share short links
Automatic Redirects to the original URL when the short link is accessed
Visit Tracking — stores each visit with a timestamp for analytics
MongoDB Database for storing and retrieving URL mappings efficiently
REST API Endpoints for creating and retrieving shortened URLs

Tech Stack
Backend: Node.js, Express.js
Database: MongoDB, Mongoose ODM
Tools: Nodemon (for development)

How It Works
User sends a long URL via API request (POST request)
Server generates a unique short ID using a random string generator
The mapping { shortId → originalURL } is saved in MongoDB
When someone visits the short URL, the app looks up the original URL and redirects
Each visit is logged in visitHistory with a timestamp for analytics

 




