export const USERS_LIST_SCHEMA = `{ 
    users 
        {   
            id 
            name 
            username 
            email 
            phone 
            website 
            address { 
                street 
                suite 
                city 
                zipcode 
                geo { 
                    lat 
                    lng
                }
            } 
            company {
                name
            }
        }
    }`