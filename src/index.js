app.get("/", (request, response) => {
    return response.json({ message: "Hello world" });
})