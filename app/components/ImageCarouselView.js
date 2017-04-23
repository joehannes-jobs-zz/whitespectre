import Marionette from 'backbone.marionette';

import ImageQuadrupelCollection from './ImageQuadrupelCollection';
import ImageQuadrupelView from './ImageQuadrupelView';

var initialized = false;
var activeQuadrupelNr = 0;
var quadrupelHeight = 0;

export default Marionette.CollectionView.extend({
  tagName: 'ul',
  className: 'full__height full__width carousel',
  collection: new ImageQuadrupelCollection(),
  childView: ImageQuadrupelView,
  initialize: function () {
    this.collection.fetch();
  },
  onAddChild: function (child) {
    //only marked .active quadrupels do have next/prev buttons ...
    if (!initialized) {
      child.$el.children().first().addClass('active');
      initialized = true;
    }
  },
  events: {
    'click button.carousel-prev': function (ev) {
      //plain move the whole thing by 100% x ItemNr
      activeQuadrupelNr--;
      quadrupelHeight = this.$el.height() + this.$el.find('header.signature').outerHeight();
      this.$el.css('top', (-quadrupelHeight * activeQuadrupelNr).toString() + 'px')
    },
    'click button.carousel-next': function (ev) {
      activeQuadrupelNr++;
      //pray forgive this duplication, I'm just not used to BB yet and don't know the best practice for these behaviours n stuff
      quadrupelHeight = this.$el.height() + this.$el.find('header.signature').outerHeight();
      this.$el.css('top', (-quadrupelHeight * activeQuadrupelNr).toString() + 'px')
    }
  }
});
