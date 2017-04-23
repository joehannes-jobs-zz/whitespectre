import Marionette from 'backbone.marionette';

import ImageQuadrupelCollection from './ImageQuadrupelCollection';
import ImageQuadrupelView from './ImageQuadrupelView';

export default Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'full__height full__width',
  collection: new ImageQuadrupelCollection(),
  childView: ImageQuadrupelView,
  initialize: function () {
    this.collection.fetch();
  }
});
