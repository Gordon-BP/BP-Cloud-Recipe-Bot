workflow.chatHistory = []
event.state.session.history.map((message) => {
  if (message.preview != 'What would you like to know about these recipes?') {
    workflow.chatHistory.push(`${message.sender}:${message.preview}`)
  }
})

const myStr = `Using the provided recipe information and chat history as context, try to answer the question as honestly as possible. If you don't know the answer, say "I don't know." 

Your answer should be friendly and complete, using the same words from the question as much as possible.
Recipe info: ${JSON.stringify(workflow.recipeInfo)}
Chat history: ${JSON.stringify(workflow.chatHistory)}
User question: ${event.preview}}`
console.log(`The prompt is ${myStr.length} characters long`)
if (myStr.length > 5000) {
  console.log('The prompt is too long! Omitting the chat history...')
  workflow.chatHistory = []
}
