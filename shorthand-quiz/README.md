# Shorthand Quiz

As part of the digital storytelling initiative, we would like to explore the addition of a quiz element to stories on Shorthand. This repo is intended to serve as a place to experiment with various implementations in a simplified environment. A good implementation will be simple, with short snippets of HTML that can be pasted into [custom HTML blocks in Shorthand](https://support.shorthand.com/en/articles/52-custom-html-embedding) and some lightweight JavaScript and CSS.

The New York Times is a major source of inspiration for this challenge and may serve as a good point of reference with the following quizzes:

- [Weekly Health Quiz: Mental Health, College and Chocolate](https://www.nytimes.com/interactive/2022/07/14/well/live/14HealthQuiz-07142022.html)
- [Meryl Streep’s One Weird Trick](https://www.nytimes.com/interactive/2022/07/14/arts/meryl-streep-acting.html)

## Instructions

1. Within this directory (ie. `shorthand-quiz`), create a sub-directory for your quiz example files. Name this directory after the defining feature of your implementation.
1. In this directory create three files:
   1. An `index.html` using the [below template](#html-template)
   1. A blank `quiz.js` file
   1. A blank `style.css` file
1. Populate these files with the HTML, JavaScript, and CSS, respectively, for your quiz example.
1. You should be able to open the `index.html` file in your browser and test out your quiz implementation.

**Optional:** If you have any notes or thoughts about your implementation, add it to an `about.md` file in your quiz's sub-directory.

For the sake of simplicity, we have been using the following sample multiple-choice questions. However, feel free to use whatever questions you prefer.

| Question                                             | Options          | Correct |
| ---------------------------------------------------- | ---------------- | ------- |
| What is the capital of the United States?            | New York         | ❌      |
|                                                      | Washington, DC   | ✅      |
|                                                      | San Francisco    | ❌      |
|                                                      | Chicago          | ❌      |
| Which country was NOT previously occupied by France? | Ethiopia         | ✅      |
|                                                      | Lebanon          | ❌      |
|                                                      | Morocco          | ❌      |
|                                                      | Thailand         | ❌      |
| Which South American country speaks Dutch?           | Brazil           | ❌      |
|                                                      | Colombia         | ❌      |
|                                                      | Argentina        | ❌      |
|                                                      | Suriname         | ✅      |
| Which animal is endemic to Australia?                | Kangaroo         | ❌      |
|                                                      | Wallaby          | ❌      |
|                                                      | Emu              | ❌      |
|                                                      | All of the above | ✅      |

## Hints

You can use the existing example implementation in the `radio-with-submit` directory as a reference for structuring your quiz.

Comment your code liberally to help collaborators understand what you are doing. Since these snippets will likely be copy-pasted into Shorthand, comments can help delineate the boundaries of custom HTML blocks. They can also come in handy when troubleshooting some broken functionality.

Avoid any dependencies or extra build steps. This implementation should be as simple as possible, ideally with vanilla JavaScript and CSS.

Namespace your variables and class names. Shorthand adds custom JS as a script tag so any variables will be in the global scope. We want to make sure that we use unique names (even if they are more verbose) to avoid any collisions with other JavaScript on the page. Similarly, class names should be unique and CSS should be very specific to avoid unintended consequences. Prefixing with `gpalab` is an easy way to ensure unique names (and to quickly identify our custom code).

Think about browser compatibility. We want this quiz to work everywhere, so we may need to avoid the latest ECMA features. The best way to accomplish this may be to add a transpilation tool at the end to create a compatible bundle. However, this maybe overkill and should not be a primary concern at the moment.

## HTML Template

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>REPLACE WITH SIMPLE TITLE DESCRIBING YOUR QUIZ</title>

    <link rel="stylesheet" type="text/css" href="./style.css" />
  </head>
  <body>
    <!-- ADD YOUR HTML HERE -->

    <script src="./quiz.js" type="text/javascript"></script>
  </body>
</html>
```
