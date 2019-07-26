FRONT END:

Description field:  A UI for a tracker to record your progress and notes from hiking New Hampshire's 4000-foot peaks

### Summary

This app provides a journal that allows the user to record which of the [New Hampshire 48 4,000-footers](http://4000footers.com/nh.shtml) they have hiked, adding descriptions of their hike and uploading photos.  This repository contains the client-side code for the application.

Link to back-end repository: <https://github.com/wcons/mountain-api-express>

Link to deployed application: <https://wcons.github.io/mountain-client-react>

Link to Heroku deployment:

### Technologies Used
  * React
  * Bootstrap

### Oustanding Issues/Future Changes

In future iterations, I hope to include many more of my originally planned features including:  * Maps displaying pins with mountain locations
  * Functionality to view only map pins for my mountains, or view all 4,000 footers on the map
  * Add photo uploads for photos of your hike
  * Add a "date summited" field
  * Add a separate field for username, in addition to email, and display this as "Trail name: " on the header for logged in users
  * Make lists of mountains public, but only editable by the owner

### Planning, process, and problem solving

In planning this application, I wanted to make sure I had a working project idea, but also left room to challenge myself as time allowed.  I planned a project that would show basic CRUD operations, integrate a 3rd-party map API, use seed data to create a user-mountain relationship using a prepopulated list of the 48 mountains, and include image uploads.

I had to significantly scale back what I wanted to do in order to produce a working app for my MVP.  This necessitated going back and rescoping, removing anything that wasn't essential.  I stripped everything down to basic CRUD operations as a first iteration.

Being new to React, I had to do a lot of troubleshooting to make sure my UI components worked correctly together.  I learned a lot doing this, but in the interest of meeting my deadline, I realize I might have been better served to choose something I was more familiar with for something with such a tight turnaround.

### Wireframes

[Homepage](https://i.imgur.com/wW7e8Il.png)
[Sign-up](https://i.imgur.com/9WrUTmQ.png)
[Sign-in](https://i.imgur.com/hyST86y.png)
[Edit Mountain](https://i.imgur.com/aJJLcgo.png)

### User Stories

Not all were implemented, some were removed from the scope:

  * As a user, I want to be able to choose a mountain I've climbed and add my own photos and decription of my trip.

  * As a user, I want to be able to edit or delete information for mountains I've entered.

  * As a user, I want to be able to view other users' mountains without being able to edit any but my own.

  * As a user, I want to be able to view a list of all of my mountains, and if I'm logged in, add to or update it.

  * As a user, I want to be able to add a mountain to the list of mountains I've climbed by clicking an "add" button; choosing from a list, dropdown or autocomplete; and adding my own personalized photo and description to submit the form.

  * As a developer, I want user photo uploads to be added to an S3 bucket so that I can store the URL for the photo in my data store rather than the photo itself.

Stretch goals:

  * As a user, I want to be able to see a map of each the mountains I've climbed on my page.

  * As a user, I want to be able to toggle the map to see my mountains, or all 48 mountains.

### Screenshot

### Installation & Setup instructions
