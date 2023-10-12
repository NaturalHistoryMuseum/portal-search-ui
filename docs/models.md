**NB: This document is a work in progress. It is incomplete and subject to change frequently and/or drastically.** :sparkles:

# Overview

```mermaid
sequenceDiagram
    box Query
        participant QF as Pinia
        participant QB as Query JSON
    end
    box Results
        participant RB as Search
        participant RF as Pinia
    end

    QF ->> QB : submitted via form
    QB ->> QF : loaded via slug or doi
    QB ->> RB : passed to search backend
    RB ->> RF : displayed to user
```


# Query in Pinia

```mermaid
classDiagram
    class Query {
        +Array~Resource~ resources
        +Group rootGroup
        +generateQuery() : json
    }

    class Resource {
        +String id
        +String name
        +Number version
    }

    class Group {
        +String id
        +String kind
        +String parentId
        +Group parent
        +Array~Term~ terms
        +Array~Group~ groups
    }

    class Term {
        +String id
        +String contentType
        +String matchType
        +Array~String~ fieldNames
        +String widgetType
        +String helpText
        +value
        +String parentId
        +Group parent
    }

    Query --> "many" Resource
    Query --> "1" Group
    Group "1" <--> "many" Term
    Group "0 or 1" <--> "many" Group
```


# Query JSON

The Pinia query will be translated into a JSON object defined by the query schema in [ckanext-versioned-datastore](https://github.com/NaturalHistoryMuseum/ckanext-versioned-datastore/tree/main/ckanext/versioned_datastore/theme/public/querySchemas). Documentation can also be found [on the Data Portal](https://data.nhm.ac.uk/api.html).


# Search

The query JSON is passed on to the [Data Portal API](https://data.nhm.ac.uk/api.html).


# Results in Pinia

```mermaid
classDiagram

class Results {
    +Number page
    +String after
    +Number total
    +Array~Record~ records
    +getSlug()
    +getDOI()
    +getDownload()
}

class Record {
    +String id
}

Results --> "many" Record
```
