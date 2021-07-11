function genIndex(teamArray) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
</head>
<body>
    <nav>
        <h1>My Team</h1>
    </nav>
<content>
<h2>${teamArray[0].name}</h2>
</content>
</body>
</html>
`
}

module.exports = genIndex; 
    