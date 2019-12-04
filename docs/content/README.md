# Content 


---

## Collections 
These are the current document collections:
* `articles/` - Contains articles displayed in the [Blog](newperspectives.blog/writing) page.
* `tweets/` - Contains articles displayed in the [Tweets](newperspectives.blog/tweets) page (currently under construction).
* `til/` - Contains articles displayed in the [Today I Learned](newperspectives.blog/til) page (currently under construction).
* `people/` - Contains information about creators and influencers that will be used when their `works` are being curated into New Perspectives.
* `works/` (beta) - Contains pieces of content made by myself and others that are featured throughout the site.

## Fields

### Base Fields
These fields should be available in *all* Collections. Though the exact usage may vary between Collections, the format must be consistent.

* `title`
* `date-published`
* `date-modified`
* `collection`
* `creator`

#### **`title`**
Indentifier of the contained content

Type: `string`

**Do not** prefix titles to show that an article is part of a group. 

    Example: 
    🚫 title: "Book Review - The Stormlight Archives are my new favorite fantasy series"
    ✅ title: "The Stormlight Archives are my new favorite fantasy series"


#### **`date-published`**
Date when this *file* was first made.

Type: `DateTime string` (see section below)

#### **`date-modified`**
Date when this file was last modified.

Type:  `DateTime string` (see section below)

#### **`collection`**
Name of the collection this file is stored in (should match the file's directory)

Type: `string`

#### **`creator`**
The creator/author of this piece.

Type: `string`

* For `works/`, this should be the creator of the art piece, not the writer of the article where the `work` is mentioned.


### Recommended Fields

#### **`date-created`**
Date when the work was created

Type:  `DateTime string` (see section below)

* Defaults to `date-published` field
* For `works/`, this should indicate when the piece of art was made, not when it was introduced to New Perspectives. It's appropriate to make a guess if you don't know the exact date of creation.
* Not recommended for `people/`





### DateTime
The accepted date format is extended format according to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601):

`YYYY-MM-DDThh:mm:ssTZD`

**Note:** This standard only refers to the plain-text version, as it's stored in the database. Implementations of the data can and should adjust the format to make it easier to read.

## Reference
These fields were losely based on [schema.org's](https://schema.org) [CreativeWork](https://schema.org/CreativeWork) datatype, as well as its subtypes.