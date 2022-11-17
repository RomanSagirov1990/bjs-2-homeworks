//    Задание № 1
class PrintEditionItem {
    constructor(...arg) {
        [this.name, this.releaseDate, this.pagesCount] = arg
        this.state = 100;
        this.type = null;
    }

    set state(value) {
        if (value < 0) {
            return this._state = 0
        } else if (value > 100) {
            return this._state = 100
        } else {
            return this._state = value
        }
    }
    get state() {
        return this._state
    }
    fix() {
        this.state = this.state * 1.5
        return this._state
    }
}


class Magazine extends PrintEditionItem {
    constructor(...arg) {
        super(...arg);
        this.type = "magazine"
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...arg) {
        super(...arg);
        this.author = author;
        this.type = "book"
    }
}


class NovelBook extends Book {
    constructor(...arg) {
        super(...arg);
        this.type = "novel"
    }
}

class FantasticBook extends Book {
    constructor(...arg) {
        super(...arg)
        this.type = "fantastic"
    }
}
class DetectiveBook extends Book {
    constructor(...arg) {
        super(...arg);
        this.type = "detective"
    }
}
//    Задание № 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = []
    }
    addBook(object) {
        if (object.state > 30)
            this.books.push(object)
    }

    findBookBy(type, value) {
        let book = this.books.find(el => el[type] == value)
        if (book == undefined) return null
        else return book
    }
    giveBookByName(bookName) {
        let book = this.books.splice(this.books.findIndex(el => el.name == bookName), 1)
        if (book[0] == undefined) return null
        else return book[0]
    }
}
//    Задание № 3

class Student {
    constructor(name) {
        this.name = name
        this.objectOfMarks = {};
        this.averageGradeSubject = {};
        this.mediumAripheticAllSubjectsGrades
    }
    addMark(estimation, nameSubject) {
   
        if (estimation > 0 && estimation < 6) {
          if (!this.objectOfMarks[nameSubject]) {  
          this.objectOfMarks[nameSubject] = []; 
          }
            this.objectOfMarks[nameSubject].push(estimation); 
        }else console.log("Ошибка, оценка должна быть числом от 1 до 5")  
      }

    addMarks(nameSubject, ...estimation) {
        if (estimation.every(el => el >= 1 && el < 6)) {
            if (!this.objectOfMarks[nameSubject]) {
                this.objectOfMarks[nameSubject] = [];
                estimation.map(el => this.objectOfMarks[nameSubject].push(el));
            }
            estimation.map(el => this.objectOfMarks[nameSubject].push(el));
        } else console.log("Ошибка, оценка должна быть числом от 1 до 5")
    }

    getAverageBySubject(nameSubject) {

        if (Object.keys(this.objectOfMarks).includes(nameSubject)) {
            let sum = Object.values(this.objectOfMarks[nameSubject]).reduce((sum, current) => sum + current);
            let mediumAriphetic = Number((sum / Object.values(this.objectOfMarks[nameSubject]).length).toFixed(2));
            this.averageGradeSubject[nameSubject] = mediumAriphetic;
            return mediumAriphetic;
        } else console.log("Несуществующий предмет");
    }


    getAverage() {

        let sum = Object.values(this.objectOfMarks).map(el => el.reduce((acc, el) => acc + el)).reduce((acc, el) => acc + el);
        let mediumAripheticAll = Number((sum / Object.values(this.objectOfMarks).reduce((acc, el) => acc.length + el.length)).toFixed(2));
        this.mediumAripheticAllSubjectsGrades = mediumAripheticAll;
        return mediumAripheticAll;
    }

    exclude(reason) {
        delete this.objectOfMarks;
        delete this.this.averageGradeSubject;
        delete this.mediumAripheticAllSubjectsGrades;
        this.excluded = reason;
    };
}
