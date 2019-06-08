const Employee = require('../models/Employee.js')
const Invoice = require('../models/Invoice.js')
const Info = require('../models/Info.js')
const mongoose = require('./connections')


const invoice1 = new Invoice({
    date: 06/01/2019,
    payperiodstart: 05/15/2019, 
    payperiodend: 05/30/2019, 
    name: 'Nola Darling',
    idnumber: 'CSP123456',
    client: 'Comcast',
    frequency: 725,
    rate: .023,
    subtotal: 166.95,
    arisefee: 19.75,
    callumfee: .10,
    totaldue: 229.20
})
const invoice2 = new Invoice({
    date: 06/01/2019,
    payperiodstart: 05/15/2019, 
    payperiodend: 05/30/2019,  
    name: 'Sha Bizness',
    idnumber: 'CSP489623',
    client: 'Comcast',
    frequency: 725,
    rate: .023,
    subtotal: 166.95,
    arisefee: 19.75,
    callumfee: .10,
    totaldue: 229.20
})

const invoice3 = new Invoice({
    date: 06/01/2019,
    payperiodstart: 05/15/2019, 
    payperiodend: 05/30/2019, 
    name: 'Taminck Fortune',
    idnumber: 'CSP356748',
    client: 'Comcast',
    frequency: 725,
    rate: .023,
    subtotal: 166.95,
    arisefee: 19.75,
    callumfee: .10,
    totaldue: 229.20
})


const employee1 = new Employee({
    employeename: "Nola Darling",
    idnumber: "CSP123456",
    email: "sceneitpix@gmail.com",
    phone: "9178957463",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/208171_10150149295942499_3384854_n.jpg?_nc_cat=111&_nc_ht=scontent-atl3-1.xx&oh=3c3860f0098c2d75265051e7cb4a26dc&oe=5C770518",
    invoices: [invoice1]
})
const employee2 = new Employee({
    employeename: "Sha Bizness",
    idnumber: "CSP489623",
    email: "jatoviagary.invoices@gmail.com",
    phone: "2128070984",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/430010_4069878260161_907945121_n.jpg?_nc_cat=108&_nc_ht=scontent-atl3-1.xx&oh=aeb71085e0be9d5915915fa937d95462&oe=5C686213",
    invoices: [invoice2]
})
const employee3 = new Employee({
    employeename: "Taminck Fortune",
    idnumber: "CSP356748",
    email: "kirkrevil@gmail.com",
    phone: "718378465",
    image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/40640178_2387864784563143_8407232597398126592_n.jpg?_nc_cat=110&_nc_ht=scontent-atl3-1.xx&oh=011dff69f560483733e58f3cfda1d543&oe=5C6CF9F7",
    invoices: [invoice3]
})



Employee.remove({})
    .then(() => Invoice.remove({}))
    .then(() => Invoice.insertMany([invoice1, invoice2, invoice3]))
    .then(() => employee1.save())
    .then(() => employee2.save())
    .then(() => employee3.save())
    .then(() => console.log("Database seeded successfully"))
    .then(() => mongoose.connection.close()) 