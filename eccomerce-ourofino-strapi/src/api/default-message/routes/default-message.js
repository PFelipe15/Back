'use strict';

/**
 * default-message router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::default-message.default-message');
