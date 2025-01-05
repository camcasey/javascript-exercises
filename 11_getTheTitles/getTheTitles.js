const getTheTitles = function(books) {
    let ans = [];
    books.forEach((book) => {
        ans.push(book.title);
      });
      return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
