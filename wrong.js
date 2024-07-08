//part 1.

//1 Getting the name of the recipe.
const recipeName = document.getElementById('recipe-name').innerText;
console.log('Recipe Name:', recipeName);

//2 Getting the HTML tag used to display the Recipe name.
const recipeNameTag = document.getElementById('recipe-name').tagName;
console.log('Recipe Name Tag:', recipeNameTag);

//3 Getting the font size of the paragraph tag with the class “description”.
const descriptionFontSize = window.getComputedStyle(document.querySelector('.description')).fontSize;
console.log('Description Font Size:', descriptionFontSize);

//4 Getting the value of the alt attribute on the image.
const imageAlt = document.querySelector('.image-container img').alt;
console.log('Image Alt:', imageAlt);

//5 Getting the dimensions and the URL of the image.
const imageElement = document.querySelector('.image-container img');
const imageInfo = {
  url: imageElement.src,
  height: imageElement.naturalHeight,
  width: imageElement.naturalWidth
};
console.log('Image Info:', imageInfo);

//6 Getting the number of ingredients for the paste.
const pasteIngredientsCount = document.querySelectorAll('.ingredients-list-paste li').length;
console.log('Number of Paste Ingredients:', pasteIngredientsCount); 

//7 Getting the fourth element in the list containing the ingredients for the paste.
const fourthPasteIngredient = document.querySelectorAll('.ingredients-list-paste li')[3].innerText;
console.log('Fourth Paste Ingredient:', fourthPasteIngredient);

//8 Creating an array of objects from the instructions.
const instructionElements = document.querySelectorAll('.instructions-list li');
const instructionsArray = Array.from(instructionElements).map((instruction, index) => ({
  order: index + 1,
  text: instruction.innerText
}));
console.log('Instructions Array:', instructionsArray);



//part 2


// 1. Change the logo text color to the correct one
document.querySelector('.logo-text').style.color = '#384241';

// 2. Correct the alignment of the elements inside the header element
const header = document.querySelector('header');
header.style.justifyContent = 'flex-start'; // Change to the correct flex alignment

// 3. Change the header bottom border color to the correct one
header.style.borderBottomColor = 'lightgray';

// 4. Change the recipe name to the correct one
document.getElementById('recipe-name').innerText = 'Frozen Cheesecake';

// 5. Add the missing class to the clock icon span element
document.querySelector('.time-container span').className = 'material-icons';

// 6. Change the estimated time of the recipe to the correct time estimation
document.querySelector('.time-container .time').innerText = '60+ min';

// 7. Change the src path to the correct image
document.querySelector('.image-container img').src = 'assets/frozen-cheesecake-slice.jpg';

// 8. Fix the background color of the ingredients list container
document.querySelector('.ingredients-container').style.backgroundColor = '#f9f9f9';

// 9. Remove the text and add the correct list items to the bottom ingredients list
const bottomIngredientsList = document.querySelector('.ingredients-list-bottom');
bottomIngredientsList.innerHTML = ''; 
bottomIngredientsList.innerHTML = `
  <li>15st digistivetex</li>
  <li>Lite smör</li>
`;

// 10. Change the third ingredient in the list of ingredients to the paste to the correct one
const pasteIngredientsList = document.querySelectorAll('.ingredients-list-paste li');
pasteIngredientsList[2].innerText = '3tsk vaniljsocker';

// 11. Add the missing ingredient to the paste ingredients list
const newIngredient = document.createElement('li');
newIngredient.innerText = '400g naturell philadelphiaost';
document.querySelector('.ingredients-list-paste').appendChild(newIngredient);

// 12. Remove the shadow styling from the instructions header
document.querySelector('.instructions').classList.remove('shadow');

// 13. Correct the two incorrect list items in the instructions list
const instructionsList = document.querySelectorAll('.instructions-list li');
instructionsList[1].innerText = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionsList[8].innerText = 'Ställ in i frysen över natten.';

console.log('Corrections have been applied.');