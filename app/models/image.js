import DS from 'ember-data';

export default DS.Model.extend({
  small_url:DS.attr('string'),
  imagepath:function(){
  	return "http://venky.roroid.asia"+this.get('small_url');
  }.property()
});
