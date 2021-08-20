---
title: Install Docker on Linux Mint
slug: /docker-linux-mint
date: "2021-08-20T08:02"
spoiler: Steps to install Docker on Linux Mint
tags: ["developer", "docker", "setup", "linux mint"]
keywords: ["developer", "docker", "setup", "linux", "debian"]
---

### How do I install Docker on my Linux Mint (20.2)

So there I was with a fresh install of Linux Mint(20.2) and trying to setup Docker to enable to get about my work.
However, the official instructions on the Docker website were a bit confusing. So here are the steps that I did to make it work.
Fire up the terminal and go through the following commands.

```bash
sudo apt remove docker docker-engine docker.io containerd runc
sudo apt remove docker.io containerd runc
sudo apt install apt-transport-https ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io
sudo groupadd docker
sudo usermod -aG docker $USER
```

Now Log of and login again. Now test if everything is rosy ..

```bash
docker run hello-world
```

If you see this then you are good to get busy with docker.

```md
Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:

1.  The Docker client contacted the Docker daemon.
2.  The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
3.  The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
4.  The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
```
