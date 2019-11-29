import Component from '@ember/component';

export default Component.extend({
    bookTitle: null,
    bookAuthor: null,
    bookSummary: null,
    actions: {
        submit() {
            this.set('bookTitle', this.bookTitle);
            this.set('bookAuthor', this.bookAuthor);
            this.set('bookSummary', this.bookSummary);
        }
    }
});
