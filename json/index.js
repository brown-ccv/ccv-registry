const yaml = require('yaml');
const fs = require('fs');

let ccv = fs.readFileSync('info-brown-ccv.json');
let cbc = fs.readFileSync('info-compbiocore.json');
let dscov = fs.readFileSync('info-dscov-tutorials.json');

let dataCCV = JSON.parse(ccv);
let dataCBC = JSON.parse(cbc);
let dataDSCOV = JSON.parse(dscov);

const loadAndSave = (object, group) => {
  object.map((file) => {
    file.group = group
    fs.write
    let folder
    if (file.type === 'workshop' || file.type === 'tutorial') {
      folder = 'workshops'
    }
    if (file.type === 'software') {
      folder = 'software'
    }
    let fileName = file.repo.split('/')[1] || file.repo
    fileName = fileName.replace(/-/g, '_')
    fs.writeFile(`${folder}/${fileName}.yml`, yaml.stringify(file), function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
    });

  })
}


loadAndSave(dataCCV, 'CCV')
loadAndSave(dataCBC, 'CBC')
loadAndSave(dataDSCOV, 'DSCOV')
