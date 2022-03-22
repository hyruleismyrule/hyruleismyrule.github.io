export default class Comments {
    constructor(type="hikes") {
        this.type = type;
        this.commentList = readFromLS(this.type) || [];
    }

  showCommentsList(name = null){
    console.log("show comments");
    // Target the comments div and add comments as list items

    filteredList = [];

    if (name == null) {
        filteredList = getAllComments();
    }
    else {
        filterdList = filterCommentsByName(name);
    }
    
    for (comment of filterdList){
        const item = document.createElement('li');
    item.innerHTML = ` <div> <h2>${comment.hikeName}</h2><p>${comment.text}</p> </div>`;
    //append comment thingy to DOM element.
    }
    
  }

  getAllComments() {
      // return a list of comments
      return this.commentList;
  }

  filterCommentsByName(name) {
      // return a list of comments filtered by the name of the hike
      return this.commentList.filter(hike => hike.name == name);
  }

  addComment(name, text) {
      // Add comment to list
      const newComment = new Comment(name, text);
      this.commentList.push(newComment);
      writeToLS(this.type, this.commentList);
  }

  writeToLS(key, data) {
    // we can use JSON.stringify to convert our object to a string that can be stored in localStorage.
    window.localStorage.setItem(key, JSON.stringify(data));
  }
  
  readFromLS(key) {
    // the string we retrieve from localStorage needs to be converted back to an object with JSON.parse
    return JSON.parse(window.localStorage.getItem(key));
  }

  addListenerToSubmit() {
      // Adds event listener to submit button that adds comment to list
  }

  
}

class Comment {
    constructor(hikeName, text) {
        this.hikeName = hikeName;
        this.text = text;
        this.date = new Date().getTime;
    }
}