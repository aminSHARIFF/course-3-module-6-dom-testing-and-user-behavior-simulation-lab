// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.

function simulateClick(containerId, text) {
  addElementToDOM(containerId, text)
}

function handleFormSubmit(formId, containerId) {
  const input = document.getElementById('user-input')
  const isValid = handleError(input.value)

  if (!isValid) {
    return
  }

  addElementToDOM(containerId, input.value)
  input.value = ''
}


// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(containerId, text) {
  const container = document.getElementById(containerId)
  if (!container) return

  const newElement = createElement('div', {}, text)
  container.appendChild(newElement)
}

function removeElementFromDOM(elementId) {
  const element = document.getElementById(elementId)
  if (element) {
    element.remove()
  }
}

function updateElementText(elementId, text) {
  const element = document.getElementById(elementId)
  if (element) {
    element.textContent = text
  }
}


// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

function handleError(value) {
  const errorMessage = document.getElementById('error-message')

  if (!value || !value.trim()) {
    errorMessage.textContent = 'Input cannot be empty'
    errorMessage.classList.remove('hidden')
    return false
  }

  errorMessage.classList.add('hidden')
  return true
}


// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

function createElement(tag, attributes = {}, text = '') {
  const element = document.createElement(tag)
  Object.keys(attributes).forEach((key) => {
    element.setAttribute(key, attributes[key])
  })
  element.textContent = text
  return element
}

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
}
