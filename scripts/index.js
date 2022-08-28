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
    [[]]


function createRows() {
    for (i = 0; i < num_of_rows; i++) {
    
        let row = new Row();

        rows.push(row);
    }
}

function createQuadrants(){
    for(i = 0; i < num_of_quadrants; i++)
    {
        let quadrant = new Quadrant();
        quadrants.push(quadrant);
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

function randomNumberGenerate(array)
{
    let randomIndex  =  Math.floor((Math.random() * (array.length)));
    // console.log(`random index = ${randomIndex}`)
    let randomNumber = array[randomIndex]; // get the number from the array.
    array.splice(randomIndex,1); // delete it from the array after.
    // console.log(`random number popper: ${randomNumber}`)

    return randomNumber;
}

function writeLastRowOfQuadrant()
{

}


function resetContainer(y, array)
{
    if((y + 1) % 3 == 0)
    {
        array = [];
    }
}

function checkMatrix()
{

    for(let i = 0; i < matrix.length; i++) // looping over the matrix...
    {
        console.log(`Matrix [${i}]: ${matrix[i]}`); // each matrix element
        let rowArray                 = matrix[i]; // each matrix element.
        let quadrantExamineContainer = []; // array to hold the quadrant components to examine.

        for(let y = 0; y < rowArray.length; y++) // looping over each block in the matrix...
        {
            let rowItemToExamine         = rowArray[y]; // current item im going to compare in the rows
            console.log(`row item to examine: ${rowItemToExamine}`)
            let rowExamineContainer      = []; // array to hold the components in the row.
            quadrantExamineContainer.push(rowItemToExamine);

            for(let z = 1; z < matrix.length; z++) // looping over each element in each block in the matrix...
            {
                let itemInRowsToFollow       = matrix[z][y];
                console.log(`-- item to follow: ${itemInRowsToFollow}`)
                rowExamineContainer.push(itemInRowsToFollow);

                if((z + 1) % 3 != 0 && ((y != 0))) // if 
                {
                    if(y % 3 != 0)
                    {
                        quadrantExamineContainer.push(itemInRowsToFollow);
                    }
                }
                console.log(`--- quadrant container: ${quadrantExamineContainer}`)
                
                resetContainer(y,quadrantExamineContainer)

                if(rowItemToExamine === itemInRowsToFollow) // we have the same numbers in a row if we get here...
                {
                    console.log(`same items ${rowItemToExamine} and ${itemInRowsToFollow}`)
                    console.log(`quadrant container:${quadrantExamineContainer}`)
                }
            }
        }
    }
}

function writeNumbers() 
{   
    let matrixIndex     = 0;
    let numberValues    = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 18; i++) 
    {
        let randomNumber  = randomNumberGenerate(numberValues);
        let writeTo       = document.getElementById(`num-${i}`);
        
        matrix[matrixIndex].push(randomNumber);


        if(i != 0 && (i + 1) % 9 == 0)
        {
            numberValues    = [1,2,3,4,5,6,7,8,9]; // reset the values for the next row...

            if(matrix.length >= 2) // end of the 2 rows
            {
                checkMatrix();
            }

            matrix.push([]);
            matrixIndex++;
        }   

        writeTo.innerHTML = randomNumber;// writes to the div...

    }
}

function randomizedList(list) 
{
    let copy = list;

    for (let i = 0; i < list.length; i++
         {
        let randomIndex   = Math.floor((Math.random() * (copy.length - 1)) + 1);
        let temp          = copy[i];
        copy[i]           = copy[randomIndex];
        copy[randomIndex] = temp;
    }

    return copy;
}



function setup()
{
    createRows()
    createQuadrants();
    assignNumberID()
    writeNumbers();
}

$(document).ready(setup);