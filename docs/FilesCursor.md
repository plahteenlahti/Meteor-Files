### FilesCursor [*Anywhere*]

Implementation of Cursor for FilesCollection. Returned from `FilesCollection#find()`.

```js
import { FilesCollection } from "meteor/plahteenlahti:files";

const imagesCollection = new FilesCollection();
const cursor = imagesCollection.find(); // <-- Returns FilesCursor Instance
```

#### Methods:

- `get()` - {_[Object]_} - Returns all matching document(s) as an Array. Alias of `.fetch()`
- `hasNext()`- {_Boolean_} - Returns `true` if there is next item available on Cursor
- `next()` - {_Object_|_undefined_} - Returns next available object on Cursor
- `hasPrevious()` - {_Boolean_} - Returns `true` if there is previous item available on Cursor
- `previous()` - {_Object_|_undefined_} - Returns previous object on Cursor
- `fetch()` - {_[Object]_} - Returns all matching document(s) as an Array
- `first()` - {_Object_|_undefined_} - Returns first item on Cursor, if available
- `last()` - {_Object_|_undefined_} - Returns last item on Cursor, if available
- `count()` - {_Number_} - Returns the number of documents that match a query
- `remove(callback)` - {_undefined_} - Removes all documents that match a query. Callback has `error` argument
- `forEach(callback, context)` - {_undefined_} - Call `callback` once for each matching document, sequentially and synchronously.
  - `callback` - {_Function_} - Function to call. It will be called with three arguments: the `file`, a 0-based index, and cursor itself
  - `context` - {_Object_} - An object which will be the value of `this` inside `callback`
- `each()` - {_[FileCursor]_} - Returns an Array of `FileCursor` made for each document on current Cursor. Useful when using in `{{#each cursor.each}}...{{/each}}` block template helper
- `map(callback, context)` - {_Array_} - Map `callback` over all matching documents. Returns an Array
  - `callback` - {_Function_} - Function to call. It will be called with three arguments: the `file`, a 0-based index, and cursor itself
  - `context` - {_Object_} - An object which will be the value of `this` inside `callback`
- `current()` - {_Object_|_undefined_} - Returns current item on Cursor, if available
- `observe(callbacks)` - {_Object_} - Functions to call to deliver the result set as it changes. Watch a query. Receive callbacks as the result set changes. Read more [here](http://docs.meteor.com/api/collections.html#Mongo-Cursor-observe)
- `observeChanges(callbacks)` - {_Object_} - Watch a query. Receive callbacks as the result set changes. Only the differences between the old and new documents are passed to the callbacks.. Read more [here](http://docs.meteor.com/api/collections.html#Mongo-Cursor-observeChanges)
