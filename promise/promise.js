

var users = [
    {
        id:1,
        name:'The Vu',
    },
    {
        id:2,
        name:'Admin',
    },
    {
        id:3,
        name:'Son Dang',
    },
];

var comments = [
    {
        id:1,
        user_id:1,  
        content:'Ra bai moi di anh!'
    },
    {
        id:2,
        user_id:2,
        content:'ra roi day em oi!'
    },
];


// 1.lấy ra comments
// 2. từ comment lấy user_id tương ứng
// từ user_id lấy user

// fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function(){
            resolve(comments);
        });
    },1000)
}

function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        resolve(result);
    });
}


getComments()
    .then(function(comments) {
        // console.log(comments);
        var userIds = comments.map(function(comments) {
            return comments.user_id;
        });

        return getUsersByIds(userIds)
            .then(function(users) {
                return {
                    users : users,
                    comments: comments, 
                }
        });
    })
    
    .then(function(data) {
        console.log(data);
    })

