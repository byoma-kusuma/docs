---
sidebar_position: 3
---

# Team Best Practices

As a team we follow certain conventions and best practices for all the good reasons.
All the conventions are open to changes should you find better way of doing things that team agrees with.

If you are new to Git, you should ivnest just a bit of time to learn the concept and basics of it.
This tutorial may be helpful to you. [Link](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)

---

## Branching Pattern:

When you are starting to work on a new feature, pull the latest from dev.
All of our feature, bugs, hotfixes start from the dev branch.

There are lots of way of doing this. Vs code give you an intuitive gui experience as well.
You can also use `git checkout dev` to checkout development branch in your terminal.
Then run `git pull` to get all the latest changes.

Now create a branch

- If you are working on a feature use **_feature/githubIssueId-yourfeature_** naming pattern
  - example: **_feature/133-add-user-authentication_**
- If you are working on a bug use **_bugfix/githubIssueId-bug-task_** naming pattern
  - example: **_bugfix/133-save-user-error_**
- If you are working on a hotfix use **_hotfix/githubIssueId-hotfix-task_** naming pattern
  - example: **_hotfix/133-create-user-error_**
- If you are working on code refactoring use **_refactoring/githubIssueId-refactor-task_** naming pattern
  - example: **_hotfix/133-clean-up-envrionemnt-variables_**

You can now start working on the branch.

We recommend to commit early and often.

After you are done with your feature/bugs/hotfixes create a pull request again dev branch.
This will start a code review and you can merge your change after someone approves the review.
There is automatic code review setup using SonaQqube to ensure code quality.

Here are the links to SonarQube dashboards:

- [SonarQube BackEnd](https://sonarcloud.io/project/overview?id=byoma-kusuma_bk-portal-api)
- [SonarQube FrontEnd](https://sonarcloud.io/project/overview?id=byoma-kusuma_core.x.ui)

> **⚠ Reminder**: If you are the one merging the pull request, make sure that you are using **_squash and merge_** strategy.

There is CI/CD worflow setup using Github. Once your pull request is merged, your changes will be automatically deploy to dev sites.

Don't worry if you forget the best practices or any the details.
After merging your first few pull requests, this will be second nature to you.

We'll dive into our first issue in the next chaper and get some hands on coding experience.

---

## CR Tips

1. Commit early and often. Work in iterations and send smaller code reviews.

   Its easy for the reviwer to get the context and review the code for small reviews.

   This also helps you to get feedback very early. You can request for code review even before send a pull request against dev branch.

2. Add tests
   Tests are a great way to understand what your code does. There's no guarantee that your code works unless you have written solid test for it.
   You are not done with the task unless you have added tests and documents.
3. Add design diagrams where feasible
   This helps a lot to understand what are you trying to do quickly. This is where the cliche 'A picture is worth thousand words' comes in.
4. Add description to your pull request
   Its easy to forget that the person reviewing your code may not have the context and doesn't know what you are working on.
   - State what the problem is.
   - Why do you need to make this change?
   - Add the link to the issue you are solving.
   - What are the alternate approach you explored?
   - How did you test your code?
   - What are the potential impacts of the changes? If your code doesn't work in prod what can happen?

## Unit Test 🚧 Work in Progress 🚧

---

## Integration Test 🚧 Work in Progress 🚧

---

## End to End test 🚧 Work in Progress 🚧

---

## Code Linters 🚧 Work in Progress 🚧

---

## Devops Cycle 🚧 Work in Progress 🚧

---
