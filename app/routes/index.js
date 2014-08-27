import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		var p=this.store.find('product');
		var c=this.store.find('taxonomy');
		return [p,c];
	}
});
