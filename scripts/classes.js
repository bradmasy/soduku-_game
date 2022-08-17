class Row
{
    constructor(value, direction,numbers)
    {
        this.numbers   = numbers;
        this.value     = value;
        this.direction = direction;
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
    constructor(value)
    {
        this.quadrant_value = value;
        this.numbers        = [];
        this.addresses      = [];

    }

    getAddresses(){
        return this.addresses;
    }
}