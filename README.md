# Barrack-Thar-Bazaar
The Barrack-Thar Bazaar caters to any and all adventurers, caravaneers,  guards, and soldiers! With dazzling products from every realm you'll not find our wares anywhere.

# Overview

The idea of Barrak-Thar is a fantastical shop interface, in the spirit of final fantasy, Dungeons and Dragons, and Amazon (weird combo, I know). It will have a search function, a randomized database of wares with prices set a bit too high so characters have the chance to bargain. The visual design is going to be "Eclectic antique store" mixed with the traditional arms store found in adventure movies.

# Seed or API?

I'll be using seeded data as I don't know if there is anyone who has an API of AoS:S items and materials. this will be the basic structure

item
1. name (string)
2. price (interger)
3. description (string)
4. stinger (string)
5. rarity (interger)
7. isDisplayed (t/f)

the most interesting parts will be "rarity" and "isDisplayed", "rarity" will be a number 1-100 and will denote a percentage chance for the item to appear within the bazaar. This will be part of the seeding process. For instance, a regular one-handed sword will be around a 85-90% chance to be seeded into the database when a user logs in, but a magical item, say a powerful arcane tome, may have as little as a 3-4% chance to seed in. This way each time someone visits the bazaar the wares will change.


# User Stories

As a user I want to...

1. Sign up
2. sign in
3. sign out
4. see items only available to me (based on relationship with owner?)
6. Have a good interaction with a splash page, which will ask for log-in information
7. Be directed to a menu where you can look through a few catagories, including special deals
8. Have a selection of fantastic goods that are listed in a index fashion
9. Be able to open each individual item for a closer look as well as expanded description
10. Be able to place items into a cart

# Wireframes
<img width="849" alt="Screen Shot 2022-10-10 at 3 18 48 AM" src="https://user-images.githubusercontent.com/112370685/194815534-86ecb023-21cc-4557-9d1b-46f182055c58.png">

<img width="1029" alt="Screen Shot 2022-10-10 at 3 22 29 AM" src="https://user-images.githubusercontent.com/112370685/194815898-f986a7c8-138f-44fc-a903-80982ca000e4.png">

<img width="1030" alt="Screen Shot 2022-10-10 at 3 25 15 AM" src="https://user-images.githubusercontent.com/112370685/194816286-b0f153f8-eac7-4d46-b3aa-c463f015d301.png">


# ERD (still fuzzy on how these work)
![Database ER diagram (crow's foot)](https://user-images.githubusercontent.com/112370685/194815004-8a9dc24d-7ba1-47b9-a987-95c2955a843b.jpeg)

# Basic schedule
1. Monday - Create db basics (mongoose etc.), and start to create models
2. Tuesday - as yesterday but finish, creating all the db information will be fun and time consuming, I intend there to be around 40 objects that will be seeded
3. Wednesday - start to create routes, allowing users to log in, log out, sign up, and view products/items
4. thursday - liquidJS for the rest of the time. I want it to look very smooth
