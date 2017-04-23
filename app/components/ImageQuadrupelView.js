import Marionette from 'backbone.marionette';
import template from '../templates/image_quadrupel.jst';

export default Marionette.View.extend({
  tagName: 'li',
  className: 'full__height',
  template: template,
  events: {
    'click img': function (ev) {
      $(ev.target).toggleClass('active');
    }
  }
});
