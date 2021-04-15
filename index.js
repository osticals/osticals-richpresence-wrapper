// #### UPDATE: CONFIG #### //

const RPC = require('discord-rpc');
const config = require('./config.json');

const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: config.presence_settings.details,
        //state: config.presence_settings.state,
        startTimestamp: new Date(),
        largeImageKey: config.presence_settings.largeImageKey,
        largeImageText: config.presence_settings.largeImageText,
        joinSecret: config.presence_settings.joinSecret,
        spectateSecret: config.presence_settings.spectateSecret,
        buttons: [{label: "osticals.xyz", url: "https://osticals.xyz"}]
    });
    console.log("Active.");
});

rpc.login({
    clientId: config.rpc_login.clientId // your client ID, NOT your Discord user ID!
}).catch(console.error);
