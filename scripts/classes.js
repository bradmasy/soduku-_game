class Row
{
    constructor()
    {
        this.numbers   = []; // holds the addresses
        this.values    = [];
        this.rowA      = [];
        this.rowB      = [];
        this.quadrant  = [];
    }

    getNumbers()
    {
        return this.numbers;
    }
}

class Number
{
    constructor(number, quadrant_num, row_num)
    {
        this.value    = number;
        this.Quadrant = quadrant_num;
        this.row      = row_num;
    }
}

class Quadrant
{
    constructor()
    {
        this.numbers        = [];
        this.addresses      = [];
        this.rows           = [ [], [], []];

    }

    getAddresses(){
        return this.addresses;
    }
}