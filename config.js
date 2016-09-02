var config = {}

config.host = process.env.HOST || "https://trialmusic.documents.azure.com:443/";
config.authKey = process.env.AUTH_KEY || "TWHPpd6XgwOjeTJcbocU5PuHZDEb2WJJLjOtRSp5T2LNq7GmSlAkh6IEH6sP5AzpxD9TPbykg74nTlatQWYQug==";
config.databaseId = "catalog201608-01";
config.collectionId = "Tasks";

module.exports = config;