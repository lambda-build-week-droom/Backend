# Droom API

[Proposal](#proposal)

## HEROKU DEPLOYMENT

> https://droom-backend.herokuapp.com/

---

### START SERVER

- run `yarn server`

---

## NAVIGATION

### USERS

[Register](#register) | [Login](#login) | [Get All Users](#allusers)

## ENDPOINTS

## Users

1. `Register User` <a name='register'></a>

   _Method URL: /users/register_

   _HTTP method: [POST]_

   ### Headers

   | name         | type   | required | description              |
   | ------------ | ------ | -------- | ------------------------ |
   | Content-type | String | Yes      | Must be application/json |

   ### Body

   | name      | type   | required | description              |
   | --------- | ------ | -------- | ------------------------ |
   | firstName | String | No       | required                 |
   | lastName  | String | No       | required                 |
   | email     | String | Yes      | required, must be unique |
   | password  | String | Yes      | required                 |

   _example_

   ```
       {
           firstName: "John",
           lastName: "Doe",
           email: "johnDoe@test.com",
           password: "password123"
       }
   ```

2. `Login User` <a name='login'></a>

   _Method URL: /users/login_

   _HTTP method: [POST]_

   ### Headers

   | name         | type   | required | description              |
   | ------------ | ------ | -------- | ------------------------ |
   | Content-type | String | Yes      | Must be application/json |

   ### Body

   | name     | type   | required | description |
   | -------- | ------ | -------- | ----------- |
   | email    | String | Yes      | required    |
   | password | String | Yes      | required    |

   _example_

   ```
       {
           email: "johnDoe@test.com",
           password: "password123"
       }
   ```

   > On success return object

   ```
        {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoyMSwiaWF0IjoxNTUyMTczNDgzLCJleHAiOjE1NTI2MDU0ODN9.AIYdpeMoNtT3FHrSc1_Srrj3dLQfHl1gRNK3hicOe2M",
            "userInfo": {
                "id": 21,
                "firstName": "mike",
                "lastName": "landers",
                "email": "test@test.com",
                "occupation": null,
                "experience": null,
                "interests": null
            }
        }
   ```

3) `Get All Users` <a name='allusers'></a>

   _Method URL: /users_

   _HTTP method: [POST]_

   ### Headers

   | name          | type   | required | description              |
   | ------------- | ------ | -------- | ------------------------ |
   | Content-type  | String | Yes      | Must be application/json |
   | Authorization | String | Yes      | Token                    |

   ### Response

   > On success return array

   ```
       [
           {
               "id": 1,
               "firstName": "Orlando",
               "lastName": "Nitzsche",
               "occupation": "Regional Functionality Strategist",
               "experience": "experience",
               "interests": "interests"
           },
           {
               "id": 2,
               "firstName": "Delphine",
               "lastName": "Shanahan",
               "occupation": "Product Factors Orchestrator",
               "experience": "experience",
               "interests": "interests"
           }
       ]
   ```

<a name='proposal'></a>

# Proposal

- What problem does your app solve?

- Be as specific as possible; how does your app solve the problem?

- What is the mission statement?

# Features

- What features are required for your minimum viable product?

- What features may you wish to put in a future release?

- What do the top 3 similar apps do for their users?

# Frameworks

- What 3rd party frameworks are you considering using?

- Do APIs require you to contact its maintainer to gain access?

- Are you required to pay to use the API?

- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)

# For Data Scientists

- Describe the Established data source with at least rough data able to be provided on day 1.

- You can gather information about the data set you&#39;ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.

- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)

- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

# Target Audience

- Who is your target audience? Be specific.

- What feedback have you gotten from potential users?

- Have you validated the problem and your solution with your target audience? How?

Research

- Research thouroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

# Prototype Key Feature(s)

- This is the &quot;bread and butter&quot; of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you&#39;ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

```

```
