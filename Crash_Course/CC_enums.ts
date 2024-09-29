// Enums!!
function enums(){
    enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}


    interface Resource<T> {
        uid: number;
        resourceType: ResourceType.BOOK;
        data: T;
    }
}