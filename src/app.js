const { startServer } = require("./server/Server");
const { envs } = require("./config/envs");

const main = async () => {
    startServer(envs);
};

main();
(async () => {
    await main();
})();