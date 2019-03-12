# Droom API

[Proposal](PROPOSAL.md)

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

## Users

1. `Get All Users` <a name='allusers'></a>

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

2. `Get user info`<a name='getUserInfo'></a>

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

3. `Get user by ID`<a name='getUserById'></a>

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

4. `Update User`<a name='updateUser'></a>

    _Method URL: /users/update_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description                       |
    | ------------- | ------ | -------- | --------------------------------- |
    | Content-type  | String | Yes      | Must be application/json          |
    | Authorization | String | Yes      | Token must be from a user account |

    ### Body

    | name       | type   | required | description |
    | ---------- | ------ | -------- | ----------- |
    | firstName  | string | No       |             |
    | lastName   | string | No       |             |
    | occupation | string | No       |             |
    | experience | string | No       |             |
    | interests  | string | No       |             |

    ```
       {
           firstName: "John,
           lastName: "Doe"
       }
    ```

    ### Response

    > On success return `1`

---

## Companies

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

---

2. `Get Company Info` <a name='getCompanyInfo'></a>

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

---

3. `Get Company by Id` <a name='getCompanyById'></a>

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
                "jobTags": ["tech", "janitor"],
                "jobOpenDate": "March 11th, 2019",
                "jobCloseDate": "June 1st, 2019",
                "company_id": 2
            }
        ]
    }
```

---

4.  `Update Company` <a name='updateCompany'></a>

    _Method URL: /companies/update_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description                          |
    | ------------- | ------ | -------- | ------------------------------------ |
    | Content-type  | String | Yes      | Must be application/json             |
    | Authorization | String | Yes      | Token must be from a company account |

    ### Body

    | name        | type   | required | description |
    | ----------- | ------ | -------- | ----------- |
    | companyName | string | No       |             |
    | email       | string | No       |             |
    | bio         | string | No       |             |
    | address     | string | No       |             |


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

#### Jobs

1. `Get All Jobs` <a name='getAllJobs'></a>

    _Method URL: /jobs_

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
            "jobTitle": "Dynamic Program Administrator",
            "jobPosition": "Consultant",
            "jobDescription": "Direct",
            "jobRequirements": "Web",
            "jobSalary": 553,
            "jobTags": "tempora",
            "jobOpenDate": "1552312445647.0",
            "jobCloseDate": "1579476170156.0",
            "company_id": 11
        },
        {
            "id": 2,
            "jobTitle": "International Configuration Developer",
            "jobPosition": "Supervisor",
            "jobDescription": "Future",
            "jobRequirements": "Marketing",
            "jobSalary": 206,
            "jobTags": "nostrum",
            "jobOpenDate": "1552303764015.0",
            "jobCloseDate": "1579102031521.0",
            "company_id": 4
        }
    ]
```

---

2. `Create Job` <a name='createJob'></a>

    _Method URL: /jobs_

    _HTTP method: [Post]_

    ### Headers

    | name          | type   | required | description              |
    | ------------- | ------ | -------- | ------------------------ |
    | Content-type  | String | Yes      | Must be application/json |
    | Authorization | String | Yes      | Token                    |

    ### Body

    | name            | type     | required | description |
    | --------------- | -------- | -------- | ----------- |
    | jobTitle        | String   | No       |             |
    | jobPosition     | String   | No       |             |
    | jobDescription  | String   | No       |             |
    | jobRequirements | String   | No       |             |
    | jobSalary       | Integer  | No       |             |
    | jobTags         | String   | No       |             |
    | jobOpenDate     | Integer  | No       |             |
    | jobCloseDate    | Intteger | No       |             |


    ### Response

    > On success return 1

---

3. `Get Job by Id` <a name='getJobById'></a>

    _Method URL: /jobs/:id_

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
    "id": 13,
    "jobTitle": "Customer Research Apprentice",
    "jobPosition": "Executive",
    "jobDescription": "Lead",
    "jobRequirements": "Accounts",
    "jobSalary": 704,
    "jobTags": "voluptas",
    "jobOpenDate": "1552282766773.0",
    "jobCloseDate": "1579250581673.0",
    "company_id": 1
}
```

---

4. `Update Job` <a name='updateJob'></a>

    _Method URL: /jobs/update/:id_

    _HTTP method: [PUT]_

    ### Headers

    | name          | type   | required | description                          |
    | ------------- | ------ | -------- | ------------------------------------ |
    | Content-type  | String | Yes      | Must be application/json             |
    | Authorization | String | Yes      | Token must be from a company account |

    ### Body

    ```
    Can send any part of the body that needs updating:

    jobTitle, jobPosition, jobDescription, jobRequirements, jobSalary, jobTags, jobOpenDate, jobCloseDate
    ```

    ```
       {
           jobSalary: 50000,
       }
    ```

    ### Response

    > On success return `1`

# <<<<<<< HEAD

> > > > > > > 90f0f5af1164e4a260f0fe08cf83ab4e766a71f7

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
