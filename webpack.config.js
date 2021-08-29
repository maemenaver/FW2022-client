const createExpoWebpackConfigAsync = require("@expo/webpack-config");

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: {
                dangerouslyAddModulePathsToTranspile: ["@ui-kitten/components"],
            },
        },
        argv
    );
    config.resolve.alias["react-native-linear-gradient"] = 'react-native-web-linear-gradient'
    return config;
};
