export default function () {
  this.namespace = '/api';
  this.get('/books', function () {
    return {
      data: [
        {
          type: 'books',
          id: '1',
          attributes:
          {
            title: 'The Girl With The Dragon Tattoo',
            author: 'Stieg Larsson',
            image: 'https://elephantbookstore.com/image/cache/catalog/products/fiction/stieg-larsson-the-girl-with-the-dragon-tattoo-950x950.png',
            description: 'This grand old mansion sits on over 100 acres of rolling hills and dense redwood forests.'
          }
        },
        {
          type: 'books',
          id: '2',
          attributes:
          {
            title: 'The Green Mile',
            author: 'Stephen King',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81Tj%2Bp4uIHL.jpg',
            description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.'
          }
        },
        {
          type: 'books',
          id: '3',
          attributes:
          {
            title: 'Meditations',
            author: 'Marcus Aurelius',
            image: 'https://image.bokus.com/images/9780141910819_200x_meditations_e-bok',
            description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
          }
        }
      ]
    };
  });
}
