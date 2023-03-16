import type { } from 'cypress'

let testRecipeUrl:any = ''

describe('LoveRecipes custom recipe creation', () => {
  it('Navigates to "create recipe" and successfully creates a recipe', () => {
    cy.visit('/')

    cy.contains('Create recipe').click()

    cy.url().should('include', 'create-recipe')

    cy.get('input[name="title"]').type('Tuna Pasta')
    cy.get('input[name="title"]').should('have.value', 'Tuna Pasta')

    cy.get('input[name="description"]').type('What a combo')
    cy.get('input[name="description"]').should('have.value', 'What a combo')

    cy.get('input[name="prepTime"]').type('10mins')
    cy.get('input[name="prepTime"]').should('have.value', '10mins')

    cy.get('input[name="cookTime"]').type('12mins')
    cy.get('input[name="cookTime"]').should('have.value', '12mins')

    cy.get('input[name="totalTime"]').type('22mins')
    cy.get('input[name="totalTime"]').should('have.value', '22mins')

    cy.get('input[name="servings"]').type('2')
    cy.get('input[name="servings"]').should('have.value', '2')

    cy.get('input[name="ingredients-0"]').type('Tinned Tuna')
    cy.get('input[name="ingredients-0"]').should('have.value', 'Tinned Tuna')

    cy.get('input[name="instructions-0"]').type('First easy step')
    cy.get('input[name="instructions-0"]').should('have.value', 'First easy step')

    cy.get('textarea[name="instructions-0"]').type('Put tuna & pasta in microwave')
    cy.get('textarea[name="instructions-0"]').should('have.value', 'Put tuna & pasta in microwave')

    cy.get('.btn-wide').click()

    cy.url().should('include', 'recipes/tuna-pasta-')
    testRecipeUrl = cy.url()
  })
})


describe('Delete recipe functionality', () => {
  it('Navigates to "my recipes" page and deletes a selected recipe', () => {
    cy.visit('/')

    cy.contains('My Recipes').click()
    console.log(testRecipeUrl)
    // cy.visit(testRecipeUrl)

  //   cy.get("div[class='label']").contains("LABEL TEXT2").parent().within(() => {
  //  cy.get("input[type='text']").type("StackOverflowHelp")
// })
  })
})