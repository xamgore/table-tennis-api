### About

Our employees love to play table tennis and need a mobile application 
that would allow them to track own progress across all games. Could you help, please?

The friendly backend department was happy to write a GraphQL API
that provides information about past matches. See [schema.graphql](src/schema.graphql).

<a href="https://i.imgur.com/NmqOFpY.png"><img src="https://i.imgur.com/NmqOFpY.png" width="700"></a>


### Design

At the moment we do not have an application design, so you are free to choose yours.
You can discuss it with us or ask us to send you wireframes. It seems there should be
at least two screens in such an application: with a list of matches and with the addition of a new match.
Something like these maybe?

<a href="https://i.imgur.com/gCjmi6e.png"><img src="https://i.imgur.com/gCjmi6e.png" height="600"></a>
<a href="https://i.imgur.com/qTyzxQt.png"><img src="https://i.imgur.com/qTyzxQt.png" height="600"></a>

The left is a screenshot of [stavka.tv](https://stavka.tv/stavka_latest.apk) application. 
There are lists of matches, leagues' spoilers, a filter "only playing events".
The right screenshot contains two number inputs — the game score "18:19", and some additional fields,
like players' names, the matches' league, etc.


### User stories

* As a player, I want to create a match, so that everyone could know the table is busy.
* As a player, I want to set the match's result, so that everyone could know how cool I am.
* As a player, I want to results of others, so that I could play with them next time.
* As a user, I want to get results updates without a manual refresh, cause I hate it.

### Tasks

1. Write the application (iOS only or Android only is ok)
2. Publish it to Expo (either to AppStore/PlayMarket or as an apk file is also ok)
3. Make a pull request to the original repository


### Notes

If you understand some functionality requires too much time, shave it off. Examples:
1. Only one league instead of a list of leagues — no need to write a `<details>` component
2. Predefined players or games result on the "add new match" screen — no need to write a `<select>` component
3. Updates via "pull to refresh" or no updates at all — no need to use GraphQL subscriptions, etc

If you have any questions, you are very appreciated to ask them. Imagine we're on the same team!


#### Links to read
  - [graphql.org](https://graphql.org)
  - [howtographql.com](https://howtographql.com)
  - [Apollo Client](https://www.apollographql.com/docs/react/)


### How to run API server

```
npm install
node -r ./register.js src/index.ts
```
