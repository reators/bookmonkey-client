import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  books: Book[] = [
    {
      title: "Blackout",
      author: "Marc Elsberg",
      abstract: "Immer wieder kommt es vor: Es gibt einen Stromausfall, und plötzlich geht nichts mehr. Meist kommt der Strom nach einiger Zeit wieder und alles ist gut. Was, wenn das mal nicht so wäre? Marc Elsberg hat das Szenario in einem atemberaubenden Thriller ausgemalt und damit bereits Millionen Leser*innen begeistert"
    },
    {
      title: "Ghost",
      author: "Robert Harris",
      abstract: "Der britische Ex-Premierminister Adam Lang will seine Memoiren veröffentlichen. Nach dem dubiosen Tod seines Ghostwriters recherchiert dessen Nachfolger genauer als verlangt und macht eine Entdeckung, die zu einem weltpolitischen Chaos führen kann. War der Premier im »Krieg gegen den Terror« eine Marionette der CIA. Niemand zuvor hat Großbritannien so lange regiert wie Premierminister Adam Lang. Nun ist er aus dem Amt geschieden, und alle Welt erwartet sehnsüchtig die Memoiren des charismatischen Machtmenschen. Sensationelle zehn Millionen Dollar Vorschuss hat ihm sein amerikanischer Verleger geboten. Unter zwei Bedingungen: Das Buch muss binnen zwei Jahren auf dem Markt sein, und der Ex-Premier soll in Sachen Krieg gegen den Terror kein Blatt vor den Mund nehmen. Ein halbes Jahr vor dem Termin passiert das Undenkbare: Am Ufer der US-amerikanischen Insel Martha’s Vineyard, wohin sich Adam Lang zum Arbeiten an seinen Erinnerungen zurückgezogen hat, wird die Leiche seines Ghostwriters angeschwemmt. War es Mord? Schnell wird ein Ersatzmann gefunden, der auf eigene Faust noch genauer als sein Vorgänger in der Vergangenheit des Machtpolitikers recherchiert. Und dabei stößt er auf Dinge, die so brisant sind, dass deren Veröffentlichung zu einem weltpolitischen Chaos führen würde."
    },
    {
      title: "Fit ohne Geräte",
      author: "Mark Lauren",
      abstract: "Bodyweighttraining ist hocheffizient und liegt voll im Trend, ausgelöst durch Marc Laurens einzigartiges Trainingskonzept 'Fit ohne Geräte'"
    }
  ];

  // link:     "https://www.thalia.de/shop/home/artikeldetails/A1027079909",
  // link:     "https://www.amazon.de/Fit-ohne-Geräte-Körpergewicht-Weltbestseller/dp/3742304119/ref=sr_1_1",

  goToBookDetails(book: Book) {
    console.log('Navigate to book details soon ...');
    console.table(book);
  }

  bookSearchTerm: string = '';
  updateBookSearchTerm(input: Event) {
    this.bookSearchTerm = (input.target as HTMLInputElement).value;
  }
}
