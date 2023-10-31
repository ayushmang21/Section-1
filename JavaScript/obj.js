const user = {
        name : 'ramu',
        email : 'ramu@mail.com',
        rollno : 24
}
// console.log(user.name)
// console.log(user.rollno)
// console.log(user.email)

user.address = 'Lucknow'
user.rollno = 84387

console.log(user)

//---------------------------------------//

const smartphone = {
    Brand : 'Asus',
    Model : 'ROG 4',
    Price : 65999,
    Colors : ['Night Black', 'Day White', 'Midnight Grey']
}

console.log(smartphone.Model);
console.log(smartphone.Colors[1]);
console.log(smartphone);

//------------------------------------//

const SmartphoneList = [
    {
        Brand : 'Asus',
        Model : 'ROG 4',
        Price : 65999,
        Colors : ['Night Black', 'Day White', 'Midnight Grey']
    },
    {
        Brand : 'Asus',
        Model : 'ROG 3',
        Price : 61999,
        Colors : ['Night Black', 'Day White', 'Midnight Grey']
    }
]

console.log(SmartphoneList[0]);

SmartphoneList[0].Model = 'Z21';

console.log(SmartphoneList);

console.log(SmartphoneList[0].Colors[2]);
