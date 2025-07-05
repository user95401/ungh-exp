const url = "https://github.com/user95401/ungh-exp";

export default eventHandler(
  () => `<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
<head>
  <title>📃 UNGH-EXT API</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>
<body>
  <div class="card p-3 m-5">
    <h2>📃 UNGH-EXT API</h2>
    Unlimited access to github API with expanded amount of transferred data!
    <br>
    Learn more: <a href="${url}">${url}</a>
`,
);
