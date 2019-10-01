## Features

- Write notes. 
- Can comment on every note.
- Shows the log of all actions.
- No login, users can change ID whenver users want.

## URL

- GET : NOTE
- POST : NOTE
- GET : PROFILE
- POST : PROFILE
- GET : HOME
- GET : WRITE

## Schemas

- User
  id
  name
  password
  nicknames

- Nickname
  id
  name
  

- NOTE
  id
  title
  text
  comment
  creatorID = userID
  createdAt
  
- Comment
  id
  title
  text
  createdAt
  creatorName
  creatorID



