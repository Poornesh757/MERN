//Without error handling
function getUser(userId, callback) {
    setTimeout(() => {
        console.log(`User ${userId} fetched`);
        callback(null, { id: userId, name: 'John Doe' });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log(`Posts for user ${userId} fetched`);
        callback(null, [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log(`Comments for post ${postId} fetched`);
        callback(null, [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }]);
    }, 1000);
}

// Callback Hell
getUser(1, (error, user) => {
    if (error) {
        console.error('Error fetching user:', error);
    } else {
        getPosts(user.id, (error, posts) => {
            if (error) {
                console.error('Error fetching posts:', error);
            } else {
                posts.forEach(post => {
                    getComments(post.id, (error, comments) => {
                        if (error) {
                            console.error('Error fetching comments:', error);
                        } else {
                            console.log('Comments for post:', post.title, comments);
                        }
                    });
                });
            }
        });
    }
});


//Handing error
// Callback Hell with Error Handling
getUser(1, (error, user) => {
    if (error) {
        console.error('Error fetching user:', error);
        return;
    }
    getPosts(user.id, (error, posts) => {
        if (error) {
            console.error('Error fetching posts:', error);
            return;
        }
        posts.forEach(post => {
            getComments(post.id, (error, comments) => {
                if (error) {
                    console.error('Error fetching comments:', error);
                } else {
                    console.log('Comments for post:', post.title, comments);
                }
            });
        });
    });
});


//Refactoring with promises

function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`User ${userId} fetched`);
            resolve({ id: userId, name: 'John Doe' });
        }, 1000);
    });
}

function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Posts for user ${userId} fetched`);
            resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
        }, 1000);
    });
}

function getComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Comments for post ${postId} fetched`);
            resolve([{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }]);
        }, 1000);
    });
}

// Using Promises
getUser(1)
    .then(user => {
        return getPosts(user.id);
    })
    .then(posts => {
        return Promise.all(posts.map(post => {
            return getComments(post.id).then(comments => {
                return { post, comments };
            });
        }));
    })
    .then(results => {
        results.forEach(result => {
            console.log('Comments for post:', result.post.title, result.comments);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });


//Refactoring with Async/Async
async function getUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`User ${userId} fetched`);
            resolve({ id: userId, name: 'John Doe' });
        }, 1000);
    });
}

async function getPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Posts for user ${userId} fetched`);
            resolve([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
        }, 1000);
    });
}

async function getComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Comments for post ${postId} fetched`);
            resolve([{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }]);
        }, 1000);
    });
}

async function fetchData() {
    try {
        const user = await getUser(1);
        const posts = await getPosts(user.id);
        const results = await Promise.all(posts.map(async post => {
            const comments = await getComments(post.id);
            return { post, comments };
        }));

        results.forEach(result => {
            console.log('Comments for post:', result.post.title, result.comments);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
