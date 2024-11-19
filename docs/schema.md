# Schema

_Below is default Files collection schema. Please keep default schema structure when extending it!. To pass your own schema use_ `schema` _property when passing config to_ [`FilesCollection`](https://github.com/veliovgroup/Meteor-Files/blob/master/docs/constructor.md) _constructor._

For more info see [Collection2](https://github.com/aldeed/meteor-collection2) and [simple-schema](https://atmospherejs.com/aldeed/simple-schema) packages.

```js
const defaultSchema = {
  _id: {
    type: String,
  },
  size: {
    type: Number,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  path: {
    type: String,
  },
  isVideo: {
    type: Boolean,
  },
  isAudio: {
    type: Boolean,
  },
  isImage: {
    type: Boolean,
  },
  isText: {
    type: Boolean,
  },
  isJSON: {
    type: Boolean,
  },
  isPDF: {
    type: Boolean,
  },
  extension: {
    type: String,
    optional: true,
  },
  ext: {
    type: String,
    optional: true,
  },
  extensionWithDot: {
    type: String,
    optional: true,
  },
  mime: {
    type: String,
    optional: true,
  },
  "mime-type": {
    type: String,
    optional: true,
  },
  _storagePath: {
    type: String,
  },
  _downloadRoute: {
    type: String,
  },
  _collectionName: {
    type: String,
  },
  public: {
    type: Boolean,
    optional: true,
  },
  meta: {
    type: Object,
    blackbox: true,
    optional: true,
  },
  userId: {
    type: String,
    optional: true,
  },
  updatedAt: {
    type: Date,
    optional: true,
  },
  versions: {
    type: Object,
    blackbox: true,
  },
};
```

## Attach schema (_Recommended_):

_Although this package comes with schema it isn't enabled (attached) by default (since v1.5.0), you're free to use it or not. To attach schema you need to install [Collection2](https://github.com/aldeed/meteor-collection2) and [simple-schema](https://atmospherejs.com/aldeed/simple-schema) packages separately._

```js
import { FilesCollection } from "meteor/plahteenlahti:files";
const imagesCollection = new FilesCollection({ collectionName: "images" });
imagesCollection.collection.attachSchema(new SimpleSchema(Images.schema));
```

## Extend default schema:

The default schema is available as a static property of `FilesCollection`, so you can extend it using a library like underscore:

```js
import { FilesCollection } from "meteor/plahteenlahti:files";
const mySchema = Object.assign({}, FilesCollection.schema, {
  myProp: {
    type: String,
  },
});

const imagesCollection = new FilesCollection({
  collectionName: "images",
  schema: mySchema,
});
imagesCollection.collection.attachSchema(new SimpleSchema(mySchema));
```

Or with ES6 object spread syntax:

```js
import { FilesCollection } from "meteor/plahteenlahti:files";
const mySchema = {
  ...FilesCollection.schema,
  myProp: {
    type: String,
  },
};

const imagesCollection = new FilesCollection({
  collectionName: "images",
  schema: mySchema,
});
imagesCollection.collection.attachSchema(new SimpleSchema(mySchema));
```

## Pass your own schema (_not recommended_):

```js
import { FilesCollection } from "meteor/plahteenlahti:files";
const mySchema = {
  /* Your schema here */
};

const imagesCollection = new FilesCollection({
  collectionName: "images",
  schema: mySchema,
});
```
