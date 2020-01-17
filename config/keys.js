// module.exports={
//     MongoURI:'mongodb+srv://sj009:saurabh@cluster0-6gbhd.mongodb.net/test?retryWrites=true&w=majority'
// }


dbPassword = 'mongodb+srv://sj009:'+ encodeURIComponent('saurabh') + '@cluster0-6gbhd.mongodb.net/test?retryWrites=true&w=majority';

module.exports = {
    mongoURI: dbPassword
};