console.log("background is running");

$.ajax({
    url: "http://localhost:8000/saveproducts",
    data: { data: "data" },
    context: document.body,
    type: "POST",
    success: function (response) {
        console.log("response: ", response);
    },
});
