'use strict';

const model = 'competition';

/**
 * A set of functions called "actions" for `competition`
 */

module.exports = {

  /**
   * Get competition entries.
   *
   * @return {Object|Array}
   */

  find: function * () {
    this.model = model;
    try {
      var entries = yield strapi.hooks.blueprints.find(this);
      for (var i = entries.length - 1; i >= 0; i--){
        var entry = entries[i]
        if(entry['active']!=true){
          entries.splice(i, 1)
        }
        else{
          delete entry['createdBy']
          delete entry['updatedBy']
          delete entry['createdAt']
          delete entry['updatedAt']
          delete entry['about']
          delete entry['format']
          delete entry['rules']
          delete entry['contact']
          delete entry['prize']
          delete entry['contributors']
        }
      }
      this.body = entries;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Get a specific competition.
   *
   * @return {Object|Array}
   */

  findOne: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.findOne(this);
      delete entry['contributors']
      delete entry['createdBy']
      delete entry['updatedBy']
      delete entry['createdAt']
      delete entry['updatedAt']
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Create a competition entry.
   *
   * @return {Object}
   */

  create: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.create(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Update a competition entry.
   *
   * @return {Object}
   */

  update: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.update(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Destroy a competition entry.
   *
   * @return {Object}
   */

  destroy: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.destroy(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Add an entry to a specific competition.
   *
   * @return {Object}
   */

  add: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.add(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  },

  /**
   * Remove a specific entry from a specific competition.
   *
   * @return {Object}
   */

  remove: function * () {
    this.model = model;
    try {
      let entry = yield strapi.hooks.blueprints.remove(this);
      this.body = entry;
    } catch (err) {
      this.body = err;
    }
  }
};
