//图书馆
function Book(isbn, title, author){
    
    this._setIsbn(isbn);
    this.author = author || '未给作者';
    this.title = title || '未给体目';
}
Book.prototype._setIsbn = function(isbn) {
    // 正则表达式
    // ‘_’ 代表私有
    if (this._checkIsbn()) {
        this.isbn=isbn
    }else{
        throw new Error('isbn有误');
    }
}
Book.prototype.borrow = function() {

}
Book.prototype._checkIsbn = function(isbn){
    return /[0-9]{10}/.test(isbn);
}
Book.prototype.getTitle = function() {
    return this.title;
}

Book.prototype.getAuthor = function(){
    return this.author;
}
var book = new Book('sr1241516','三国演义','罗贯中');