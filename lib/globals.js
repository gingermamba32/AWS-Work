module.exports = {
	applicationPort 			: 80,
	
	database 					: function() {
		if (process.env.ENVIRONMENT) {
			var opswork = require('./../opswork');
			var opsWorksDB = opsworks.db;
			var rdsconnection = {
				host					: opsWorksDB.host,
				port 					: opsWorksDB.port,
		  		database 				: opsWorksDB.database,
				user     				: opsWorksDB.username,
		 		password 				: opsWorksDB.password	
			};
		return rdsconnection;
		}
		else {
			var local = require('./../config/local');
			var localconnection = local.db;
			return localconnection;
		}
	}
}