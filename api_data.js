define({ "api": [
  {
    "type": "POST",
    "url": "/following/",
    "title": "Create Following",
    "name": "CreatFollowing",
    "group": "Following",
    "description": "<p>Creates a new Following.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "follower",
            "description": "<p>ID of the follower</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "following",
            "description": "<p>Id of the followed profile</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "follow_back",
            "description": "<p>does the followed profile follows back the follower</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "match",
            "description": "<p>Id of the two person match</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"follower\":              \"5a75ada536cdf2267a922bed\",\n  \"following\":             \"5a75b167af44b3299cb3f131\",\n  \"follow_back\":           \"false\",\n  \"match\":\t\t\t\t\t\"5a75ba9cb39f7e3699ef85cb\"\n  \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a75c1fe0631633c35ded3f3\",\n    \"last_modified\": \"2018-02-03T14:06:54.947Z\",\n    \"follower\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"following\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    },\n    \"follow_back\": false,\n    \"match\": {\n        \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n        \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n        \"percent_of_match\": 75,\n        \"communicating\": true,\n        \"profile1\": \"5a75b167af44b3299cb3f131\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/following.js",
    "groupTitle": "Following"
  },
  {
    "type": "DELETE",
    "url": "/following/:id",
    "title": "Delete a Single Following",
    "name": "DeleteFollowing",
    "group": "Following",
    "description": "<p>Delete a single Following</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75c1229939203b08b3d1b2\",\n    \"last_modified\": \"2018-02-03T14:03:14.410Z\",\n    \"follower\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"following\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    },\n    \"follow_back\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/following.js",
    "groupTitle": "Following"
  },
  {
    "type": "GET",
    "url": "/following/",
    "title": "Get a single Following",
    "name": "GetFollowing",
    "group": "Following",
    "description": "<p>Get a single Following</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75c1fe0631633c35ded3f3\",\n    \"last_modified\": \"2018-02-03T14:06:54.947Z\",\n    \"follower\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"following\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    },\n    \"follow_back\": false,\n    \"match\": {\n        \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n        \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n        \"percent_of_match\": 75,\n        \"communicating\": true,\n        \"profile1\": \"5a75b167af44b3299cb3f131\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/following.js",
    "groupTitle": "Following"
  },
  {
    "type": "GET",
    "url": "/following/",
    "title": "Get Following By Pagination",
    "name": "GetFollowings",
    "group": "Following",
    "description": "<p>Get all Following by pagination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"page\": 1,\n    \"total_docs\": 2,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a75c1229939203b08b3d1b2\",\n            \"last_modified\": \"2018-02-03T14:03:14.410Z\",\n            \"date_created\": \"2018-02-03T14:03:14.410Z\",\n            \"follower\": {\n                \"_id\": \"5a75ada536cdf2267a922bed\",\n                \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n                \"date_created\": \"2018-02-03T12:40:05.625Z\",\n                \"email\": \"mamo@gebeya.com\",\n                \"user\": \"5a75ada536cdf2267a922bec\",\n                \"phone_number\": 251911123456,\n                \"first_name\": \"Dor\",\n                \"last_name\": \"Mamo\",\n                \"picture\": \"\"\n            },\n            \"following\": {\n                \"_id\": \"5a75b167af44b3299cb3f131\",\n                \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n                \"date_created\": \"2018-02-03T12:56:07.463Z\",\n                \"email\": \"mamit@gebeya.com\",\n                \"user\": \"5a75b167af44b3299cb3f130\",\n                \"picture\": \"\"\n            },\n            \"follow_back\": false,\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5a75c1fe0631633c35ded3f3\",\n            \"last_modified\": \"2018-02-03T14:06:54.947Z\",\n            \"date_created\": \"2018-02-03T14:06:54.947Z\",\n            \"follower\": {\n                \"_id\": \"5a75ada536cdf2267a922bed\",\n                \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n                \"date_created\": \"2018-02-03T12:40:05.625Z\",\n                \"email\": \"mamo@gebeya.com\",\n                \"user\": \"5a75ada536cdf2267a922bec\",\n                \"phone_number\": 251911123456,\n                \"first_name\": \"Dor\",\n                \"last_name\": \"Mamo\",\n                \"picture\": \"\"\n            },\n            \"following\": {\n                \"_id\": \"5a75b167af44b3299cb3f131\",\n                \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n                \"date_created\": \"2018-02-03T12:56:07.463Z\",\n                \"email\": \"mamit@gebeya.com\",\n                \"user\": \"5a75b167af44b3299cb3f130\",\n                \"picture\": \"\"\n            },\n            \"follow_back\": false,\n            \"match\": {\n                \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n                \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n                \"percent_of_match\": 75,\n                \"communicating\": true,\n                \"profile1\": \"5a75b167af44b3299cb3f131\"\n            },\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/following.js",
    "groupTitle": "Following"
  },
  {
    "type": "PUT",
    "url": "/following/:id",
    "title": "update a Following",
    "name": "UpdateFollowing",
    "group": "Following",
    "description": "<p>Update a single Following</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "follow_back",
            "description": "<p>does the followed profile follows back the follower</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{   \"follow_back\": true}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75c1fe0631633c35ded3f3\",\n    \"last_modified\": \"2018-02-03T14:06:54.947Z\",\n    \"follower\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"following\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    },\n    \"follow_back\": true,\n    \"match\": {\n        \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n        \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n        \"percent_of_match\": 75,\n        \"communicating\": true,\n        \"profile1\": \"5a75b167af44b3299cb3f131\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/following.js",
    "groupTitle": "Following"
  },
  {
    "type": "POST",
    "url": "/matches/",
    "title": "Create Match",
    "name": "CreatMatch",
    "group": "Match",
    "description": "<p>Creates a new Match.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "profile1",
            "description": "<p>the id of the profile of  match1</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Profile2",
            "description": "<p>the id of the profile of  match2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "percent_of_match",
            "description": "<p>how much are the two match in percent</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "communicating",
            "description": "<p>did the two party started to communicate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"profile1\":\t             \"5a75ada536cdf2267a922bed\",\n  \"Profile2\":                \"5a75b167af44b3299cb3f131\",\n  \"percent_of_match\":        \"75\",\n  \"communicating\":           \"false\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a75b9a7f6849a35d828c29c\",\n    \"last_modified\": \"2018-02-03T13:31:19.700Z\",\n    \"profile1\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"Profile2\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    },\n    \"percent_of_match\": 75,\n    \"communicating\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/match.js",
    "groupTitle": "Match"
  },
  {
    "type": "DELETE",
    "url": "/matches/:id",
    "title": "Delete a Single Match",
    "name": "DeleteMatch",
    "group": "Match",
    "description": "<p>Delete a single Match</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75b9a7f6849a35d828c29c\",\n    \"last_modified\": \"2018-02-03T13:31:19.700Z\",\n    \"profile1\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"Profile2\": \"5a75b167af44b3299cb3f131\",\n    \"percent_of_match\": 75,\n    \"communicating\": false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/match.js",
    "groupTitle": "Match"
  },
  {
    "type": "GET",
    "url": "/matches/:id",
    "title": "Get a Single Match",
    "name": "GetMatch",
    "group": "Match",
    "description": "<p>Get a single Match</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n    \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n    \"percent_of_match\": 75,\n    \"communicating\": true,\n    \"profile2\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"profile1\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/match.js",
    "groupTitle": "Match"
  },
  {
    "type": "GET",
    "url": "/matches/",
    "title": "Get Match By Pagination",
    "name": "GetMatches",
    "group": "Match",
    "description": "<p>Get all matches by pagination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"page\": \"1\",\n    \"total_docs\": 2,\n    \"total_pages\": 1,\n    \"per_page\": \"3\",\n    \"docs\": [\n        {\n            \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n            \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n            \"date_created\": \"2018-02-03T13:35:24.583Z\",\n            \"percent_of_match\": 75,\n            \"communicating\": true,\n            \"__v\": 0,\n            \"profile2\": {\n                \"_id\": \"5a75ada536cdf2267a922bed\",\n                \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n                \"date_created\": \"2018-02-03T12:40:05.625Z\",\n                \"email\": \"mamo@gebeya.com\",\n                \"user\": \"5a75ada536cdf2267a922bec\",\n                \"phone_number\": 251911123456,\n                \"first_name\": \"Dor\",\n                \"last_name\": \"Mamo\",\n                \"picture\": \"\"\n            },\n            \"profile1\": {\n                \"_id\": \"5a75b167af44b3299cb3f131\",\n                \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n                \"date_created\": \"2018-02-03T12:56:07.463Z\",\n                \"email\": \"mamit@gebeya.com\",\n                \"user\": \"5a75b167af44b3299cb3f130\",\n                \"picture\": \"\"\n            }\n        },\n        {\n            \"_id\": \"5a75bad60ac1ef36e720b309\",\n            \"last_modified\": \"2018-02-03T13:36:22.853Z\",\n            \"date_created\": \"2018-02-03T13:36:22.853Z\",\n            \"profile2\": {\n                \"_id\": \"5a75ada536cdf2267a922bed\",\n                \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n                \"date_created\": \"2018-02-03T12:40:05.625Z\",\n                \"email\": \"mamo@gebeya.com\",\n                \"user\": \"5a75ada536cdf2267a922bec\",\n                \"phone_number\": 251911123456,\n                \"first_name\": \"Dor\",\n                \"last_name\": \"Mamo\",\n                \"picture\": \"\"\n            },\n            \"profile1\": {\n                \"_id\": \"5a75b167af44b3299cb3f131\",\n                \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n                \"date_created\": \"2018-02-03T12:56:07.463Z\",\n                \"email\": \"mamit@gebeya.com\",\n                \"user\": \"5a75b167af44b3299cb3f130\",\n                \"picture\": \"\"\n            },\n            \"percent_of_match\": 75,\n            \"communicating\": false,\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/match.js",
    "groupTitle": "Match"
  },
  {
    "type": "GET",
    "url": "/matches/search/:num",
    "title": "Search a Match",
    "name": "SearchMatch",
    "group": "Match",
    "description": "<p>Get a specific Match by passing a specific Number in &quot;num&quot;, then all matches who's percent_of_match is grater than num will be returned</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example for 'num'= \"50\":",
          "content": " HTTP/1.1 200 OK  \n{\n    \"page\": 1,\n    \"total_docs\": 1,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a75bad60ac1ef36e720b309\",\n            \"last_modified\": \"2018-02-03T13:36:22.853Z\",\n            \"date_created\": \"2018-02-03T13:36:22.853Z\",\n            \"profile2\": {\n                \"_id\": \"5a75ada536cdf2267a922bed\",\n                \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n                \"date_created\": \"2018-02-03T12:40:05.625Z\",\n                \"email\": \"mamo@gebeya.com\",\n                \"user\": \"5a75ada536cdf2267a922bec\",\n                \"phone_number\": 251911123456,\n                \"first_name\": \"Dor\",\n                \"last_name\": \"Mamo\",\n                \"picture\": \"\"\n            },\n            \"profile1\": {\n                \"_id\": \"5a75b167af44b3299cb3f131\",\n                \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n                \"date_created\": \"2018-02-03T12:56:07.463Z\",\n                \"email\": \"mamit@gebeya.com\",\n                \"user\": \"5a75b167af44b3299cb3f130\",\n                \"phone_number\": 251911123456,\n                \"first_name\": \"Alemitu\",\n                \"last_name\": \"Chala\",\n                \"picture\": \"\"\n            },\n            \"percent_of_match\": 75,\n            \"communicating\": false,\n            \"__v\": 0\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/match.js",
    "groupTitle": "Match"
  },
  {
    "type": "PUT",
    "url": "/matches/:id",
    "title": "update a match",
    "name": "UpdateMatch",
    "group": "Match",
    "description": "<p>Update a single Matches</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profile2",
            "description": "<p>the id of the profile of  match2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profile1",
            "description": "<p>the id of the profile of  match1</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "communicating",
            "description": "<p>did the two party started to communicate</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{\n  \"profile2\":\t             \"5a75ada536cdf2267a922bed\",\n  \"profile1\":                \"5a75b167af44b3299cb3f131\",\n  \"communicating\":           \"true\"\n  \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75ba9cb39f7e3699ef85cb\",\n    \"last_modified\": \"2018-02-03T13:35:24.583Z\",\n    \"percent_of_match\": 75,\n    \"communicating\": true,\n    \"profile2\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": \"5a75ada536cdf2267a922bec\",\n        \"phone_number\": 251911123456,\n        \"first_name\": \"Dor\",\n        \"last_name\": \"Mamo\",\n        \"picture\": \"\"\n    },\n    \"profile1\": {\n        \"_id\": \"5a75b167af44b3299cb3f131\",\n        \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n        \"date_created\": \"2018-02-03T12:56:07.463Z\",\n        \"email\": \"mamit@gebeya.com\",\n        \"user\": \"5a75b167af44b3299cb3f130\",\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/match.js",
    "groupTitle": "Match"
  },
  {
    "type": "PUT",
    "url": "/profile/:id/changePassword",
    "title": "Change profile's Password",
    "name": "ChangePassword",
    "group": "Profile",
    "description": "<p>Change a specific employees password</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>New Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n    \"password\": \"New_Password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "DELETE",
    "url": "/profile/:id",
    "title": "Delete a Single profile",
    "name": "DeleteProfile",
    "group": "Profile",
    "description": "<p>Delete a single profile</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a75b7679057b431c0fc4520\",\n    \"last_modified\": \"2018-02-03T13:21:43.958Z\",\n    \"date_created\": \"2018-02-03T13:21:43.958Z\",\n    \"email\": \"tobeDelted@gebeya.com\",\n    \"user\": {\n        \"_id\": \"5a75b7679057b431c0fc451f\",\n        \"last_modified\": \"2018-02-03T13:21:43.949Z\",\n        \"date_created\": \"2018-02-03T13:21:43.949Z\",\n        \"username\": \"tobeDelted@gebeya.com\"\n    },\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "GET",
    "url": "/profile/:id",
    "title": "Get a Single profile",
    "name": "GetProfile",
    "group": "Profile",
    "description": "<p>Get a single profile</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5a75ada536cdf2267a922bed\",\n    \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n    \"date_created\": \"2018-02-03T12:40:05.625Z\",\n    \"email\": \"mamo@gebeya.com\",\n    \"user\": {\n        \"_id\": \"5a75ada536cdf2267a922bec\",\n        \"last_modified\": \"2018-02-03T12:40:05.207Z\",\n        \"date_created\": \"2018-02-03T12:40:05.207Z\",\n        \"username\": \"mamo@gebeya.com\"\n    },\n    \"phone_number\": 251911123456,\n    \"first_name\": \"Dor\",\n    \"last_name\": \"Mamo\",\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "GET",
    "url": "/profile/",
    "title": "Get Profile By Pagination",
    "name": "GetProfiles",
    "group": "Profile",
    "description": "<p>Get all Profiles by pagination</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"page\": \"1\",\n    \"total_docs\": 2,\n    \"total_pages\": 1,\n    \"per_page\": \"2\",\n    \"docs\": [\n        {\n            \"_id\": \"5a75ada536cdf2267a922bed\",\n            \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n            \"date_created\": \"2018-02-03T12:40:05.625Z\",\n            \"email\": \"mamo@gebeya.com\",\n            \"user\": {\n                \"_id\": \"5a75ada536cdf2267a922bec\",\n                \"last_modified\": \"2018-02-03T12:40:05.207Z\",\n                \"date_created\": \"2018-02-03T12:40:05.207Z\",\n                \"username\": \"mamo@gebeya.com\"\n            },\n            \"__v\": 0,\n            \"sex\": \"M\",\n            \"picture\": \"\"\n        },\n        {\n            \"_id\": \"5a75b167af44b3299cb3f131\",\n            \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n            \"date_created\": \"2018-02-03T12:56:07.463Z\",\n            \"email\": \"mamit@gebeya.com\",\n            \"user\": {\n                \"_id\": \"5a75b167af44b3299cb3f130\",\n                \"last_modified\": \"2018-02-03T12:56:07.452Z\",\n                \"date_created\": \"2018-02-03T12:56:07.452Z\",\n                \"username\": \"mamit@gebeya.com\"\n            },\n            \"__v\": 0,\n            \"sex\": \"M\",\n            \"picture\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "GET",
    "url": "/profile/search/:str",
    "title": "Search a Profile",
    "name": "SearchProfile",
    "group": "Profile",
    "description": "<p>Get a specific Profile by passing a specific string in &quot;str&quot;, then all employees whos Email, First name or Last name starting with the str will be returned</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example for 'str'= \"Cha\":",
          "content": " HTTP/1.1 200 OK  \n{\n    \"page\": 1,\n    \"total_docs\": 1,\n    \"total_pages\": 1,\n    \"per_page\": 10,\n    \"docs\": [\n        {\n            \"_id\": \"5a75b167af44b3299cb3f131\",\n            \"last_modified\": \"2018-02-03T12:56:07.463Z\",\n            \"date_created\": \"2018-02-03T12:56:07.463Z\",\n            \"email\": \"mamit@gebeya.com\",\n            \"user\": {\n                \"_id\": \"5a75b167af44b3299cb3f130\",\n                \"last_modified\": \"2018-02-03T12:56:07.452Z\",\n                \"date_created\": \"2018-02-03T12:56:07.452Z\",\n                \"username\": \"mamit@gebeya.com\"\n            },\n            \"__v\": 0,\n            \"phone_number\": 251911123456,\n            \"first_name\": \"Alemitu\",\n            \"last_name\": \"Chala\",\n            \"sex\": \"F\",\n            \"picture\": \"\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "PUT",
    "url": "/profile/:id",
    "title": "update a Profile",
    "name": "UpdateProfile",
    "group": "Profile",
    "description": "<p>Update a single Profiles</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "phone_number",
            "description": "<p>User Phone number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sex",
            "description": "<p>User sex</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "first_name",
            "description": "<p>User first_name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "last_name",
            "description": "<p>User last_name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "\n{\n  \"phone_number\":   \"+251911123456\",\n  \"email\":          \"mamo@gebeya.com\", \n  \"sex\":            \"M\", \n  \"first_name\":     \"Dor\",\n  \"last_name\":      \"Mamo\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 200 OK\n {\n    \"_id\": \"5a75ada536cdf2267a922bed\",\n    \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n    \"date_created\": \"2018-02-03T12:40:05.625Z\",\n    \"email\": \"mamo@gebeya.com\",\n    \"user\": {\n        \"_id\": \"5a75ada536cdf2267a922bec\",\n        \"last_modified\": \"2018-02-03T12:40:05.207Z\",\n        \"date_created\": \"2018-02-03T12:40:05.207Z\",\n        \"username\": \"mamo@gebeya.com\"\n    },\n    \"phone_number\": 251911123456,\n    \"first_name\": \"Dor\",\n    \"last_name\": \"Mamo\",\n    \"picture\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/profile.js",
    "groupTitle": "Profile"
  },
  {
    "type": "POST",
    "url": "/user/login",
    "title": "User Login",
    "name": "LoginUser",
    "group": "User",
    "description": "<p>Creates a new User and corresponding Profile.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\t\"username\": \"mamo@gebeya.com\",\n\t\"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tokne",
            "description": "<p>User token</p>"
          },
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "User",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"token\": \"t0yxCNWIkt/b8rguWv7SWdX6nEyhWmRzvRh8Nd1nsg60i22BQgfJMjWvLqRyEz+HUYr3Q7ODjA7u\",\n    \"user\": {\n        \"_id\": \"5a75ada536cdf2267a922bed\",\n        \"last_modified\": \"2018-02-03T12:40:05.625Z\",\n        \"date_created\": \"2018-02-03T12:40:05.625Z\",\n        \"email\": \"mamo@gebeya.com\",\n        \"user\": {\n            \"_id\": \"5a75ada536cdf2267a922bec\",\n            \"last_modified\": \"2018-02-03T12:40:05.207Z\",\n            \"date_created\": \"2018-02-03T12:40:05.207Z\",\n            \"username\": \"mamo@gebeya.com\"\n        },\n        \"picture\": \"\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "PUT",
    "url": "/user/logout",
    "title": "User Logout",
    "name": "LogoutUser",
    "group": "User",
    "description": "<p>logouts out the login user.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer + {token} a required header for all the API end-points. The token can be found form the login end point</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n  \"Authorization\": \"Bearer HrAuoeKL2NtpG9tRKkZ/J0vjDZu1psZneK8bKpdO6Ps8x5BXFsA9oMnSD4GCnxk9oWD2u3cmokj7\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n {\n    \"logged_out\": true\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "POST",
    "url": "/user/signup",
    "title": "User Signup",
    "name": "SignupUser",
    "group": "User",
    "description": "<p>Creates a new User and corresponding User Type.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User Password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": " {\n\t\"email\": \"mamo@gebeya.com\",\n \t\"password\": \"123456\"\n }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>User Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User Username</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "last_login",
            "description": "<p>Last Login Date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response Example:",
          "content": " HTTP/1.1 201 Created\n{\n    \"_id\": \"5a75ada536cdf2267a922bec\",\n    \"last_modified\": \"2018-02-03T12:40:05.207Z\",\n    \"date_created\": \"2018-02-03T12:40:05.207Z\",\n    \"username\": \"mamo@gebeya.com\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  }
] });
