---
title: PM2
description: Learn how to use PM2 to manage your instance.
---

PM2 is a process manager for Node.js applications that allows you to manage and monitor your applications easily. It also provides a way to keep your Node.js applications running in the background even after you log out from your server.

To use PM2 to run the Framework application, follow these steps:

1. Install PM2 globally on your server using the following command:

   ```bash
   npm install -g pm2
   ```

2. Navigate to the root directory of your Framework application.

3. Start the application using the following command:

   ```bash
   pm2 start yarn --name "framework" -- run start
   ```

   This command starts the application using Yarn, with the name "framework". The `--name` flag is optional and allows you to give a custom name to the process.

4. Verify that the application is running using the following command:

   ```bash
   pm2 list
   ```

   This command lists all the processes managed by PM2.

5. You can stop the application using the following command:

   ```bash
   pm2 stop framework
   ```

   This command stops the process with the name "framework". You can replace "framework" with the name of your custom process if you used a different name.

6. To restart the application, use the following command:

   ```bash
   pm2 restart framework
   ```

   This command restarts the process with the name "framework".

7. To monitor the application, use the following command:

   ```bash
   pm2 monit
   ```

   This command provides a real-time monitoring dashboard for all the processes managed by PM2.

8. To view the logs of the application, use the following command:

   ```bash
   pm2 logs framework
   ```

   This command shows the logs of the process with the name "framework". You can replace "framework" with the name of your custom process if you used a different name.

That's it! You can now use PM2 to manage and monitor your Framework application.
