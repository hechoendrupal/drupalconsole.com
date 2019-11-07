
const functions = require("firebase-functions");
const axios = require('axios');
const admin = require("firebase-admin");
var isAfter = require('date-fns/isAfter')
var parseISO = require('date-fns/parseISO')

admin.initializeApp();
const settings = {
  timestampsInSnapshots: true,
};
admin.firestore().settings(settings);

const allowOrigin = functions.config().security.allow_origin;

const Octokit = require('@octokit/rest')
const octokit = new Octokit({
  auth: functions.config().github.auth,
})

const owner = functions.config().github.owner;
const repo = functions.config().github.repo;
const repoLauncher = functions.config().github.repo_launcher;

exports.contributors = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", allowOrigin);
  response.set("Access-Control-Allow-Credentials", "true");
  (async () => {
    const contributors = await octokit.paginate(`GET /repos/${owner}/${repo}/contributors`, (response) => {

      return response.data
    });

    response.send(contributors);
  })();
});

exports.releases = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", allowOrigin);
  response.set("Access-Control-Allow-Credentials", "true");
  (async () => {

    if (request.method !== 'POST') {
      return response.status(400).json({ message: 'Method not Allowed' });
    }

    const owner = request.body.owner;
    const repo = request.body.repo;
    
    const releases = await octokit.paginate(`GET /repos/${owner}/${repo}/releases`, (response) => {
      return response.data
    });

    response.send(releases);
  })();
});

exports.manifest = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", allowOrigin);
  response.set("Access-Control-Allow-Credentials", "true");

  (async () => {
    const latestVersion = await getLatestVersion();
    const urlPhar = `https://github.com/${owner}/${repoLauncher}/releases/download/${latestVersion}/drupal.phar`;
    const urlVersion = `https://github.com/${owner}/${repoLauncher}/releases/download/${latestVersion}/drupal.phar.version`;

    const manifest = await axios({
      method: 'get',
      url: urlVersion,
    });

    response.send([{
      name: 'drupal.phar',
      sha1: manifest.data.replace(/\n/g, ''),
      url: urlPhar,
      version: latestVersion
    }]);
  })();
});

exports.installer = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", allowOrigin);
  response.set("Access-Control-Allow-Credentials", "true");

  (async () => {
    const latestVersion = await getLatestVersion();
    const urlPhar = `https://github.com/${owner}/${repoLauncher}/releases/download/${latestVersion}/drupal.phar`;

    const file = await axios({
      method: 'get',
      url: urlPhar,
      responseType: 'stream',
    });

    response.set('Content-disposition', 'attachment; filename=drupal.phar');

    file.data.pipe(response);
  })();
});

exports.latestRelease = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", allowOrigin);
  response.set("Access-Control-Allow-Credentials", "true");

  (async () => {
    const latestVersion = await getLatestVersion();

    response.send({
      version: latestVersion
    });
  })();
});

exports.statistics = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", allowOrigin);
  response.set("Access-Control-Allow-Credentials", "true");
  if (request.method !== 'POST') {
    return response.status(400).json({ message: 'Method not Allowed' });
  }

  const userIp = request.headers['x-appengine-user-ip'];
  const now = (new Date().toISOString()).split('T')[0];
  const commands = request.body.commands;
  const languages = request.body.languages;
  
  (async () => {
    const log = await admin
      .firestore()
      .doc(`logs/${userIp}`)
      .get()
      .then(doc => {
        return Object.assign({ id: doc.id }, doc.data());
      });
      
    if((!log||!log.lastUpdate)||isAfter(parseISO(now), parseISO(log.lastUpdate))){
      await admin
      .firestore()
        .doc(`logs/${userIp}`)
        .set({ip: userIp, lastUpdate: now}, { merge: true });

      await _addStatistic(
        'statistics',
        {
          commands: commands,
          languages: languages,
          createdAt: now
        }
      );
    }

    response.sendStatus(200);
  })();

});

async function getLatestVersion() {
  const latestRelease = await octokit.repos.getLatestRelease({
    owner,
    repo
  });

  return latestRelease?latestRelease.data.tag_name:null;
}

async function _addStatistic(collection, input) {
  return await admin
    .firestore()
    .collection(collection)
    .add(input)
    .then(docRef => {
      // console.log(`Document written with ID: ${docRef.id}`);
      return docRef.get();
    }).then(doc => {
      return Object.assign({ id: doc.id }, doc.data());
    })
    .catch(error => {
      console.error("Error adding document: ", error);
    });
}
