const getOne = () => {
    return `
        SELECT u.id , u.password , c.name 
        FROM user u 
        JOIN client_users c  ON c.id = u.client_user_id
        WHERE u.email = ? `
}

module.exports = {
    getOne
}