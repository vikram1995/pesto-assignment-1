const USERS_LIST_SCHEMA = `
type Company {
    name: String
  }
  
  type Geo{
    lat: String
    lng: String
  }
  
  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
    geo: Geo
  }
  
  type User {
    id: String
    name: String
    username: String
    email: String
    phone: String
    website: String
    address: Address
    company: Company 
  }
  `

  module.exports = USERS_LIST_SCHEMA