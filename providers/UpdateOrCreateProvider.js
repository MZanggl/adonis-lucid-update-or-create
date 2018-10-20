const { ServiceProvider } = require('@adonisjs/fold')

class UpdateOrCreateProvider extends ServiceProvider {
  register () {
    this.app.bind('Adonis/Addons/UpdateOrCreate', () => {
      const UpdateOrCreate = require('../src/Traits/UpdateOrCreate')

      return new UpdateOrCreate()
    })

    this.app.alias('Adonis/Addons/UpdateOrCreate', 'Lucid/UpdateOrCreate')
  }
}

module.exports = UpdateOrCreateProvider