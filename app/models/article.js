import DS from 'ember-data';

var Article = DS.Model.extend({
  title:  DS.attr('string'),
  body:   DS.attr('string')
});
export default Article;
