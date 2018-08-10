const env = process.env.NODE_ENV || 'development'

//insert your API Key & Secret for each environment, keep this file local and never push it to repo.
const config = {
	development :{
		APIKey : 'SC_b7z4aRL2Yl9GkWCmh3g',
		APISecret : 'pVx2EklOtt82Sofz0jroMDRz5ZvOSe4SjkHe'
	},
	production:{	
		APIKey : '',
		APISecret : ''
	}
};

module.exports = config[env]
