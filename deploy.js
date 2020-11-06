const ftp = require('basic-ftp');
require('dotenv').config();

async function example() {
  const client = new ftp.Client();
  client.ftp.verbose = true;
  try {
    await client.access({
      host: process.env.FTP_HOST,
      user: process.env.FTP_USER,
      password: process.env.FTP_PASSWD,
      secure: true,
      secureOptions: { rejectUnauthorized: false },
    });
    console.log(await client.list());
    await client.ensureDir('/domains/webarts.pl/public_html/test');
    await client.clearWorkingDir();
    await client.uploadFromDir(`${__dirname}/build`);
  } catch (err) {
    console.log(err);
  }
  client.close();
}

example();
