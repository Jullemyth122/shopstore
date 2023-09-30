// Import your shoe lists
import { menShoesList } from './men';
import { femaleShoesList } from './female';
import { newReleaseList } from './newrelease';
// Function to shuffle an array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Combine the two arrays
const combinedShoesList = [...menShoesList, ...femaleShoesList, ...newReleaseList];

// Randomize the combined array
shuffleArray(combinedShoesList);

// Export the combined and randomized array
export const combinedAndRandomizedShoesList = combinedShoesList;
