const env = process.env.NODE_ENV;

module.exports = (app, dir) => {
    let config
    
    if (env) {
        const path = `${dir}/config.${env}.json`;
        config = require(path);
    } else {
        config = require(`${dir}/config.json`);
    }

    return config;
}
