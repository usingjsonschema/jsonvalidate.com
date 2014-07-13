var defaultCatalog = {
    "catalogName":"Using JSON Schema book examples",
    "entries":
    [
        {
            "name":"3A Basic: Simple Object (Valid)",
            "data":"{\n  \"address\":\"192.168.1.60\",\n  \"port\":80\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Simple IP server definition\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  }\n}\n"
        },
        {
            "name":"3A Basic: Simple Object (Invalid 1)",
            "data":"[\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  }\n]\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Simple IP server definition\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  }\n}\n"
        },
        {
            "name":"3A Basic: Simple Object (Invalid 2)",
            "data":"{\n  \"address\":true,\n  \"port\":80\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Simple IP server definition\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  }\n}\n"
        },
        {
            "name":"3A Basic: Simple Object (Invalid 3)",
            "data":"{\n  \"address\":\"192.168.1.60\",\n  \"port\":80.1\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Simple IP server definition\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  }\n}\n"
        },
        {
            "name":"3B Basic: Simple Object Required (Valid)",
            "data":"{\n  \"address\":\"192.168.1.60\",\n  \"port\":80\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"IP server with required properties\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"address\", \"port\"]\n}\n"
        },
        {
            "name":"3B Basic: Simple Object Required (Invalid 1)",
            "data":"{\n  \"port\":80\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"IP server with required properties\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"address\", \"port\"]\n}\n"
        },
        {
            "name":"3B Basic: Simple Object Requried (Invalid 2)",
            "data":"{\n  \"name\":\"Server 14\",\n  \"address\":\"192.168.1.100\",\n  \"port\":80\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"IP server with required properties\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\"}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"address\", \"port\"]\n}\n"
        },
        {
            "name":"3C Basic: Simple Array (Valid)",
            "data":"[\"Red\", \"Yellow\", \"Green\"]\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Traffic signals\",\n  \"description\":\"List of traffic signal colors\",\n\n  \"type\":\"array\",\n  \"items\":\n  {\n    \"type\":\"string\"\n  },\n  \"additionalItems\":false\n}\n"
        },
        {
            "name":"3C Basic: Simple Array (Invalid)",
            "data":"[\"Red\", \"Yellow\", \"Green\", true]\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Traffic signals\",\n  \"description\":\"List of traffic signal colors\",\n\n  \"type\":\"array\",\n  \"items\":\n  {\n    \"type\":\"string\"\n  },\n  \"additionalItems\":false\n}\n"
        },
        {
            "name":"3D Basic: Simple Named Object (Valid)",
            "data":"{\n  \"server\":\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Server address and port number\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"server\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"address\":{ \"type\":\"string\" },\n        \"port\":{ \"type\":\"integer\" }\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"address\", \"port\"]\n    }\n  }\n}\n"
        },
        {
            "name":"3E Basic: Simple Mixed (Valid)",
            "data":"{\n  \"server\":\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  },\n  \"pages\":\n  [\n    {\n      \"url\":\"/\",\n      \"page\":\"public/home.html\"\n    },\n    {\n      \"url\":\"/about\",\n      \"page\":\"public/company/about.html\"\n    },\n    {\n      \"url\":\"/careers\",\n      \"page\":\"public/company/careers.html\"\n    }\n  ]\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"HTTP Server\",\n  \"description\":\"HTTP server definition and URL list\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"server\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"address\":{\"type\":\"string\"},\n        \"port\":{\"type\":\"integer\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"address\", \"port\"]\n    },\n    \"pages\":\n    {\n      \"type\":\"array\",\n      \"items\":\n      {\n        \"type\":\"object\",\n        \"properties\":\n        {\n          \"url\":{\"type\":\"string\"},\n          \"page\":{\"type\":\"string\"}\n        },\n        \"additionalProperties\":false,\n        \"required\":[\"url\", \"page\"]\n      }\n    }\n  }\n}\n"
        },
        {
            "name":"3F Pattern: Note (Valid)",
            "data":"{\n  \"author\":\"Jane\",\n  \"title\":\"Party plan\",\n  \"content\":\"Surprise party for Jim. Attendees: Sally, Bob so far.\",\n  \"comment1\":\"Jill checking with Larry\",\n  \"comment3\":\"Mary has to check schedule, will text later\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Note\",\n  \"description\":\"Note with optional comments\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"author\":{\"type\":\"string\"},\n    \"title\":{\"type\":\"string\"},\n    \"content\":{\"type\":\"string\"}\n  },\n  \"patternProperties\":\n  {\n    \"^comment[1-9]$\":{\"type\":\"string\"}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"author\", \"title\", \"content\"]\n}\n"
        },
        {
            "name":"3F Pattern: Note (Invalid)",
            "data":"{\n  \"author\":\"Jane\",\n  \"title\":\"Party plan\",\n  \"content\":\"Surprise party for Jim. Attendees: Sally, Bob so far.\",\n  \"comment1\":\"Jill checking with Larry\",\n  \"comment10\":\"Mary has to check schedule, will text later\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Note\",\n  \"description\":\"Note with optional comments\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"author\":{\"type\":\"string\"},\n    \"title\":{\"type\":\"string\"},\n    \"content\":{\"type\":\"string\"}\n  },\n  \"patternProperties\":\n  {\n    \"^comment[1-9]$\":{\"type\":\"string\"}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"author\", \"title\", \"content\"]\n}\n"
        },
        {
            "name":"3G Dependency: Order (Valid)",
            "data":"{\n  \"orders\":\n  [\n    {\n      \"order\":\"123456789\",\n      \"billTo\":\"Jane Doe\",\n      \"billAddress\":\"1234 Elm St, Anytown PA 12345\",\n      \"shipTo\":\"John Public\",\n      \"shipAddress\":\"2345 Oak St, Anytown PA 12346\",\n      \"loyaltyId\":\"A123456\",\n      \"loyaltyBonus\":\"Free shipping\"\n    },\n    {\n      \"order\":\"234567890\",\n      \"billTo\":\"Jack Smith\",\n      \"billAddress\":\"111 Main St, Anytown PA 12345\"\n    }\n  ]\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Order\",\n  \"description\":\"Order billing and shipping information\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"orders\":\n    {\n      \"type\":\"array\",\n      \"items\":\n      {\n        \"properties\":\n        {\n          \"order\":{\"type\":\"string\"},\n          \"billTo\":{\"type\":\"string\"},\n          \"billAddress\":{\"type\":\"string\"},\n          \"shipTo\":{\"type\":\"string\"},\n          \"shipAddress\":{\"type\":\"string\"},\n          \"loyaltyId\":{\"type\":\"string\"},\n          \"loyaltyBonus\":{\"type\":\"string\"}\n        },\n        \"additionalProperties\":false,\n        \"required\":[\"order\", \"billTo\", \"billAddress\"],\n        \"dependencies\":\n        {\n          \"shipTo\":[\"shipAddress\"],\n          \"loyaltyId\":[\"loyaltyBonus\"]\n        }\n      }\n    }\n  }\n}\n"
        },
        {
            "name":"3G Dependency: Order (Invalid)",
            "data":"{\n  \"orders\":\n  [\n    {\n      \"order\":\"123456789\",\n      \"billTo\":\"Jane Doe\",\n      \"billAddress\":\"1234 Elm St, Anytown PA 12345\",\n      \"shipTo\":\"John Public\",\n      \"loyaltyId\":\"A123456\",\n      \"loyaltyBonus\":\"Free shipping\"\n    }\n  ]\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Order\",\n  \"description\":\"Order billing and shipping information\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"orders\":\n    {\n      \"type\":\"array\",\n      \"items\":\n      {\n        \"properties\":\n        {\n          \"order\":{\"type\":\"string\"},\n          \"billTo\":{\"type\":\"string\"},\n          \"billAddress\":{\"type\":\"string\"},\n          \"shipTo\":{\"type\":\"string\"},\n          \"shipAddress\":{\"type\":\"string\"},\n          \"loyaltyId\":{\"type\":\"string\"},\n          \"loyaltyBonus\":{\"type\":\"string\"}\n        },\n        \"additionalProperties\":false,\n        \"required\":[\"order\", \"billTo\", \"billAddress\"],\n        \"dependencies\":\n        {\n          \"shipTo\":[\"shipAddress\"],\n          \"loyaltyId\":[\"loyaltyBonus\"]\n        }\n      }\n    }\n  }\n}\n"
        },
        {
            "name":"3H Choice: All Of (Valid)",
            "data":"{\n  \"name\":\"John Doe\",\n  \"sex\":\"M\",\n  \"age\":12\n}\n",
            "schema":"{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Registration\",\n  \"description\":\"Sports activity registration, 12-14 age bracket\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"},\n    \"sex\":{\"allOf\":[{\"type\":\"string\"}, {\"enum\":[\"M\", \"F\"]}]},\n    \"age\":{\"allOf\":[{\"type\":\"integer\"}, {\"minimum\":12}, {\"maximum\":14}]}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"name\", \"sex\", \"age\"]\n}\n"
        },
        {
            "name":"3H Choice: All Of Implied (Valid)",
            "data":"{\n  \"name\":\"John Doe\",\n  \"sex\":\"M\",\n  \"age\":12\n}\n",
            "schema":"{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Registration\",\n  \"description\":\"Sports activity registration, 12-14 age bracket\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"},\n    \"sex\":{\"type\":\"string\", \"enum\":[\"M\", \"F\"]},\n    \"age\":{\"type\":\"integer\", \"minimum\":12, \"maximum\":14}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"name\", \"sex\", \"age\"]\n}\n"
        },
        {
            "name":"3H Choice: One Of (Valid)",
            "data":"{\n  \"country\":\"USA\",\n  \"state\":\"AK\",\n  \"zipCode\":\"99501\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"National address\",\n  \"description\":\"National portion of an address\",\n\n  \"type\":\"object\",\n  \"oneOf\":\n  [\n    {\n      \"properties\":\n      {\n        \"country\":{\"type\":\"string\", \"enum\":[\"CAN\"]},\n        \"province\":{\"type\":\"string\", \"enum\":[\"AB\", \"BC\", \"MB\"]},\n        \"postalCode\":{\"type\": \"string\", \n            \"pattern\":\"^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"country\", \"province\", \"postalCode\"]\n    },\n    {\n      \"properties\":\n      {\n        \"country\":{\"type\":\"string\", \"enum\":[\"USA\"]},\n        \"state\":{\"type\":\"string\", \"enum\":[\"AL\", \"AK\", \"AR\"]},\n        \"zipCode\":{\"type\":\"string\", \"pattern\":\"^[0-9]{5}(-[0-9]{4})?$\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"country\", \"state\", \"zipCode\"]\n    },\n    {\n      \"properties\":\n      {\n        \"country\":{\"type\":\"string\", \"enum\":[\"MEX\"]},\n        \"state\":{\"type\":\"string\", \"enum\":[\"AGS\", \"BC\", \"BCS\"]},\n        \"postalCode\":{\"type\": \"string\", \"pattern\":\"^[0-9]{5}$\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"country\", \"state\", \"postalCode\"]\n    }\n  ]\n}\n"
        },
        {
            "name":"3H Choice: One Of (Invalid)",
            "data":"{\n  \"country\":\"USA\",\n  \"province\":\"AB\",\n  \"postalCode\":\"A1B2C3\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"National address\",\n  \"description\":\"National portion of an address\",\n\n  \"type\":\"object\",\n  \"oneOf\":\n  [\n    {\n      \"properties\":\n      {\n        \"country\":{\"type\":\"string\", \"enum\":[\"CAN\"]},\n        \"province\":{\"type\":\"string\", \"enum\":[\"AB\", \"BC\", \"MB\"]},\n        \"postalCode\":{\"type\": \"string\", \n            \"pattern\":\"^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"country\", \"province\", \"postalCode\"]\n    },\n    {\n      \"properties\":\n      {\n        \"country\":{\"type\":\"string\", \"enum\":[\"USA\"]},\n        \"state\":{\"type\":\"string\", \"enum\":[\"AL\", \"AK\", \"AR\"]},\n        \"zipCode\":{\"type\":\"string\", \"pattern\":\"^[0-9]{5}(-[0-9]{4})?$\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"country\", \"state\", \"zipCode\"]\n    },\n    {\n      \"properties\":\n      {\n        \"country\":{\"type\":\"string\", \"enum\":[\"MEX\"]},\n        \"state\":{\"type\":\"string\", \"enum\":[\"AGS\", \"BC\", \"BCS\"]},\n        \"postalCode\":{\"type\": \"string\", \"pattern\":\"^[0-9]{5}$\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"country\", \"state\", \"postalCode\"]\n    }\n  ]\n}\n"
        },
        {
            "name":"3H Choice: Any Of (Valid)",
            "data":"{\n  \"size\":4\n}\n",
            "schema":"{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Team size\",\n  \"description\":\"Team sizes for play day competitions\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"size\":\n    {\n      \"anyOf\":\n      [\n        {\"type\":\"integer\", \"minimum\":2, \"maximum\":4},\n        {\"type\":\"integer\", \"minimum\":4, \"maximum\":6},\n        {\"type\":\"integer\", \"minimum\":8, \"maximum\":10},\n        {\"type\":\"integer\", \"minimum\":10, \"maximum\":12}\n      ]\n    }\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"size\"]\n}\n"
        },
        {
            "name":"3H Choice: Any Of (Invalid)",
            "data":"{\n  \"size\":7\n}\n",
            "schema":"{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Team size\",\n  \"description\":\"Team sizes for play day competitions\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"size\":\n    {\n      \"anyOf\":\n      [\n        {\"type\":\"integer\", \"minimum\":2, \"maximum\":4},\n        {\"type\":\"integer\", \"minimum\":4, \"maximum\":6},\n        {\"type\":\"integer\", \"minimum\":8, \"maximum\":10},\n        {\"type\":\"integer\", \"minimum\":10, \"maximum\":12}\n      ]\n    }\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"size\"]\n}\n"
        },
        {
            "name":"3H Not: Register (Valid)",
            "data":"{\n  \"name\":\"John Doe\",\n  \"age\":12,\n  \"league\":\"District A\"\n}\n",
            "schema":"{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Team registration\",\n  \"description\":\"Team registration, non-intramural leagues only\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"},\n    \"age\": {\"type\":\"integer\", \"minimum\":10, \"maximum\":14},\n    \"league\": {\"type\":\"string\", \"not\":{\"enum\":[\"intramural\"]}}\n  }\n}\n"
        },
        {
            "name":"3H Not: Register (Invalid)",
            "data":"{\n  \"name\":\"John Doe\",\n  \"age\":12,\n  \"league\":\"intramural\"\n}\n",
            "schema":"{\n  \"$schema\": \"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Team registration\",\n  \"description\":\"Team registration, non-intramural leagues only\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"},\n    \"age\": {\"type\":\"integer\", \"minimum\":10, \"maximum\":14},\n    \"league\": {\"type\":\"string\", \"not\":{\"enum\":[\"intramural\"]}}\n  }\n}\n"
        },
        {
            "name":"3I Properties: Contact (Valid)",
            "data":"{\n  \"name\":\"John\",\n  \"mobile\":\"555 555-1212\",\n  \"email\":\"john@example.com\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Contacts\",\n  \"description\":\"Contacts: name, freeform contact methods\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"}\n  },\n  \"minProperties\":1,\n  \"maxProperties\":5,\n  \"required\":[\"name\"]\n}\n"
        },
        {
            "name":"3I Properties: Contact (Invalid)",
            "data":"{\n  \"name\":\"John\",\n  \"home\":\"555 555-1111\",\n  \"mobile\":\"555 555-1212\",\n  \"work\":\"555 555-2222\",\n  \"email\":\"john@example.com\",\n  \"twitter\":\"@John\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Contacts\",\n  \"description\":\"Contacts: name, freeform contact methods\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"}\n  },\n  \"minProperties\":1,\n  \"maxProperties\":5,\n  \"required\":[\"name\"]\n}\n"
        },
        {
            "name":"3I Properties: Contact Phone (Valid)",
            "data":"{\n  \"name\":\"John\",\n  \"home\":\"555 555-1111\",\n  \"mobile\":\"555 555-1212\",\n  \"work\":\"555 555-2222\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Contacts\",\n  \"description\":\"Contacts: name, freeform contact methods\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"}\n  },\n  \"minProperties\":1,\n  \"maxProperties\":5,\n  \"required\":[\"name\"],\n  \"additionalProperties\":\n  {\n    \"type\":\"string\", \"pattern\":\"^([0-9]{3}) [0-9]{3}-[0-9]{4}$\"\n  }\n}\n"
        },
        {
            "name":"3I Properties: Contact Phone (Invalid)",
            "data":"{\n  \"name\":\"John\",\n  \"home\":\"555 555-1111\",\n  \"mobile\":\"555 555-1212\",\n  \"work\":\"555 555-2222\",\n  \"email\":\"john@example.com\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Contacts\",\n  \"description\":\"Contacts: name, freeform contact methods\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"}\n  },\n  \"minProperties\":1,\n  \"maxProperties\":5,\n  \"required\":[\"name\"],\n  \"additionalProperties\":\n  {\n    \"type\":\"string\", \"pattern\":\"^([0-9]{3}) [0-9]{3}-[0-9]{4}$\"\n  }\n}\n"
        },
        {
            "name":"3I Array: Server Array (Valid)",
            "data":"[\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  },\n  {\n    \"address\":\"192.168.1.61\",\n    \"port\":80\n  }\n]\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Primary and Backup Servers\",\n  \"description\":\"IP address/port for primary/backup server pair\",\n\n  \"type\":\"array\", \"minItems\":2, \"maxItems\":2,\n  \"items\":\n  {\n    \"type\":\"object\",\n    \"properties\":\n    {\n      \"address\":{\"type\":\"string\"},\n      \"port\":{\"type\":\"integer\", \"minimum\":0, \"maximum\":65535}\n    },\n    \"required\":[\"address\", \"port\"]\n  },\n  \"uniqueItems\":true,\n  \"additionalItems\":false\n}\n"
        },
        {
            "name":"3I Array: Server Array (Invalid 1)",
            "data":"[\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  }\n]\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Primary and Backup Servers\",\n  \"description\":\"IP address/port for primary/backup server pair\",\n\n  \"type\":\"array\", \"minItems\":2, \"maxItems\":2,\n  \"items\":\n  {\n    \"type\":\"object\",\n    \"properties\":\n    {\n      \"address\":{\"type\":\"string\"},\n      \"port\":{\"type\":\"integer\", \"minimum\":0, \"maximum\":65535}\n    },\n    \"required\":[\"address\", \"port\"]\n  },\n  \"uniqueItems\":true,\n  \"additionalItems\":false\n}\n"
        },
        {
            "name":"3I Array: Server Array (Invalid 2)",
            "data":"[\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  },\n  {\n    \"address\":\"192.168.1.60\",\n    \"port\":80\n  }\n]\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Primary and Backup Servers\",\n  \"description\":\"IP address/port for primary/backup server pair\",\n\n  \"type\":\"array\", \"minItems\":2, \"maxItems\":2,\n  \"items\":\n  {\n    \"type\":\"object\",\n    \"properties\":\n    {\n      \"address\":{\"type\":\"string\"},\n      \"port\":{\"type\":\"integer\", \"minimum\":0, \"maximum\":65535}\n    },\n    \"required\":[\"address\", \"port\"]\n  },\n  \"uniqueItems\":true,\n  \"additionalItems\":false\n}\n"
        },
        {
            "name":"3J Range: Server (Valid)",
            "data":"{\n  \"name\":\"Server 14\",\n  \"address\":\"192.168.1.60\",\n  \"port\":80\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Server name and IP address, port\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"},\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\", \"minimum\":0, \"maximum\":65535}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"name\", \"address\", \"port\"]\n}\n"
        },
        {
            "name":"3J Range: Server (Invalid)",
            "data":"{\n  \"name\":\"Server 14\",\n  \"address\":\"192.168.1.60\",\n  \"port\":100000\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Server\",\n  \"description\":\"Server name and IP address, port\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{\"type\":\"string\"},\n    \"address\":{\"type\":\"string\"},\n    \"port\":{\"type\":\"integer\", \"minimum\":0, \"maximum\":65535}\n  },\n  \"additionalProperties\":false,\n  \"required\":[\"name\", \"address\", \"port\"]\n}\n"
        },
        {
            "name":"3J Number: Distance (Valid)",
            "data":"{\n  \"distance\":0.01\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Distance\",\n  \"description\":\"Distance, must be greater than zero.\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"distance\":{\"type\":\"number\", \"minimum\":0.0, \"exclusiveMinimum\":true}\n  }\n}\n"
        },
        {
            "name":"3J Number: Distance (Invalid)",
            "data":"{\n  \"distance\":0.0\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Distance\",\n  \"description\":\"Distance, must be greater than zero.\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"distance\":{\"type\":\"number\", \"minimum\":0.0, \"exclusiveMinimum\":true}\n  }\n}\n"
        },
        {
            "name":"3J Number: Measure (Valid)",
            "data":"{\n  \"length\":72\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Measure\",\n  \"description\":\"Inches measurement, must be even number of feet\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"length\":{\"type\":\"integer\", \"minimum\":0, \"multipleOf\":12}\n  }\n}\n"
        },
        {
            "name":"3J Number: Measure (Invalid)",
            "data":"{\n  \"length\":74\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Measure\",\n  \"description\":\"Inches measurement, must be even number of feet\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"length\":{\"type\":\"integer\", \"minimum\":0, \"multipleOf\":12}\n  }\n}\n"
        },
        {
            "name":"3J String: Name (Valid)",
            "data":"{\n  \"firstName\":\"John\",\n  \"middleName\":\"David\",\n  \"lastName\":\"Doe\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Name\",\n  \"description\":\"Full name, middle name optional\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"firstName\":{\"type\":\"string\", \"minLength\":1, \"maxLength\":10},\n    \"middleName\":{\"type\":\"string\", \"minLength\":0, \"maxLength\":8},\n    \"lastName\":{\"type\":\"string\", \"minLength\":1, \"maxLength\":20}\n  },\n  \"required\":[\"firstName\",\"lastName\"]\n}\n"
        },
        {
            "name":"3J String: Name (Invalid)",
            "data":"{\n  \"firstName\":\"Jane\",\n  \"middleName\":\"Alexandria\",\n  \"lastName\":\"Doe\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Name\",\n  \"description\":\"Full name, middle name optional\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"firstName\":{\"type\":\"string\", \"minLength\":1, \"maxLength\":10},\n    \"middleName\":{\"type\":\"string\", \"minLength\":0, \"maxLength\":8},\n    \"lastName\":{\"type\":\"string\", \"minLength\":1, \"maxLength\":20}\n  },\n  \"required\":[\"firstName\",\"lastName\"]\n}\n"
        },
        {
            "name":"3J String: Zip Code (Valid)",
            "data":"{\n  \"zipCode\":\"12345-6789\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"US zip code\",\n  \"description\":\"US zip code with pattern to validate against\",\n  \n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"zipCode\":{\"type\":\"string\", \"pattern\":\"^[0-9]{5}(-[0-9]{4})?$\"}\n  }\n}\n"
        },
        {
            "name":"3J String: Zip Code (Invalid)",
            "data":"{\n  \"zipCode\":\"123456789\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"US zip code\",\n  \"description\":\"US zip code with pattern to validate against\",\n  \n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"zipCode\":{\"type\":\"string\", \"pattern\":\"^[0-9]{5}(-[0-9]{4})?$\"}\n  }\n}\n"
        },
        {
            "name":"3J Enumeration: Post USA (Valid)",
            "data":"{\n  \"state\":\"HI\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"US postal abbreviations\",\n  \"description\":\"Postal abbreviations: US states/territories\",\n  \n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"state\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AL\", \"AK\", \"AR\", \"AS\", \"AZ\", \"CA\", \"CO\", \"CT\",\n              \"DC\", \"DE\", \"FL\", \"FM\", \"GA\", \"GU\", \"HI\", \"IA\",\n              \"ID\", \"IL\", \"IN\", \"KS\", \"KY\", \"LA\", \"MA\", \"MD\",\n              \"ME\", \"MH\", \"MI\", \"MN\", \"MO\", \"MP\", \"MS\", \"MT\",\n              \"NC\", \"ND\", \"NE\", \"NH\", \"NJ\", \"NM\", \"NV\", \"OH\",\n              \"OK\", \"OR\", \"PA\", \"PR\", \"PW\", \"RI\", \"SC\", \"SD\",\n              \"TN\", \"TX\", \"UT\", \"VA\", \"VI\", \"VT\", \"WA\", \"WI\",\n              \"WV\", \"WY\", \"AA\", \"AE\", \"AP\"]\n    }\n  }\n}\n"
        },
        {
            "name":"3J Enumeration: Post USA (Invalid)",
            "data":"{\n  \"state\":\"HA\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"US postal abbreviations\",\n  \"description\":\"Postal abbreviations: US states/territories\",\n  \n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"state\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AL\", \"AK\", \"AR\", \"AS\", \"AZ\", \"CA\", \"CO\", \"CT\",\n              \"DC\", \"DE\", \"FL\", \"FM\", \"GA\", \"GU\", \"HI\", \"IA\",\n              \"ID\", \"IL\", \"IN\", \"KS\", \"KY\", \"LA\", \"MA\", \"MD\",\n              \"ME\", \"MH\", \"MI\", \"MN\", \"MO\", \"MP\", \"MS\", \"MT\",\n              \"NC\", \"ND\", \"NE\", \"NH\", \"NJ\", \"NM\", \"NV\", \"OH\",\n              \"OK\", \"OR\", \"PA\", \"PR\", \"PW\", \"RI\", \"SC\", \"SD\",\n              \"TN\", \"TX\", \"UT\", \"VA\", \"VI\", \"VT\", \"WA\", \"WI\",\n              \"WV\", \"WY\", \"AA\", \"AE\", \"AP\"]\n    }\n  }\n}\n"
        },
        {
            "name":"3K Internal Ref: Post Address (Valid)",
            "data":"{\n  \"address\":\n  {\n    \"name\":\"John and Jane Doe\",\n    \"number\":\"1124\",\n    \"street\":\"Elm Street\",\n    \"city\":\"Anytown\",\n    \"province\":\"PE\",\n    \"postalCode\":\"A1B2C3\"\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Postal address for Canada\",\n  \"description\":\"Postal addresses for the country of Canada\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"name\":{\"type\":\"string\"},\n        \"number\":{\"type\":\"string\"},\n        \"street\":{\"type\":\"string\"},\n        \"street2\":{\"type\":\"string\"},\n        \"city\":{\"type\":\"string\"},\n        \"province\":{\"$ref\":\"#/definitions/CAN_province\"},\n        \"postalCode\":{\"$ref\":\"#/definitions/CAN_postalCode\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"name\", \"number\", \"street\", \"city\", \"province\", \"postalCode\"]\n    }\n  },\n\n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    }\n  }\n}\n"
        },
        {
            "name":"3K Internal Ref: Post Address (Invalid)",
            "data":"{\n  \"address\":\n  {\n    \"name\":\"John and Jane Doe\",\n    \"number\":\"1124\",\n    \"street\":\"Elm Street\",\n    \"city\":\"Anytown\",\n    \"province\":\"PD\",\n    \"postalCode\":\"A1B2C3\"\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Postal address for Canada\",\n  \"description\":\"Postal addresses for the country of Canada\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"name\":{\"type\":\"string\"},\n        \"number\":{\"type\":\"string\"},\n        \"street\":{\"type\":\"string\"},\n        \"street2\":{\"type\":\"string\"},\n        \"city\":{\"type\":\"string\"},\n        \"province\":{\"$ref\":\"#/definitions/CAN_province\"},\n        \"postalCode\":{\"$ref\":\"#/definitions/CAN_postalCode\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"name\", \"number\", \"street\", \"city\", \"province\", \"postalCode\"]\n    }\n  },\n\n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    }\n  }\n}\n"
        },
        {
            "name":"3L External Ref: Post Address (Valid)",
            "data":"{\n  \"address\":\n  {\n    \"name\":\"John and Jane Doe\",\n    \"number\":\"1124\",\n    \"street\":\"Elm Street\",\n    \"city\":\"Anytown\",\n    \"province\":\"PE\",\n    \"postalCode\":\"A1B2C3\"\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Postal address for Canada\",\n  \"description\":\"Postal address for Canada\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"name\":{\"type\":\"string\"},\n        \"number\":{\"type\":\"string\"},\n        \"street\":{\"type\":\"string\"},\n        \"street2\":{\"type\":\"string\"},\n        \"city\":{\"type\":\"string\"},\n        \"province\":\n        {\n            \"$ref\":\"http://localhost:8081/schema/postCanadaCommon_schema.json#/definitions/CAN_province\"\n        },\n        \"postalCode\":\n        {\n            \"$ref\":\"http://localhost:8081/schema/postCanadaCommon_schema.json#/definitions/CAN_postalCode\"\n        }\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"name\", \"number\", \"street\", \"city\", \"province\", \"postalCode\"]\n    }\n  }\n}\n",
            "ref":["{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Canada provincial postal abbreviations\",\n  \"description\":\"Postal abbreviations for Canada\",\n\n  \"id\":\"http://localhost:8081/schema/postCanadaCommon_schema.json\",\n\n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    }\n  }\n}\n"]
        },
        {
            "name":"3L External Ref: Post Address (Invalid)",
            "data":"{\n  \"address\":\n  {\n    \"name\":\"John and Jane Doe\",\n    \"number\":\"1124\",\n    \"street\":\"Elm Street\",\n    \"city\":\"Anytown\",\n    \"province\":\"PD\",\n    \"postalCode\":\"A1B2C3\"\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Postal address for Canada\",\n  \"description\":\"Postal addresses for the country of Canada\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"name\":{\"type\":\"string\"},\n        \"number\":{\"type\":\"string\"},\n        \"street\":{\"type\":\"string\"},\n        \"street2\":{\"type\":\"string\"},\n        \"city\":{\"type\":\"string\"},\n        \"province\":{\"$ref\":\"#/definitions/CAN_province\"},\n        \"postalCode\":{\"$ref\":\"#/definitions/CAN_postalCode\"}\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"name\", \"number\", \"street\", \"city\", \"province\", \"postalCode\"]\n    }\n  },\n\n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    }\n  }\n}\n",
            "ref":["{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Canada provincial postal abbreviations\",\n  \"description\":\"Postal abbreviations for Canada\",\n\n  \"id\":\"http://localhost:8081/schema/postCanadaCommon_schema.json\",\n\n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    }\n  }\n}\n"]
        },
        {
            "name":"4A Mutually Exclusive: Tax Entity (Valid)",
            "data":"{\n  \"name\":\"Jane Doe\",\n  \"ssn\":\"123-45-6789\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Taxation Id\",\n  \"description\":\"Identification number for taxation purposes\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{ \"type\":\"string\" },\n    \"ssn\":{ \"type\":\"string\", \"pattern\":\"^[0-9]{3}-[0-9]{2}-[0-9]{4}$\" },\n    \"ein\":{ \"type\":\"string\", \"pattern\":\"^[0-9]{2}-[0-9]{7}$\" },\n    \"itin\":{ \"type\":\"string\", \"pattern\":\"^9[0-9]{2}-[0-9]{2}-[0-9]{4}$\" }\n  },\n  \"required\":[\"name\"],\n  \"additionalProperties\":false,\n\n  \"oneOf\":\n  [\n    { \"required\":[\"ssn\"] },\n    { \"required\":[\"ein\"] },\n    { \"required\":[\"itin\"] }\n  ]\n}\n"
        },
        {
            "name":"4A Mutually Exclusive: Tax Entity (Invalid)",
            "data":"{\n  \"name\":\"Jane Doe\",\n  \"ssn\":\"123-45-6789\",\n  \"itin\":\"901-23-4567\"\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Taxation Id\",\n  \"description\":\"Identification number for taxation purposes\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"name\":{ \"type\":\"string\" },\n    \"ssn\":{ \"type\":\"string\", \"pattern\":\"^[0-9]{3}-[0-9]{2}-[0-9]{4}$\" },\n    \"ein\":{ \"type\":\"string\", \"pattern\":\"^[0-9]{2}-[0-9]{7}$\" },\n    \"itin\":{ \"type\":\"string\", \"pattern\":\"^9[0-9]{2}-[0-9]{2}-[0-9]{4}$\" }\n  },\n  \"required\":[\"name\"],\n  \"additionalProperties\":false,\n\n  \"oneOf\":\n  [\n    { \"required\":[\"ssn\"] },\n    { \"required\":[\"ein\"] },\n    { \"required\":[\"itin\"] }\n  ]\n}\n"
        },
        {
            "name":"4B Dependent Properties: Order (Valid)",
            "data":"{\n  \"orders\":\n  [\n    {\n      \"order\":\"123456789\",\n      \"billTo\":\"Jane Doe\",\n      \"billAddress\":\"1234 Elm St, Anytown PA 12345\",\n      \"shipTo\":\"John Public\",\n      \"shipAddress\":\"2345 Oak St, Anytown PA 12346\",\n      \"signature\":true\n    },\n    {\n      \"order\":\"234567890\",\n      \"billTo\":\"Jack Smith\",\n      \"billAddress\":\"111 Main St, Anytown PA 12345\"\n    }\n  ]\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Order\",\n  \"description\":\"Order billing and shipping information\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"orders\":\n    {\n      \"type\":\"array\",\n      \"items\":\n      {\n        \"properties\":\n        {\n          \"order\":{\"type\":\"string\"},\n          \"billTo\":{\"type\":\"string\"},\n          \"billAddress\":{\"type\":\"string\"},\n          \"shipTo\":{\"type\":\"string\"}\n        },\n        \"required\":[\"order\", \"billTo\", \"billAddress\"],\n        \"dependencies\":\n        {\n          \"shipTo\":\n          {\n            \"properties\":\n            {\n              \"shipAddress\":{\"type\":\"string\"},\n              \"signature\":{\"type\":\"boolean\"}\n            },\n            \"required\":[\"shipAddress\",\"signature\"]\n          }\n        }\n      }\n    }\n  }\n}\n"
        },
        {
            "name":"4B Dependent Properties: Order (Invalid)",
            "data":"{\n  \"orders\":\n  [\n    {\n      \"order\":\"123456789\",\n      \"billTo\":\"Jane Doe\",\n      \"billAddress\":\"1234 Elm St, Anytown PA 12345\",\n      \"shipTo\":\"John Public\",\n      \"shipAddress\":\"2345 Oak St, Anytown PA 12346\",\n      \"signature\":1\n    }\n  ]\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"Order\",\n  \"description\":\"Order billing and shipping information\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"orders\":\n    {\n      \"type\":\"array\",\n      \"items\":\n      {\n        \"properties\":\n        {\n          \"order\":{\"type\":\"string\"},\n          \"billTo\":{\"type\":\"string\"},\n          \"billAddress\":{\"type\":\"string\"},\n          \"shipTo\":{\"type\":\"string\"}\n        },\n        \"required\":[\"order\", \"billTo\", \"billAddress\"],\n        \"dependencies\":\n        {\n          \"shipTo\":\n          {\n            \"properties\":\n            {\n              \"shipAddress\":{\"type\":\"string\"},\n              \"signature\":{\"type\":\"boolean\"}\n            },\n            \"required\":[\"shipAddress\",\"signature\"]\n          }\n        }\n      }\n    }\n  }\n}\n"
        },
        {
            "name":"4C Selector Driven Content: Address (Valid)",
            "data":"{\n  \"address\":\n  {\n    \"name\":\"John and Jane Doe\",\n    \"number\":\"1124\",\n    \"street\":\"Elm Street\",\n    \"city\":\"Anytown\",\n    \"national\":\n    {\n      \"province\":\"PE\",\n      \"country\":\"CAN\",\n      \"postalCode\":\"A1B2C3\"\n    }\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"North America address\",\n  \"description\":\"Postal addresses for Canada, USA and Mexico\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"name\":{\"type\":\"string\"},\n        \"number\":{\"type\":\"string\"},\n        \"street\":{\"type\":\"string\"},\n        \"street2\":{\"type\":\"string\"},\n        \"city\":{\"type\":\"string\"},\n        \"national\":\n        {\n          \"oneOf\":\n          [\n            {\n              \"properties\":\n              {\n                \"country\":{\"type\":\"string\", \"enum\":[\"CAN\"]},\n                \"province\":{\"$ref\":\"#/definitions/CAN_province\"},\n                \"postalCode\":{\"$ref\":\"#/definitions/CAN_postalCode\"}\n              },\n              \"additionalProperties\":false,\n              \"required\":[\"country\", \"province\", \"postalCode\"]\n            },\n            {\n              \"properties\":\n              {\n                \"country\":{\"type\":\"string\", \"enum\":[\"USA\"]},\n                \"state\":{\"$ref\":\"#/definitions/USA_state\"},\n                \"zipCode\":{\"$ref\":\"#/definitions/USA_zipCode\"}\n              },\n              \"additionalProperties\":false,\n              \"required\":[\"country\", \"state\", \"zipCode\"]\n            },\n            {\n              \"properties\":\n              {\n                \"country\":{\"type\":\"string\", \"enum\":[\"MEX\"]},\n                \"state\":{\"$ref\":\"#/definitions/MEX_state\"},\n                \"postalCode\":{\"$ref\":\"#/definitions/MEX_postalCode\"}\n              },\n              \"additionalProperties\":false,\n              \"required\":[\"country\", \"state\", \"postalCode\"]\n            }\n          ]\n        }\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"name\", \"number\", \"street\", \"city\", \"national\"]\n    }\n  },\n  \n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    },\n    \"USA_state\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AL\", \"AK\", \"AR\", \"AS\", \"AZ\", \"CA\", \"CO\", \"CT\",\n              \"DC\", \"DE\", \"FL\", \"FM\", \"GA\", \"GU\", \"HI\", \"IA\",\n              \"ID\", \"IL\", \"IN\", \"KS\", \"KY\", \"LA\", \"MA\", \"MD\",\n              \"ME\", \"MH\", \"MI\", \"MN\", \"MO\", \"MP\", \"MS\", \"MT\",\n              \"NC\", \"ND\", \"NE\", \"NH\", \"NJ\", \"NM\", \"NV\", \"OH\",\n              \"OK\", \"OR\", \"PA\", \"PR\", \"PW\", \"RI\", \"SC\", \"SD\",\n              \"TN\", \"TX\", \"UT\", \"VA\", \"VI\", \"VT\", \"WA\", \"WI\",\n              \"WV\", \"WY\", \"AA\", \"AE\", \"AP\"]\n    },\n    \"USA_zipCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[0-9]{5}(-[0-9]{4})?$\"\n    },\n    \"MEX_state\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AGS\", \"BC\", \"BCS\", \"CAM\", \"COAH\", \"COL\", \"CHIH\",\n              \"CHIS\", \"DF\", \"DGO\", \"GTO\", \"GRO\", \"HGO\", \"JAL\",\n              \"MEX\", \"MICH\", \"MOR\", \"NAY\", \"NL\", \"OAX\", \"PUE\",\n              \"QRO\", \"Q ROO\", \"SLP\", \"SIN\", \"SON\", \"TAB\",\n              \"TAMPS\", \"TLAX\", \"VER\", \"YUC\", \"ZAC\"]\n    },\n    \"MEX_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[0-9]{5}$\"\n    }\n  }\n}\n"
        },
        {
            "name":"4C Selector Driven Content: Address (Invalid)",
            "data":"{\n  \"address\":\n  {\n    \"name\":\"John and Jane Doe\",\n    \"number\":\"1124\",\n    \"street\":\"Elm Street\",\n    \"city\":\"Anytown\",\n    \"national\":\n    {\n      \"province\":\"PD\",\n      \"country\":\"CAN\",\n      \"postalCode\":\"A1B2C3\"\n    }\n  }\n}\n",
            "schema":"{\n  \"$schema\":\"http://json-schema.org/draft-04/schema#\",\n  \"title\":\"North America address\",\n  \"description\":\"Postal addresses for Canada, USA and Mexico\",\n\n  \"type\":\"object\",\n  \"properties\":\n  {\n    \"address\":\n    {\n      \"type\":\"object\",\n      \"properties\":\n      {\n        \"name\":{\"type\":\"string\"},\n        \"number\":{\"type\":\"string\"},\n        \"street\":{\"type\":\"string\"},\n        \"street2\":{\"type\":\"string\"},\n        \"city\":{\"type\":\"string\"},\n        \"national\":\n        {\n          \"oneOf\":\n          [\n            {\n              \"properties\":\n              {\n                \"country\":{\"type\":\"string\", \"enum\":[\"CAN\"]},\n                \"province\":{\"$ref\":\"#/definitions/CAN_province\"},\n                \"postalCode\":{\"$ref\":\"#/definitions/CAN_postalCode\"}\n              },\n              \"additionalProperties\":false,\n              \"required\":[\"country\", \"province\", \"postalCode\"]\n            },\n            {\n              \"properties\":\n              {\n                \"country\":{\"type\":\"string\", \"enum\":[\"USA\"]},\n                \"state\":{\"$ref\":\"#/definitions/USA_state\"},\n                \"zipCode\":{\"$ref\":\"#/definitions/USA_zipCode\"}\n              },\n              \"additionalProperties\":false,\n              \"required\":[\"country\", \"state\", \"zipCode\"]\n            },\n            {\n              \"properties\":\n              {\n                \"country\":{\"type\":\"string\", \"enum\":[\"MEX\"]},\n                \"state\":{\"$ref\":\"#/definitions/MEX_state\"},\n                \"postalCode\":{\"$ref\":\"#/definitions/MEX_postalCode\"}\n              },\n              \"additionalProperties\":false,\n              \"required\":[\"country\", \"state\", \"postalCode\"]\n            }\n          ]\n        }\n      },\n      \"additionalProperties\":false,\n      \"required\":[\"name\", \"number\", \"street\", \"city\", \"national\"]\n    }\n  },\n  \n  \"definitions\":\n  {\n    \"CAN_province\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AB\", \"BC\", \"MB\", \"NB\", \"NL\", \"NS\", \"NT\",\n              \"NU\", \"ON\", \"PE\", \"QC\", \"SK\", \"YT\"]\n    },\n    \"CAN_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[A-Z][0-9][A-Z]( )?[0-9][A-Z][0-9]$\"\n    },\n    \"USA_state\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AL\", \"AK\", \"AR\", \"AS\", \"AZ\", \"CA\", \"CO\", \"CT\",\n              \"DC\", \"DE\", \"FL\", \"FM\", \"GA\", \"GU\", \"HI\", \"IA\",\n              \"ID\", \"IL\", \"IN\", \"KS\", \"KY\", \"LA\", \"MA\", \"MD\",\n              \"ME\", \"MH\", \"MI\", \"MN\", \"MO\", \"MP\", \"MS\", \"MT\",\n              \"NC\", \"ND\", \"NE\", \"NH\", \"NJ\", \"NM\", \"NV\", \"OH\",\n              \"OK\", \"OR\", \"PA\", \"PR\", \"PW\", \"RI\", \"SC\", \"SD\",\n              \"TN\", \"TX\", \"UT\", \"VA\", \"VI\", \"VT\", \"WA\", \"WI\",\n              \"WV\", \"WY\", \"AA\", \"AE\", \"AP\"]\n    },\n    \"USA_zipCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[0-9]{5}(-[0-9]{4})?$\"\n    },\n    \"MEX_state\":\n    {\n      \"type\":\"string\",\n      \"enum\":[\"AGS\", \"BC\", \"BCS\", \"CAM\", \"COAH\", \"COL\", \"CHIH\",\n              \"CHIS\", \"DF\", \"DGO\", \"GTO\", \"GRO\", \"HGO\", \"JAL\",\n              \"MEX\", \"MICH\", \"MOR\", \"NAY\", \"NL\", \"OAX\", \"PUE\",\n              \"QRO\", \"Q ROO\", \"SLP\", \"SIN\", \"SON\", \"TAB\",\n              \"TAMPS\", \"TLAX\", \"VER\", \"YUC\", \"ZAC\"]\n    },\n    \"MEX_postalCode\":\n    {\n      \"type\":\"string\",\n      \"pattern\":\"^[0-9]{5}$\"\n    }\n  }\n}\n"
        }
    ]
};
  
var catalog = null;
var itemNames = null;
function loadExamples (uri) {
    if (uri === null) {
        catalog = defaultCatalog;
        itemNames = [];
        for (var ctr = 0; ctr < catalog.entries.length; ctr ++) {
            itemNames.push (catalog.entries[ctr].name);
        }
    }
}

function getItemNames ()
{
    return (itemNames);
}

function getItem (index) {
    var item = catalog.entries[index];
    if (item.ref === undefined) {
        item.ref = [];
    }
    if (item.ref.length < 8) {
        for (var ctr = 0; ctr < 8; ctr ++) {
            item.ref.push ("");
        }
    }
    return (catalog.entries[index]);
}
