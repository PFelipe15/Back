'use strict';

/**
 * default-message service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::default-message.default-message');
