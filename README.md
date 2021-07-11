# E-Commerce Back End Challenge
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
      
## Description

A command-line application that allows the user to interact with a SQL database to create, view, update, and delete products in their e-commerce inventory. This application also allows product tags and categories to be created and assigned to the products.

## Built With
    
<img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>

<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>

<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>

<img alt="MySQL" src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>

<img alt="sequelize.js" src="https://img.shields.io/badge/Sequelize-.js-blue"/>

## Table of Contents

* [Usage](#usage)
* [API Endpoints](#api-endpoints)
* [Questions](#questions)
* [License](#license)

## Usage

### [Instructional Video]()

### Guide

1. Navigate to the [E-Commerce Backend repository](https://github.com/antellitocci/e-commerce-backend) and copy the SSH or HTTPS information.
2. Using the command line, navigate to the directory where you would like to store this application.
3. Once there, clone the repository using the SSH or HTTPS information. You can clone the repository by running `git clone <repository SSH / HTTPS information>`
4. After successfully cloning the repository, change directory into the newly cloned application's root folder.
5. Once there, run `npm install` to ensure all dependencies for the application are installed.

    **PAUSE** If you do not already have MySQL installed on your machine, please do so now. You can download the latest version here: [MySQL Community Downloads](https://dev.mysql.com/downloads/mysql/)

6. In the *db/schema.sql* directory within the application, you will find the database's name. If you would like to change the name of the database, do so here.
7. Now create a **.env** file in the application's root directory. This is where you will store your database's access information. The **.env** file should contain the following:

    * `DB_NAME = '<your database's name>'`
    * `DB_USER = '<your MySQL username>'`
    * `DB_PW = '<your MySQL password>'`

8. In the command line (ensure you are still in the application's root folder), open up your MySQL shell using the `mysql -u root -p` command. Once in the MySQL shell, run the following command to create the database's schema.

    `source db/schema.sql`

    This will create the database. We are now finished in the MySQL shell. Type `quit` to exit.

9. The next step is to seed the database. From your command line (still in the application's root folder), run `npm run seed`. This will create the tables in your database and populate them with test data.

10. To start the server for testing, run `npm start` and a server will be spun up on **localhost:3001**

11. You are now ready to begin testing the API endpoints. A list of available API endpoints is below.

## API Endpoints
All endpoints assume you are testing on your localhost.

### GET Routes
All Categories

<img alt="GET-categories" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fcategories-GET-blue"/>

Single Category

<img alt="GET-categories" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fcategories%2F%3Aid-GET-blue"/>

All Products

<img alt="GET-products" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fproducts-GET-blue"/>

Single Product

<img alt="GET-products" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fproducts%2F%3Aid-GET-blue"/>

All Tags

<img alt="GET-tags" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Ftags-GET-blue"/>

Single Tag

<img alt="GET-tags" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Ftags%2F%3Aid-GET-blue"/>


### POST Routes
Create a new Category

<img alt="POST-categories" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fcategories-POST-yellow"/>

Sample request body
```javascript
{
    "category_name": "New Category"
}
```

Create a new Product

<img alt="POST-products" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fproducts-POST-yellow"/>

Sample request body
```javascript
{
    "product_name": "New Product",
    "price": 150.00,
    "stock": 1000,
    "category_id": 1,
    "tagIds": [1, 2, 3, 4]
}
```

Create a new Tag

<img alt="POST-tags" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Ftags-POST-yellow"/>

Sample request body
```javascript
{
    "tag_name": "New Tag"
}
```


### PUT Routes
Update Category by its ID

<img alt="PUT-categories" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fcategories%2F%3Aid-PUT-orange"/>

Sample request body
```javascript
{
    "category_name": "Revised Category"
}
```

Update Product by its ID

<img alt="PUT-products" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fproducts%2F%3Aid-PUT-orange"/>

Sample request body
```javascript
{
    "product_name": "Revised Product",
    "price": 50.00,
    "stock": 2000,
    "category_id": 2,
    "tagIds": [5, 2, 3, 4]
}
```

Update Tag by its ID

<img alt="PUT-tags" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Ftags%2F%3Aid-PUT-orange"/>

Sample request body
```javascript
{
    "tag_name": "Revised Tag"
}
```

### DELETE Routes
Delete Category by its ID

<img alt="GET-categories" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fcategories%2F%3Aid-DEL-red"/>

Delete Product by its ID

<img alt="GET-products" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Fproducts%2F%3Aid-DEL-red"/>

Delete Tag by its ID

<img alt="GET-tags" src="https://img.shields.io/badge/http%3A%2F%2Flocalhost%3A3001%2Fapi%2Ftags%2F%3Aid-DEL-red"/>

## Questions
If you have questions about this project, please contact me via one of the methods listed below:

Email: andrew@tellitocci.com

GitHub: [antellitocci](https://github.com/antellitocci)

## License
        
### MIT
        
### Copyright 2021 Andrew Tellitocci
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
      
  