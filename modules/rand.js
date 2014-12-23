
module.exports.commands = {

	rand: function(r, parts, reply) {
		reply(parts[Math.floor(Math.random() * parts.length)]);
	},

	multirand: function(r, parts, reply) {
		if(parseInt(parts[0],10) > 9e10) { 
			reply("no");
			return;
		}
		if(parts.length > 100) {
			reply("dicks a million times");
			return;
		}

		var results = {};
		for(var i = 0; i < parseInt(parts[0],10); i++) {
			var choice = parts[Math.floor(Math.random() * (parts.length - 1)) + 1];
			if(typeof results[choice] == "undefined") {
				results[choice] = 1;
			}
			else {
				results[choice] = results[choice] + 1;
			}
		}

		reply(
			Object.keys(results)
			.sort(function(k1,k2){return results[k2]-results[k1];})
			.map(function(k) { return k + " " + results[k] + " times"; }) 
			.join(", ")
		);
	}

};

