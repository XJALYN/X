'use strict';

Component({
  properties: {
    type: {
      type: String,
      value: 'horizon' //vertical
    },

    hasDesc: {
      type: Boolean,
      value: false
    },

    steps: { // 必须
      type: Array,
      value: []
    },

    className: String
  }
});