---
sidebar_position: 2
---

# Setup your Tools

In this section we'll setup the basic tools needed for development.
This is one time setup and you don't need to do this again.

If you feel like automating any part of this using a script, we'd highly encourage you do to so.

_Lets start with a list of few of the technologies used in the project._

1. React for front end (Typescript)
2. Nest js based backend (Typescript)
3. Postgres DB
4. Cloudflare for DNS management
5. Pulumi for infrastructure as code
6. Sonarcube for code quality review
7. GraphgQl to communicate between front end and backend
8. Prisma ORM to interact with database
9. Azure cloud for infrastrcuture hosting
10. Github for version control
11. Github workflows for CI/CD
12. Docusaurus powered Internal Wiki
13. Node js
14. Docker

> Note: This is not a comprehensive list and only listed to give you an idea of what the tech stack looks like.

---

## Code Editor

We as a team use Visual Studio Code as editor and highly recommend if you are not sure what to use.
However, feel free to use any tools that suites you the best.

[Here's the official download link for VS Code](https://code.visualstudio.com/download)

You can also set up vs code using `Chocolatey` or `Homebrew`

- [Install vs-code using Homebrew](https://formulae.brew.sh/cask/visual-studio-code)
- [Install vs-code using Chocolatey](https://community.chocolatey.org/packages/vscode)

There are a few extensions in vs code to make our development process easier.

- ms-azuretools.vscode-docker
- mhutchie.git-graph
- GraphQL.vscode-graphql
- GraphQL.vscode-graphql-syntax
- george-alisson.html-preview-vscode
- ms-vsliveshare.vsliveshare-pack
- yzhang.markdown-all-in-one
- christian-kohler.npm-intellisense
- Prisma.prisma
- SonarSource.sonarlint-vscode
- mike-co.import-sorter
- ms-vscode-remote.remote-containers
- steoates.autoimport
- aaron-bond.better-comments
- alefragnani.Bookmarks
- bierner.markdown-mermaid
- esbenp.prettier-vscode

Please experiment with these as use as you see fit.

Also, while we are at it, change your default line ending format to LF to avoid any conflicts. [Link](https://dev.to/wagslane/how-to-get-consistent-line-breaks-in-vs-code-lf-vs-crlf-2c3p)

---

### NVM Setup

Our tech stack is based on Node js and typescript.

If you haven't setup Node js on your device yet, we recommed intalling Node using node version manager aka NVM.
Its available on multiple platforms: Linux, Mac, Windows.

In MAC, NVM can be installed using Homebrew using `brew install nvm`. [Link](https://formulae.brew.sh/formula/nvm)

In windows, NVM can be installed using chocolatey `choco install nvm`. [Link](https://community.chocolatey.org/packages/nvm)
You may have to run your terminal in elevated privilage mode or administrative mode to run the commands.

If you haven't installed `Homebrew` or `chocolatey`, here are instruction to get you started to get you started:

- Install Homebrew: (/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`)
- [Install Chocolatey](https://chocolatey.org/install)

If you don't like the idea of homebrew or chocolatey, here's a setup guide directly for nvm:

- [Windows NVM Setup without chocolatey](https://github.com/coreybutler/nvm-windows)
- [Linux/Mac NVM Setup without homebrew or package managers](https://github.com/nvm-sh/nvm)

After installing NVM, make sure its running using `nvm version` command.
You may have to refresh your env variables or reopen your terminal.

---

### Node Setup

1. Install node using `nvm install 18.12.1` or latest stable version. [NodeJs Website](https://nodejs.org/en/)
2. Then run `nvm use 18.12.1` to use the installed version.
   You can check which version of node you are using by running `nvm list` command.

In case you don't want to use NVM, you can also directly download through the node official site.
[NodeJs Website](https://nodejs.org/en/) <span style={{color:'red'}}> (Not Recommended)</span>.

---

> **⚠ REMINDER** Take breaks in between! Its good for your mind and your back!!

---

### Docker setup

Whether you are working on frontend or backend you'll likely run across the need to use docker.
Lets set this up while you are at it.

[Here's the link to office site to get docker](https://docs.docker.com/get-docker/)

But we can easily install this using [Chocolatey](https://community.chocolatey.org/packages/docker-desktop) or [Homebrew](https://formulae.brew.sh/formula/docker)
[NodeJs Website](https://nodejs.org/en/)
<span style={{color:"green"}}> Recommended Approach</span>.

Make sure that docker is running using `docker version` command.

---

Now we are ready to setup your Front and backend.
