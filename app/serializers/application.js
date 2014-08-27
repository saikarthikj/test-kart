import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    master: {embedded: 'always'},
    images: {embedded: 'always'},
    root: {embedded: 'always'},
    taxons:{embedded: 'always'}
  },
	extractArray: function(store, type, payload,id,requestType) {
  		delete payload.count;
  		delete payload.total_count;
  		delete payload.current_page;
  		delete payload.per_page;
  		delete payload.pages;
  		
    	return this._super(store,type,payload,id,requestType)
  	},

});
