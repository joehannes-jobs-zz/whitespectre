import Marionette from 'backbone.marionette';

import ImageCarouselView from './ImageCarouselView';

export default Marionette.Application.extend({
  region: '#app',
  onStart() {
    this.showView(new ImageCarouselView());
  }
});
