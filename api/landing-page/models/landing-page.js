"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require("axios");
const netfifyWebhook = strapi.config.get("custom.netfifyWebhook");

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netfifyWebhook && axios.post(netfifyWebhook);
    },
    async afterUpdate(_, __, ___) {
      netfifyWebhook && axios.post(netfifyWebhook);
    },
  },
};
