let $numbers = $(".number");
let $numRow = $(".number-row");
const num_of_quadrants = 9;
const num_of_rows      = 9;

let IDcounter = 0;
let quadrant_count = 0
let quadrants = [];
let rows = [];

/**
 * Assigns IDs to the number boxes.
 */
function assignNumberID()
{
    $numbers.each(function(e)
    {
        let ID = `num-${e}`
        $(this).attr("id",`num-${e}`);
        $(this).html(`${e}`);
        quadrants[quadrant_count]

        
        if(e % 9 == 0)
        {
            quadrant_count++;
        }
    })

    $numRow.each(function(e)
    {
        $(this).attr("id",`row-${e}`);
    })
}

function createQuadrants()
{
    for(i = 0; i < num_of_quadrants; i++)
    {
        quadrant = new Quadrant();
        quadrants.push(quadrant);
    }

}

function setup()
{
    createQuadrants();
    assignNumberID()
    console.log(quadrants)
    
}

$(document).ready(setup);