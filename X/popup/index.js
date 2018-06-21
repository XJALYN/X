'use strict';

Component({
  properties: {
    show: {
      type: Boolean,
      value: false
    },

    overlay: {
      type: Boolean,
      value: false
    },

    closeOnClickOverlay: {
      type: Boolean,
      value: true
    },

    // 弹出方向
    type: {
      type: String,
      value: 'center'
    }
  },

  methods: {
    handleMaskClick: function handleMaskClick() {
      this.triggerEvent('tap', {});

      if (!this.data.closeOnClickOverlay) {
        return;
      }
      this.triggerEvent('close', {});
    }
  }
});