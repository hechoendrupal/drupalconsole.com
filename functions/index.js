
const functions = require("firebase-functions");

const admin = require("firebase-admin");
admin.initializeApp();
const settings = {
  timestampsInSnapshots: true
};
admin.firestore().settings(settings);

const axios = require('axios');
const allowOrigin = "https://drupalconsole.com/";

const Octokit = require('@octokit/rest')
const octokit = new Octokit({
  auth: functions.config().github.auth,
})

const owner = 'hechoendrupal';
const repo = 'drupal-console';
const repoLauncher = 'drupal-console-launcher';

exports.getContributors = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", `${allowOrigin}/`);
  response.set("Access-Control-Allow-Credentials", "true");
  (async () => {
    const contributors = await octokit.paginate(`GET /repos/${owner}/${repo}/contributors`, (response) => {

      return response.data
    });

    response.send(contributors);
  })();
});

exports.getReleases = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", `${allowOrigin}/`);
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
  response.set("Access-Control-Allow-Origin", `${allowOrigin}/`);
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
  response.set("Access-Control-Allow-Origin", `${allowOrigin}/`);
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

exports.getLatestRelease = functions.https.onRequest((request, response) => {
  response.set("Access-Control-Allow-Origin", `${allowOrigin}/`);
  response.set("Access-Control-Allow-Credentials", "true");

  (async () => {
    const latestVersion = await getLatestVersion();

    response.send({
      version: latestVersion
    });
  })();
});

async function getLatestVersion() {
  const latestRelease = await octokit.repos.getLatestRelease({
    owner,
    repo
  });

  return latestRelease?latestRelease.data.tag_name:null;
}