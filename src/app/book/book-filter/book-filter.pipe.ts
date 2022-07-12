import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(books: Book[] | null, searchTerm: string): Book[] {

    if (!books) {
      return [];
    }

    return books.filter((book) => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

}
