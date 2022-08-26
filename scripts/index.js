let $numbers = $(".number");
let $numRow = $(".number-row");
const num_of_quadrants = 9;
const num_of_rows = 9;
let IDcounter = 0;
let quadrants = [];
let rows = [];
const VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbs = document.getElementsByClassName("number");
let matrix =
    [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]


function createRows() {
    for (i = 0; i < num_of_rows; i++) {
    
        let row = new Row();

        rows.push(row);
    }
}

/**
 * Assigns IDs to the number boxes.
 */
function assignNumberID() {
    let rowCount = 0;

    for (let i = 0; i < numbs.length; i++) // 81 numbers...
    {
        let number = numbs[i]; // each number...
        number.setAttribute("id", `num-${i}`); // giving an ID to each number
        rows[rowCount].numbers.push(`num-${i}`);

        if ((i + 1) % 9 == 0) // signifies a new row...
        {
            rowCount++
        }
    }
}

function writeNumbers() {
   
    let itemCount     = 0;
    let firstWrite    = true;
    let rowCount      = 0;
    let rowIndex = 0;
    let number        = 0;
    let numbersCalled = [];

    for (let i = 0; i < 27; i++) 
    {
        let randomNumber  = Math.floor((Math.random() * (VALUES.length)) + 1);
        let writeTo       = document.getElementById(`num-${i}`);
        
        if(numbersCalled.length > 1) // if array is larger than 1
        {
            while(numbersCalled.includes(randomNumber)) // if the array has already called the number
            {
                randomNumber = Math.floor((Math.random() * (VALUES.length)) + 1);

            }
        }

        numbersCalled.push(randomNumber);

        if(i != 0 && (i + 1) % 9 == 0) // end of a row
        {
            number = 0; // reset the 

            if(firstWrite)
            {
                for(let y = 0; y < numbersCalled.length; y++)
                {
                    matrix[rowCount].push(numbersCalled[y]);
                    rows[rowIndex].rowA.push(numbersCalled[y]);
                }

                firstWrite = false;
            }
            else // everything after the second row...
            {
                for(let y = 0; y < numbersCalled.length; y++)
                {
                    matrix[rowCount].push(numbersCalled[y]);
                    console.log(`num 1: ${numbersCalled[0]}`)

                    if(y == 0) // add the first number to the row...
                    {
                        rows[rowIndex - 1].rowB.push(numbersCalled[0]);
                        console.log(`row[${rowIndex}] : row B ${rows[rowIndex - 1].rowB}`)

                        
                    }

                    rows[rowIndex].rowA.push(numbersCalled[y]);

                }
            }

            console.log(`row[${rowIndex}] : row A ${rows[rowIndex].rowA}`)
            
            if(i > 9)
            {
                console.log(`row[${rowIndex}] : row B ${rows[rowIndex - 1].rowB}`)

            }


            rowIndex++;
            console.log(matrix[rowCount]);
            rowCount++;
            numbersCalled = [];    
        }

        // do this at the end of everything...

        writeTo.innerHTML = randomNumber;
        number++;
    }

    console.log(matrix)
}

function randomizedList(list) {
    let copy = list;

    for (let i = 0; i < list.length; i++) {
        let randomIndex = Math.floor((Math.random() * (copy.length - 1)) + 1);
        let temp = copy[i];
        copy[i] = copy[randomIndex];
        copy[randomIndex] = temp;
    }

    return copy;
}




function setup() {
    createRows()
    assignNumberID()
    writeNumbers();
}

$(document).ready(setup);