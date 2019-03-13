# Droom API

[Proposal](PROPOSAL.md)

## HEROKU DEPLOYMENT

> https://droom-backend.herokuapp.com/

---

### START SERVER

-   run `yarn install`

-   run `yarn server`

---

### TLDR

-   x marks tested

```
    Authentication

    [X] [POST]      /auth/register
    [X] [POST]      /auth/login

    Users

    [X] [GET]       /users/
    [X] [GET]       /users/info
    [X] [PUT]       /users/update
    [X] [DELETE]    /users/delete
    [ ] [GET]       /users/matched
    [X] [GET]       /users/:id
    [ ] [POST]      /users/:id/save
    [ ] [DELETE]      /users/:id/remove

    Companies

    [X] [GET]       /companies/
    [X] [GET]       /companies/info
    [X] [GET]       /companies/:id
    [X] [PUT]       /companies/update
    [X] [DELETE]    /companies/delete

    Jobs

    [X] [GET]       /jobs/
    [X] [POST]      /jobs/
    [X] [GET]       /jobs/info
    [X] [GET]       /jobs/:id
    [ ] [PUT]       /jobs/:id/update
    [X] [DELETE]    /jobs/:id/delete
    [ ] [POST]      /jobs/:id/save
    [ ] [DELETE]    /jobs/:id/remove

```

User Login

```
{
    "email":"user@user.com",
    "password":"password",
    "type":"user"
}
```

User Login

```
{
    "email":"company@company.com",
    "password":"password"
}
```

[Axios Example](#axios_example)

## NAVIGATION

#### Authentication

[Register](#register) | [Login](#login)

#### Users

[Get All Users](#allusers) | [Get User Info](#getUserInfo) | [Get User by Id](#getUserById) | [Update User](#updateUser) | [Delete User](#deleteUser) | [User Matches](#userMatched) | [Save user to Company](#userSave) | [Remove user to Company](#userRemove)

#### Companies

[Get All Companies](#allCompanies) | [Get Company Info](#getCompanyInfo) | [Get Company by Id](#getCompanyById) | [Update Company](#updateCompany) | [Delete Company](#deleteCompany)

#### Jobs

[Get All Jobs](#getAllJobs) | [Create Job](#createJob) | [Get Job by Id](#getJobById) | [Update Job](#updateJob) [Delete Job](#deleteJob) | [Get jobs for signed in Company](#jobsInfo) | [Save job to user profile](#saveToUser) | [Remove job from use profile](#removeFromUser)

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
            companyName: "Company",
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
    "id": 1,
        "firstName": "Laurence",
        "lastName": "Bechtelar",
        "occupation": "Central Mobility Director",
        "experience": "experience",
        "interests": "interests",
        "saved": [
            {
                "job_id": 47,
                "jobTitle": "Internal Quality Agent",
                "jobPosition": "Architect",
                "jobDescription": "Regional",
                "jobRequirements": "Brand",
                "jobSalary": 903,
                "jobTags": "dolore eos quia",
                "jobOpenDate": "1552373894247.0",
                "jobCloseDate": "1559589532036.0"
            },
            {
                "job_id": 49,
                "jobTitle": "Future Interactions Technician",
                "jobPosition": "Analyst",
                "jobDescription": "District",
                "jobRequirements": "Data",
                "jobSalary": 18,
                "jobTags": "animi quia omnis",
                "jobOpenDate": "1552355593356.0",
                "jobCloseDate": "1570538807737.0"
            }
        ]
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

5. `Delete User`<a name='deleteUser'></a>
6. `User Matches`<a name='userMatched'></a>
7. `Save user to Company`<a name='userSave'></a>
8. `Remove user to Company`<a name='userRemove'></a>

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

5. `Delete Company` <a name='deleteCompany'></a>

---

## Jobs

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


    ```
       {
           jobSalary: 50000,
       }
    ```

    ### Response

    > On success return `1`

---

5. `Delete Job` <a name='deleteJob'></a>

    _Method URL: /jobs/:id/delete_

    _HTTP method: [DELETE]_

    ### Headers

    | name          | type   | required | description                          |
    | ------------- | ------ | -------- | ------------------------------------ |
    | Content-type  | String | Yes      | Must be application/json             |
    | Authorization | String | Yes      | Token must be from a company account |


    ### Response

    > On success return status(204)

---

6. `Get jobs for signed in Company` <a name='jobsInfo'></a>

---

7. `Save job to user profile` <a name='saveToUser'></a>

---

8. `Remove job from use profile` <a name='removeFromUser'></a>

_Method URL: /_

_HTTP method: [GET]_

### Headers

| name          | type   | required | description                          |
| ------------- | ------ | -------- | ------------------------------------ |
| Content-type  | String | Yes      | Must be application/json             |
| Authorization | String | Yes      | Token must be from a company account |

### Body

| name | type   | required | description |
| ---- | ------ | -------- | ----------- |
| item | String | No       |             |

#### Example

```
    {
        jobSalary: 50000,
    }
```

### Response

> On success return `1`


--

## Axios Examples

<a name='axios_examples'></a>

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

