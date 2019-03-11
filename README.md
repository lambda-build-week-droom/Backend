# Droom API

[Proposal](#proposal)

## HEROKU DEPLOYMENT

> https://droom-backend.herokuapp.com/

---

### START SERVER

-   run `yarn server`

---

[Axios Example](#axios_example)

## NAVIGATION

#### Authentication

[Register](#register) | [Login](#login)

#### Users

[Get All Users](#allusers) | [Get User Info](#getUserInfo) | [Get User by Id](#getUserById) | [Update User](#updateUser)

#### Companies

[Get All Companies](#allCompanies) | [Get Company Info](#getCompanyInfo) | [Get Company by Id](#getCompanyById) | [Update Company](#updateCompany)

#### Jobs

[Get All Jobs](#getAllJobs) | [Create Job](#createJob) | [Get Job by Id](#getJobById) | [Update Job](#updateJob)

## ENDPOINTS

## Authentication

1.  `Register` <a name='register'></a>

    _Method URL: /auth/register_

    _HTTP method: [POST]_

    ### Headers

    | name         | type   | required | description              |
    | ------------ | ------ | -------- | ------------------------ |
    | Content-type | String | Yes      | Must be application/json |

    ### Body for User

    | name     | type   | required | description                        |
    | -------- | ------ | -------- | ---------------------------------- |
    | email    | String | Yes      | must be unique                     |
    | password | String | Yes      | required                           |
    | type     | String | Yes      | must be either 'user' or 'company' |

    _example_

    ```
        {
            email: "johnDoe@test.com",
            password: "password123"
            type:'user'
        }
    ```

    ### Body for Company

    | name        | type   | required | description                        |
    | ----------- | ------ | -------- | ---------------------------------- |
    | companyName | string | Yes      |                                    |
    | email       | String | Yes      | must be unique                     |
    | password    | String | Yes      | required                           |
    | type        | string | Yes      | must be either 'user' or 'company' |

    _example_

    ```
        {
            email: "johnDoe@test.com",
            password: "password123"
            type:'company'
        }
    ```

---

2.  `Login` <a name='login'></a>

    _Method URL: /auth/login_

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
            email: "test@test.com",
            password: "password123"
        }
    ```

    > On success return user object

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

    > On success return company object

    ```
         {
             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoxLCJpYXQiOjE1NTIyNDU4ODgsImV4cCI6MTU1MjY3Nzg4OH0.JCY10oa6KVN5HttwK27PCLWr_m8SU9Ptz2lXoryuPeo",
             "companyInfo": {
                 "id": 1,
                 "name": "apple",
                 "email": "test3@test.com",
                 "bio": null,
                 "address": null
             }
         }
    ```

---

3. `Get All Users` <a name='allusers'></a>

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

---

4. `Get user info`<a name='getUserInfo'></a>

    _Method URL: /users/info_

    _HTTP method: [GET]_

    ### Headers

    | name          | type   | required | description              |
    | ------------- | ------ | -------- | ------------------------ |
    | Content-type  | String | Yes      | Must be application/json |
    | Authorization | String | Yes      | Token                    |

    ### Response

    > On success return object

```
    {
        "id": 1,
        "firstName": "Orlando",
        "lastName": "Nitzsche",
        "occupation": "Regional Functionality Strategist",
        "experience": "experience",
        "interests": "interests"
    }

```

---

5. `Get user by ID`<a name='getUserById'></a>

    _Method URL: /users/:id_

    _HTTP method: [GET]_

    ### Headers

    | name          | type   | required | description              |
    | ------------- | ------ | -------- | ------------------------ |
    | Content-type  | String | Yes      | Must be application/json |
    | Authorization | String | Yes      | Token                    |

    ### Response

    > On success return object

```
    {
        "id": 2,
        "firstName": "Imani",
        "lastName": "Heidenreich",
        "occupation": "Future Tactics Agent",
        "experience": "experience",
        "interests": "interests"
    }

```

---

5. `Update User`<a name='updateUser'></a>

    _Method URL: /users/update_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description                       |
    | ------------- | ------ | -------- | --------------------------------- |
    | Content-type  | String | Yes      | Must be application/json          |
    | Authorization | String | Yes      | Token must be from a user account |

    ### Body

    ```
    Can send any part of the body that needs updating:

    firstName, lastName, occupation, experience, interests
    ```

    ```
       {
           firstName: "John,
           lastName: "Doe"
       }
    ```

    ### Response

    > On success return `1`

---

1. `Get All Companies` <a name='allCompanies'></a>
   _Method URL: /companies_

    _HTTP method: [GET]_

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
            "companyName": "Company",
            "email": "user@company.com",
            "bio": null,
            "address": null
        },
        {
            "id": 2,
            "companyName": "Apple",
            "email": "hr@apple.com",
            "bio": null,
            "address": "1 Infinite Loop"
        }
    ]
```

1. `Get Company Info` <a name='getCompanyInfo'></a>
   _Method URL: /companies/info_

    _HTTP method: [GET]_

    ### Headers

    | name          | type   | required | description              |
    | ------------- | ------ | -------- | ------------------------ |
    | Content-type  | String | Yes      | Must be application/json |
    | Authorization | String | Yes      | Token                    |

    ### Response

    > On success return object

```
    {
        "id": 2,
        "companyName": "Apple",
        "email": "hr@apple.com",
        "bio": null,
        "address": "1 Infinite Loop"
    }
```

1. `Get Company by Id` <a name='getCompanyById'></a>
   _Method URL: /companies/:id_

    _HTTP method: [GET]_

    ### Headers

    | name          | type   | required | description              |
    | ------------- | ------ | -------- | ------------------------ |
    | Content-type  | String | Yes      | Must be application/json |
    | Authorization | String | Yes      | Token                    |

    ### Response

    > On success return object

```
    {
        "id": 2,
        "companyName": "Apple",
        "email": "hr@apple.com",
        "bio": null,
        "address": "1 Infinite Loop",
        "companyJobs": [
            {
                "id": 3,
                "jobTitle": "title",
                "jobPosition": "Position",
                "jobDescription": "Description",
                "jobRequirements": "Requirements",
                "jobSalary": 100000,
                "jobTags": "tech, janitor",
                "jobOpenDate": "March 11th, 2019",
                "jobCloseDate": "June 1st, 2019",
                "company_id": 2
            }
        ]
    }
```

1. `Update Company` <a name='updateCompany'></a>
   _Method URL: /users/update_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description                          |
    | ------------- | ------ | -------- | ------------------------------------ |
    | Content-type  | String | Yes      | Must be application/json             |
    | Authorization | String | Yes      | Token must be from a company account |

    ### Body

    ```
    Can send any part of the body that needs updating:

    companyName, email, bio, address
    ```

    ```
       {
           bio: "This is a new bio",
           address: "123 Company St, Company Town, USA"
       }
    ```

    ### Response

    > On success return `1`

---

<a name='axios_examples'></a>

## Axios Examples

1. `Axios Post Request` <a name='axiosPost'></a>

    ```
        axios({
            method: "post",
            url: `https://${API_URL}/endpoint`,
            headers: {
                Authorization: token
            },
            data: {
                email: "johndoe@email.com",
                password: "password123"
            }
            })
            .then((res) => console.log(res))
            .catch(err => console.log("error", err))
    ```

---

<a name='proposal'></a>

# Proposal

-   What problem does your app solve?

    -   Helps a user find their dream job

-   Be as specific as possible; how does your app solve the problem?

    -   Allows a user to quickly swipe through possible jobs to find the one they like the best

-   What is the mission statement?

    -   Match candidates with great companies

# Features

-   What features are required for your minimum viable product?

-   What features may you wish to put in a future release?

-   What do the top 3 similar apps do for their users?

# Frameworks

-   ## What 3rd party frameworks are you considering using?

    -   Cloudinary

-   Do APIs require you to contact its maintainer to gain access?

    -   No

-   Are you required to pay to use the API?
    -   No
-   Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
    -   No

# For Data Scientists

-   Describe the Established data source with at least rough data able to be provided on day 1.

-   You can gather information about the data set you&#39;ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.

-   Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)

-   A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

# Target Audience

-   Who is your target audience? Be specific.

-   What feedback have you gotten from potential users?

-   Have you validated the problem and your solution with your target audience? How?

Research

-   Research thouroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.

# Prototype Key Feature(s)

-   This is the &quot;bread and butter&quot; of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you&#39;ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed.

```

```
