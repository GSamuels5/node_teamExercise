module.exports = {
    process: function (data) {
        let processedData = `Prepared: ${data} - ${typeof data}`;
        return processedData;
    }
};