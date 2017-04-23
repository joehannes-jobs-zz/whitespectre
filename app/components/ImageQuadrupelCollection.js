import Backbone from 'backbone';
import ImageQuadrupel from './ImageQuadrupelModel';

export default Backbone.Collection.extend({
  model: ImageQuadrupel,
  url: 'http://localhost:8080/app/assets/db.json',
});
