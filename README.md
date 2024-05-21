# Genetec Front-End Technical Challenge

This technical challenge aims to assess your ability to read code, find bugs, write clean and efficient React components, and match coding practices.

## The Process

- Clone this repo and push it to your own Github account (do not fork it).
- Complete the tasks below and commit the changes to your own repo.
- Once completed, send us a link to your repo.
- The next step will then be a technical follow-up interview where we will discuss your submission and work through some live coding challenges that aim to extend the functionality of the application.

## The Application

This application provides a simple interface for searching the art collection at the Art Institute of Chicago.

The application is developed using Vite, and can be run using the following commands:

- `npm install`
- `npm run dev`

Please note that jotai is used for state management, and styled components are used for defining CSS.

## Tasks

1. Complete the useGetItems hook (see src/data/useGetItems.tsx for details)
2. Fix the TypeScript error (see src/barChart/FieldSelector.tsx)
3. Our QA team have identified three bugs, find and fix them. This is the feedback from QA:
   1. Enter a new search query - new results aren't loaded
   2. The bar chart counts are incorrect
   3. Enter a search term to load some results. Change the search term. The images and text do not change at the same time.
4. Develop a modal that shows similar items (see src/similaritySearch/SimilaritySearch.tsx for details)
5. Populate the styled components for the Card component so they render correctly and are well presented (see src/cards/Card.tsx)
6. (Optional) Restyle the app to give it a new look
7. (Optional) Make a note of any changes you would make to the code. They may come up in the follow-up interview
