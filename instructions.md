# Instructions

This week, we will be practicing React state and controlled forms by making a Typeform-like product. Your completed project should consist of at least 3 questions that need to be answered by users. When the user presses submit, they should see a summary of their answers.

## Context:

You can choose what you'd like your survey to be about. Perhaps you'd like to ask other developers what they think about different technologies, or perhaps you'd like to ask people about their favourite foods or hobbies. It's completely up to you.

Once a user has “submitted” the survey you created, they should see a summary. It doesn't actually need to be submitted anywhere - the focus here is to practice using React state and controlling forms.

You don't have to use a lot of components to start with when doing this project. See that as more of a stretch goal…

## Design

How you design your page is up to you, but take accessibility into account when you are styling your form elements - so inputs should have labels and should be easily readable and usable. We STRONGLY recommend having some kind of design or sketch before starting to code.

Feel free to use Typeform Survey Templates to get inspired.

## Requirements:
- Your survey needs to be a multi-step form
- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed, your app should hide the input form and show a summary of the user's submissions.
- Your page should be responsive


## Stretch goals
So you’ve completed the requirements? Great job! Ensure you've committed and pushed a version of your project before starting on the stretch goals. Remember that the stretch goals are optional.

### Intermediate Stretch Goals
- Use a form element you haven't tried before (such as a [range slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)) and connect it to React state. You can find a list of input types [here](https://www.w3schools.com/html/html_form_input_types.asp).
- Add validation to your survey! Use either HTML input validation attributes (such as `required`) or implement custom logic when the user clicks the submit button to make the form fields have validations. If you choose to implement your own validation, you should also make sure to show error messages in a nice way.
- Create a button that, when clicked, will scroll down to the top of the next question in the survey (if possible)

### Advanced Stretch Goals
- Visualize to the user how far through the survey they are and how much is left by creating a progress bar
- Use Regex validation for some input on your survey
- Show different questions depending on the answer to a specific question
- Create a multi-step form. Example 👇
  Show each question on its own 'page' with a continue button to progress to the next question (like how typeform does it). If you decide to split your form into sections, then one approach you could take is to try to think of these sections as a single `useState` hook which you can use to conditionally render different groups of inputs. For example, you could have some state like `const [section, setSection] = useState('firstQuestion')` and then when the user presses a button to progress, you'd use the `setSection()` function to progress them to the second question, etc. Then, in your JSX, you could conditionally render, like this:
  ```
  const Example = () => {
    const [section, setSection] = useState('firstQuestion')
  
    return (
      <div>
        {section === 'firstQuestion' && (
          <div>
            First question...
          </div>
        )}
  
        {section === 'secondQuestion' && (
          <div>
            Second question...
          </div>
        )}
      </div>
    )
  }
  ```
  As always, there are many ways to approach this! This is just one suggestion.
