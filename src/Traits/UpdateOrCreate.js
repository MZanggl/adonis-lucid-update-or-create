"use strict";

class UpdateOrCreate {
  register(Model, customOptions = {}) {

    Model.updateOrCreate = async function(attributes, values, trx) {
      const instance = await Model.findOrNew(attributes)
      instance.merge(values)
      await instance.save(trx)

      return instance
    };

  }
}

module.exports = UpdateOrCreate
