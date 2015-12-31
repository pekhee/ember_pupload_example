import Ember from "ember";

const get = Ember.get;
const set = Ember.set;

export default Ember.Route.extend({
  actions: {
    uploadImage: function (file) {
      file.upload('/api/attachments/upload').then( response => {
        console.log(response.headers.Location);
      });
    }
  }
});
