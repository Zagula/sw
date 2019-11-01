if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("sw.js").then(function(registration) {
            console.log("Successful", registration);
            navigator.serviceWorker.addEventListener('message', (...data) => {
                console.log(data);
            })
        }).catch(function(err) {
            console.log("Failed: ", err);
        });
    });
};