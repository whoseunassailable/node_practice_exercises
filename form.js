const formHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Example</title>
</head>
<body>
    <h2>Enter Title</h2>
    <form action="/process_form" method="post">
        <label for="title">Title:</label>
        <input type="text" id="title" name="title">
        <input type="submit" value="Send">
    </form>
</body>
</html>
`;

module.exports = formHTML;
