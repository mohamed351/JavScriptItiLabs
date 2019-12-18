title="JS";
var book={
    title:title,
    version:3,
    author:{firstName:"eman",lastName:"fathi"},
    borrow:function(name){
        console.log(name+"is  Borrowing "+this.title);//book.title
    }
};
for (key in book)
{
    // console.log(book[key]);
}


