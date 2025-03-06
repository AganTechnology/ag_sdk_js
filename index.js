const binding = require('./src/addon');

function initialize(appId) {
    return binding.initialize(appId);
}

function getMetaInfo() {
    return binding.getMetaInfo();
}

function login(onLoginSucess, onLoginError, onLogout, token) {
    return binding.login(onLoginSucess, onLoginError, onLogout, token);
}

function makeCall(onCallError, onCallStateChange, onMuteStateChange, phone, payload) {
    return binding.makeCall(onCallError, onCallStateChange, onMuteStateChange, phone, payload);
}

module.exports = {
    initialize,
    getMetaInfo,
    login,
    makeCall
};