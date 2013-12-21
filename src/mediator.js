define(['jquery'], function($) {
	return {
		topics: {},
		publish: function(topicsName) {
			var args = Array.prototype.slice.call(arguments, 1);

			for (var i = 0; i < this.topics[topicsName].length; i++) {
				var s = this.topics[topicsName][i];
				s.callback.apply(s.context, args);

			}
		},
		subscribe: function(topicsName, callbackFn) {
			
			if(!this.topics[topicsName]) {
				this.topics[topicsName] = [];
			}

			

			this.topics[topicsName].push({context: this, callback:callbackFn});

		}


	};


})