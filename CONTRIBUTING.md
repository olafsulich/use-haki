# Contributing

First of all, thanks for taking the time to contribute 🙌

The following is a set of guidelines for contributing to this library, these are mostly guidelines, not rules.

Use your best judgment, and feel free to propose changes to this document in a pull request.

**Working on your first Pull Request?** You can learn how from this [ How to Contribute to an Open Source Project on GitHub](https://github.com/firstcontributions/first-contributions) guide.

## Project setup

1. Fork and clone the repo
1. Run `npm install` to install dependencies
1. Create a branch for your PR with `git checkout -b pr/your-branch-name`

> Tip: Keep your `master` branch pointing at the original repository and make
> pull requests from branches on your fork. To do this, run:
>
> ```sh
> git remote add upstream https://github.com/olafsulich/use-haki.git
> git fetch upstream
> git branch --set-upstream-to=upstream/master master
> ```
>
> This will add the original repository as a "remote" called "upstream," Then
> fetch the git information from that remote, then set your local `master`
> branch to use the upstream master branch whenever you run `git pull`. Then you
> can make all of your pull request branches based on this `master` branch.
> Whenever you want to update your version of `master`, do a regular `git pull`.

## How Can I Contribute?

### 🐟 New Hook

Have an awesome idea for next hook? Share it to the world!

1. Create `src/useYourHookName.ts` and run `npm start` to start the storybook development server and start coding your hook
2. Create `src/__tests__/useYourHookName.test.ts`, run `npm test:watch` to start the test runner in watch mode and start writing tests for your hook
3. Create `docs/useYourHookName.md` and create documentation for your hook, [HOOK_TEMPLATE here 👈](../HOOK_TEMPLATE.md)
4. Export your hook from `src/index.ts` and add your hook to `README.md`

You can also write your tests first if you prefer [test-driven development](https://en.wikipedia.org/wiki/Test-driven_development).

### 🍤 Improve existing hook

Do you have an idea how to improve one of existing hooks?

1. Run `npm start` and start applying changes
2. Update tests according to your changes using `npm test:watch`
3. Update documentation according to your changes

### 🐛 Bugs

If you find a bug, please file an issue for bugs, it can be missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/olafsulich/use-haki/issues?q=is%3Aissue+is%3Aopen+label%3Abug+sort%3Acreated-desc)

### 💡 Feature Requests

Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps
me prioritize what to work on.

[**See Feature Requests**](https://github.com/olafsulich/use-haki/issues?q=is%3Aissue+sort%3Areactions-%2B1-desc+label%3Aenhancement+is%3Aopen)

### ❓ Questions

For questions related to using the library, you can
[raise issue here](https://github.com/olafsulich/use-haki/issues/new), or
send me an email: **olafsulich@gmail.com**

## StyleGuide & Additional Notes

## ✍️ Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- When only changing documentation, include `[ci skip]` in the commit title
- Consider starting the commit message with an applicable emoji:

  - :art: `:art:` when improving the **format/structure** of the code
  - :zap: `:zap:` when improving **performance**
  - :fire: `:fire:` when **removing** code or files.
  - :bug: `:bug:` when fixing a **bug**.
  - :ambulance: `:ambulance:` when doing critical **hotfix**.
  - :sparkles: `:sparkles:` when introducing **new features**.
  - :memo: `:memo:` when writing **docs**.
  - :rocket: `:rocket:` when **deploying** stuff.
  - :label: `:label:` when adding or updating types (TypeScript)
  - :lipstick: `:lipstick:` when adding or updating the **UI** and style files.
  - :tada: `:tada:` when beginning a project/**first commit**.
  - :non-potable_water: `:non-potable_water:` when plugging **memory leaks**.
  - :penguin: `:penguin:` when fixing something on **Linux**.
  - :apple: `:apple:` when fixing something on **macOS**.
  - :checkered_flag: `:checkered_flag:` when fixing something on **Windows**.
  - :green_heart: `:green_heart:` when fixing the **CI** build.
  - :white_check_mark: `:white_check_mark:` when adding **tests**.
  - :lock: `:lock:` when dealing with **security**.
  - :arrow_up: `:arrow_up:` when **upgrading** dependencies.
  - :arrow_down: `:arrow_down:` when **downgrading** dependencies.
  - :shirt: `:shirt:` when removing **linter** warnings.
  - :recycle: `:recycle:` when refactoring code.
  - :package: `:package:` when adding or updating compiled files or packages.
  - :alien: `:alien:` when updating code due to external API changes.
  - :egg: `:egg:` when adding or updating an easter egg.

  For more emojis check [gitmoji](https://gitmoji.carloscuesta.me/)!

### :dog: Git hooks

There are git hooks set up with this project that are automatically enabled when you install dependencies. These hooks automatically test and validate your code when creating commits. They're really handy but can be temporarily disabled by adding a --no-verify flag to your commit command. This is useful when you want to commit and push to get feedback on uncompleted code.

### :warning: Help needed

Please have a look at the open issues and respond to questions, bug reports and feature requests. Thanks!

For other questions contact me on - **olafsulich@gmail.com** 📫
