/* Master Ultraviolet Proxy Configuration for Apex Portal */
self.__uv$config = {
    prefix: '/service/',
    bare: 'https://benroberts.net', // Public bare server that handles the backend requests
    encodeUrl: function(url) {
        if (!url) return url;
        return encodeURIComponent(url).replace(/['()]/g, escape).replace(/\*/g, '%2A');
    },
    decodeUrl: function(url) {
        if (!url) return url;
        return decodeURIComponent(url);
    },
    handler: '/uv.handler.js',
    bundle: '/uv.bundle.js',
    config: '/uv.config.js',
    sw: '/uv.sw.js',
};
