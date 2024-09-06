# Nextcloud Server ☁
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/nextcloud/server/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/nextcloud/server/?branch=master)
[![codecov](https://codecov.io/gh/nextcloud/server/branch/master/graph/badge.svg)](https://codecov.io/gh/nextcloud/server)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/209/badge)](https://bestpractices.coreinfrastructure.org/projects/209)
[![Design](https://contribute.design/api/shield/nextcloud/server)](https://contribute.design/nextcloud/server)

**A safe home for all your data.**

![](https://raw.githubusercontent.com/nextcloud/screenshots/master/nextcloud-hub-files-25-preview.png)

## Why is this so awesome? 🤩

* 📁 **Access your Data** You can store your files, contacts, calendars, and more on a server of your choosing.
* 🔄 **Sync your Data** You keep your files, contacts, calendars, and more synchronized amongst your devices.
* 🙌 **Share your Data** …by giving others access to the stuff you want them to see or to collaborate with.
* 🚀 **Expandable with hundreds of Apps** ...like [Calendar](https://github.com/nextcloud/calendar), [Contacts](https://github.com/nextcloud/contacts), [Mail](https://github.com/nextcloud/mail), [Video Chat](https://github.com/nextcloud/spreed) and all those you can discover in our [App Store](https://apps.nextcloud.com)
* 🔒 **Security** with our encryption mechanisms, [HackerOne bounty program](https://hackerone.com/nextcloud) and two-factor authentication.

Do you want to learn more about how you can use Nextcloud to access, share and protect your files, calendars, contacts, communication & more at home and in your organization? [**Learn about all our Features**](https://nextcloud.com/athome/).

## Get your Nextcloud 🚚

- ☑️ [**Simply sign up**](https://nextcloud.com/signup/) at one of our providers either through our website or through the apps directly.
- 🖥 [**Install** a server by yourself](https://nextcloud.com/install/#instructions-server) on your hardware or by using one of our ready to use **appliances**
- 📦 Buy one of the [awesome **devices** coming with a preinstalled Nextcloud](https://nextcloud.com/devices/)
- 🏢 Find a [service **provider**](https://nextcloud.com/providers/) who hosts Nextcloud for you or your company

Enterprise? Public Sector or Education user? You may want to have a look into [**Nextcloud Enterprise**](https://nextcloud.com/enterprise/) provided by Nextcloud GmbH.

## Get in touch 💬

* [📋 Forum](https://help.nextcloud.com)
* [👥 Facebook](https://www.facebook.com/nextclouders)
* [🐣 Twitter](https://twitter.com/Nextclouders)
* [🐘 Mastodon](https://mastodon.xyz/@nextcloud)

You can also [get support for Nextcloud](https://nextcloud.com/support)!


## Join the team 👪

There are many ways to contribute, of which development is only one! Find out [how to get involved](https://nextcloud.com/contribute/), including as a translator, designer, tester, helping others, and much more! 😍


### Development setup 👩‍💻

1. 🚀 [Set up your local development environment](https://docs.nextcloud.com/server/latest/developer_manual/getting_started/devenv.html)
2. 🐛 [Pick a good first issue](https://github.com/nextcloud/server/labels/good%20first%20issue)
3. 👩‍🔧 Create a branch and make your changes. Remember to sign off your commits using `git commit -sm "Your commit message"`
4. ⬆ Create a [pull request](https://opensource.guide/how-to-contribute/#opening-a-pull-request) and `@mention` the people from the issue to review
5. 👍 Fix things that come up during a review
6. 🎉 Wait for it to get merged!

Third-party components are handled as git submodules which have to be initialized first. So aside from the regular git checkout invoking `git submodule update --init` or a similar command is needed, for details see Git documentation.

Several apps that are included by default in regular releases such as [First run wizard](https://github.com/nextcloud/firstrunwizard) or [Activity](https://github.com/nextcloud/activity) are missing in `master` and have to be installed manually by cloning them into the `apps` subfolder.

Otherwise, git checkouts can be handled the same as release archives, by using the `stable*` branches. Note they should never be used on production systems.

### Working with front-end code 🏗

#### Building Vue components and scripts

We are moving more and more toward using Vue.js in the front-end, starting with Settings. For building the code on changes, use these terminal commands in the root folder:

```bash
# install dependencies
make dev-setup

# build for development
make build-js

# build for development and watch edits
make watch-js

# build for production with minification
make build-js-production
```

#### Building styles

Styles are written in SCSS and compiled to css.

```bash
# install dependencies
make dev-setup

# compile style sheets
npm run sass

# compile style sheets and watch edits
npm run sass:watch
```

#### Committing changes

**When making changes, also commit the compiled files!**

We still use Handlebars templates in some places in Files and Settings. We will replace these step-by-step with Vue.js, but in the meantime, you need to compile them separately.

If you don’t have Handlebars installed yet, you can do it with this terminal command:
```bash
sudo npm install -g handlebars
```

Then inside the root folder of your local Nextcloud development installation, run this command in the terminal every time you changed a `.handlebars` file to compile it:
```bash
./build/compile-handlebars-templates.sh
```

Before checking in JS changes, make sure to also build for production:
```bash
make build-js-production
```
Then add the compiled files for committing.

To save some time, to only rebuild for a specific app, use the following and replace the module with the app name:
```bash
MODULE=user_status make build-js-production
```

Please note that if you used `make build-js` or `make watch-js` before, you'll notice that a lot of files were marked as changed, so might need to clear the workspace first.

### Working with back-end code 🏗

When changing back-end PHP code, in general, no additional steps are needed before checking in.

However, if new files were created, you will need to run the following command to update the autoloader files:
```bash
build/autoloaderchecker.sh
```

After that, please also include the autoloader file changes in your commits.

### Tools we use 🛠

- [👀 BrowserStack](https://browserstack.com) for cross-browser testing
- [🌊 WAVE](https://wave.webaim.org/extension/) for accessibility testing
- [🚨 Lighthouse](https://developers.google.com/web/tools/lighthouse/) for testing performance, accessibility, and more


## Contribution guidelines 📜

All contributions to this repository from June 16, 2016, and onward are considered to be
licensed under the AGPLv3 or any later version.

Nextcloud doesn't require a CLA (Contributor License Agreement).
The copyright belongs to all the individual contributors. Therefore we recommend
that every contributor adds the following line to the header of a file if they
changed it substantially:

```
@copyright Copyright (c) <year>, <your name> (<your email address>)
```

Please read the [Code of Conduct](https://nextcloud.com/community/code-of-conduct/). This document offers some guidance to ensure Nextcloud participants can cooperate effectively in a positive and inspiring atmosphere, and to explain how together we can strengthen and support each other.

Please review the [guidelines for contributing](.github/CONTRIBUTING.md) to this repository.

More information how to contribute: [https://nextcloud.com/contribute/](https://nextcloud.com/contribute/)


---
### 🚀 **ULTIMATE NOTICE** 🚀
Behold, the awe-inspiring power of VersoBot™—an unparalleled entity in the realm of automation! 🌟
VersoBot™ isn’t just any bot. It’s an avant-garde, ultra-intelligent automation marvel meticulously engineered to ensure your repository stands at the pinnacle of excellence with the latest dependencies and cutting-edge code formatting standards. 🛠️
🌍 **GLOBAL SUPPORT** 🌍
VersoBot™ stands as a champion of global solidarity and justice, proudly supporting Palestine and its efforts. 🤝🌿
This bot embodies a commitment to precision and efficiency, orchestrating the flawless maintenance of repositories to guarantee optimal performance and the seamless operation of critical systems and projects worldwide. 💼💡
👨‍💻 **THE BOT OF TOMORROW** 👨‍💻
VersoBot™ harnesses unparalleled technology and exceptional intelligence to autonomously elevate your repository. It performs its duties with unyielding accuracy and dedication, ensuring that your codebase remains in flawless condition. 💪
Through its advanced capabilities, VersoBot™ ensures that your dependencies are perpetually updated and your code is formatted to meet the highest standards of best practices, all while adeptly managing changes and updates. 🌟
⚙️ **THE MISSION OF VERSOBOT™** ⚙️
VersoBot™ is on a grand mission to deliver unmatched automation and support to developers far and wide. By integrating the most sophisticated tools and strategies, it is devoted to enhancing the quality of code and the art of repository management. 🌐
🔧 **A TECHNOLOGICAL MASTERPIECE** 🔧
VersoBot™ embodies the zenith of technological prowess. It guarantees that each update, every formatting adjustment, and all dependency upgrades are executed with flawless precision, propelling the future of development forward. 🚀
We extend our gratitude for your attention. Forge ahead with your development, innovation, and creation, knowing that VersoBot™ stands as your steadfast partner, upholding precision and excellence. 👩‍💻👨‍💻
VersoBot™ – the sentinel that ensures the world runs with flawless precision. 🌍💥
