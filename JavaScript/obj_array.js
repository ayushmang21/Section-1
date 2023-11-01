const SmartphoneList = [
    {
        Brand : 'Asus',
        Model : 'ROG 4',
        Price : 69999,
        Colors : ['Black', 'White', 'Grey']
    },
    {
        Brand : 'Samsung',
        Model : 'S23',
        Price : 85999,
        Colors : ['Black', 'White', 'Grey']
    },
    {
        Brand : 'OnePlus',
        Model : 'Nord 2T',
        Price : 24999,
        Colors : ['Black', 'White', 'Grey']
    },
    {
        Brand : 'OnePlus',
        Model : '11',
        Price : 64999,
        Colors : ['Black', 'White', 'Grey']
    },
    {
        Brand : 'Asus',
        Model : 'Zenfone Max M2',
        Price : 11999,
        Colors : ['Black', 'White', 'Grey']
    }
]

console.log(SmartphoneList[2].Colors[1]);

SmartphoneList[2].Colors[1] = 'Lime Green'

console.log(SmartphoneList[2].Colors[1]);

console.log('----------------------------------------------------------------------------------------');

const models = SmartphoneList.map(( obj ) => { return obj.Model});
console.log(models);

console.log('----------------------------------------------------------------------------------------');

const BudgetPhone = SmartphoneList.filter((phone) => { return phone.Price < 30000});
console.log(BudgetPhone);

console.log('----------------------------------------------------------------------------------------');

const color = SmartphoneList.filter((phone) => { return phone.Colors.includes('White')});
console.log(color);

console.log('----------------------------------------------------------------------------------------');

