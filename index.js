const os = require('os');
const path = require('path');

const modulePath = `./src/${os.arch()}/addon`;
const binding = require(path.resolve(__dirname, modulePath));

function initialize(appId) {
    return binding.initialize(appId);
}

function getMetaInfo() {
    return binding.getMetaInfo();
}

function login(onLoginSucess, onLoginError, onLogout, token) {
    return binding.login(onLoginSucess, onLoginError, onLogout, token);
}

function logout(account) {
    return binding.logout(account);
}

function makeCall(onCallError, onCallStateChange, onMuteStateChange, phone, payload) {
    return binding.makeCall(onCallError, onCallStateChange, onMuteStateChange, phone, payload);
}

function hangup(call) {
    return binding.hangup(call);
}

function sendDTMF(call, value) {
    return binding.sendDTMF(call, sendDTMF);
}

module.exports = {
    initialize,
    getMetaInfo,
    login,
    logout,
    makeCall,
    hangup,
    sendDTMF,
};