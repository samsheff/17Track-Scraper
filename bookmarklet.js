document.querySelectorAll("[data-name]").forEach(function (e, i) {
    console.log(e.children[0].getAttribute("title") + ", " + document.querySelectorAll("div.carrier div div.from div.base-info div i")[i].getAttribute("title"));
});