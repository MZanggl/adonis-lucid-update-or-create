### Registering provider
Make sure to register the update or create provider inside start/app.js

```javascript
const providers = [
  'adonis-lucid-update-or-create/providers/UpdateOrCreateProvider'
]
```

### Usage
First add the trait to the model.

```javascript
const Model = use('Model')

class Rating extends Model {
  static boot () {
    super.boot()

    this.addTrait('@provider:Lucid/UpdateOrCreate')
  }
}
```

Finally use the method as follows
```javascript
const Rating = use('App/Models/Rating')

Rating.updateOrCreate(
    { 
        user_id: 18,
        article_id: 23,
    },
    { rating: 5 }
)
```