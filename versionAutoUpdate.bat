const fs = require("fs");

fs.readFile("./package.json", (err, data) => {
  if (err) throw err;

  let packageJsonObj = JSON.parse(data);

  const versionNumber = packageJsonObj.version.split(".");

  packageJsonObj.version = `${versionNumber[0]}.${versionNumber[1]}.${
    Number(versionNumber[2]) + 1
  }`;

  packageJsonObj = JSON.stringify(packageJsonObj, null, 2);

  fs.writeFile("./package.json", packageJsonObj, (err) => {
    if (err) throw err;

    console.log("The file has been saved!");
  });
});