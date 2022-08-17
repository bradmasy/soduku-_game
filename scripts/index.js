let $numbers           = $(".number");
let $numRow            = $(".number-row");
const num_of_quadrants = 9;
const num_of_rows      = 18;
let IDcounter          = 0;
let quadrant_count     = 0
let quadrants          = [];
let rows               = [];
let values             = [1,2,3,4,5,6,7,8,9];

/**
 * Assigns IDs to the number boxes.
 */
function assignNumberID()
{   

    $numbers.each(function(e)
    {

        let ID      = `num-${e}`
        let tracker = e + 1;
        $(this).attr("id",`num-${e}`);
        quadrants[quadrant_count].addresses.push(ID);

        if(tracker != 0 && tracker % 9 == 0) // for every 9 numbers creates a quadrant
        {
            let randomValues = randomizedList(values); // creating a shuffled list of the possible values per quadrant

            for(let i = 0; i < randomValues.length; i++)
            {
                quadrants[quadrant_count].numbers[i] = randomValues[i];
            }

            for(let y = 0; y < quadrants[quadrant_count].addresses.length; y++)
            {
                let $numberAddress = $(`#${quadrants[quadrant_count].addresses[y]}`); // gets the address to the div to write to
                let numberToWrite  = quadrants[quadrant_count].numbers[y]; // the value to write to the div

                $numberAddress.html(numberToWrite); // writing to the screen the values
            }
            quadrant_count++;
        }
    })

    $numRow.each(function(e)
    {
        $(this).attr("id",`row-${e}`);
    })
}

function randomizedList(list)
{
    let copy = list;
    
    for(let i = 0; i < list.length; i++)
    {
        let randomIndex   = Math.floor((Math.random() * (copy.length - 1)) + 1);
        let temp          = copy[i];
        copy[i]           = copy[randomIndex];
        copy[randomIndex] = temp;
    }

    return copy;
}

function createQuadrants()
{
    for(i = 0; i < num_of_quadrants; i++)
    {
        let quadrant = new Quadrant(i);
        quadrants.push(quadrant);
    }
}


function createRows()
{
    for(i = 0; i < num_of_rows; i++)
    {
        let direction;

        if(i % 2 == 0)
        {
            direction = "horizontal";
        }
        else
        {
            direction = "vertical";
        }
        
        rows.push(row);
    }

    console.log(rows);
}

function createValues(row)
{
    for(i = 0; i < num_of_rows; i++)
    {
        if(row.direction == "horizontal")
        {
    
        }
        else // if its vertical...
        {
    
        }
    }
   

}

function setup()
{
    createQuadrants();
    assignNumberID()
    // createRows();
    randomizedList(values)   
}

$(document).ready(setup);