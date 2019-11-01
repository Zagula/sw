if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker.register("sw.js").then(function(registration) {
            console.log("Successful", registration);
        }).catch(function(err) {
            console.log("Failed: ", err);
        });
    });
};