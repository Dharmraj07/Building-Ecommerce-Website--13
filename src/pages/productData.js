export const productData = [
    { 
      id: 1, 
      name: "The Great Gatsby", 
      description: "A classic novel set in the Jazz Age.", 
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg", 
      price: "$15.99", 
      author: "F. Scott Fitzgerald", 
      publicationDate: "1925", 
      aboutBook: "A tale of wealth, love, and the American Dream in the Roaring Twenties.",
      reviews: [
        { user: "John", comment: "A masterpiece!", rating: 5 },
        { user: "Jane", comment: "A beautifully written story, but the characters were hard to sympathize with.", rating: 4 }
      ]
    },
    { 
      id: 2, 
      name: "To Kill a Mockingbird", 
      description: "A story of racial injustice in the Deep South.", 
      image: "https://covers.openlibrary.org/b/id/8225118-L.jpg", 
      price: "$18.99", 
      author: "Harper Lee", 
      publicationDate: "1960", 
      aboutBook: "A gripping, heart-wrenching, and wholly remarkable tale of a young girl growing up in the racially charged American South.",
      reviews: [
        { user: "Alice", comment: "Timeless and profound, a must-read!", rating: 5 },
        { user: "Mike", comment: "Great story, but I found the pacing slow in parts.", rating: 3 }
      ]
    },
    { 
      id: 3, 
      name: "1984", 
      description: "A dystopian novel exploring government surveillance.", 
      image: "https://covers.openlibrary.org/b/id/7222247-L.jpg", 
      price: "$12.50", 
      author: "George Orwell", 
      publicationDate: "1949", 
      aboutBook: "A haunting tale of a totalitarian regime that monitors every aspect of a citizen's life.",
      reviews: [
        { user: "Tom", comment: "A chilling vision of the future that feels all too real.", rating: 5 },
        { user: "Sarah", comment: "Important, but quite bleak and hard to get through at times.", rating: 4 }
      ]
    },
    { 
      id: 4, 
      name: "Pride and Prejudice", 
      description: "A romantic novel about manners and marriage.", 
      image: "https://covers.openlibrary.org/b/id/8262012-L.jpg", 
      price: "$9.99", 
      author: "Jane Austen", 
      publicationDate: "1813", 
      aboutBook: "The story of Elizabeth Bennet and her tumultuous relationship with the wealthy and enigmatic Mr. Darcy.",
      reviews: [
        { user: "Lily", comment: "Charming and witty, a true classic!", rating: 5 },
        { user: "Emily", comment: "A delightful story, though the language can be hard to follow at times.", rating: 4 }
      ]
    },
    { 
      id: 5, 
      name: "Moby Dick", 
      description: "An epic tale of adventure on the high seas.", 
      image: "https://covers.openlibrary.org/b/id/7222263-L.jpg", 
      price: "$14.99", 
      author: "Herman Melville", 
      publicationDate: "1851", 
      aboutBook: "A sailor's obsessive quest to hunt down the elusive white whale, Moby Dick.",
      reviews: [
        { user: "Jacob", comment: "A long but rewarding read, if you can handle the deep symbolism.", rating: 4 },
        { user: "Emma", comment: "Too dense for me, I couldn't get through it.", rating: 2 }
      ]
    },
    { 
      id: 6, 
      name: "War and Peace", 
      description: "A historical novel set during the Napoleonic Wars.", 
      image: "https://covers.openlibrary.org/b/id/7222227-L.jpg", 
      price: "$19.99", 
      author: "Leo Tolstoy", 
      publicationDate: "1869", 
      aboutBook: "An epic chronicle of Russian society during the Napoleonic wars, blending personal stories with historical events.",
      reviews: [
        { user: "Oliver", comment: "A monumental work, but quite dense and lengthy.", rating: 4 },
        { user: "Sophia", comment: "A masterpiece of literature, though hard to follow at times.", rating: 5 }
      ]
    },
    { 
      id: 7, 
      name: "The Catcher in the Rye", 
      description: "A story of teenage rebellion and angst.", 
      image: "https://covers.openlibrary.org/b/id/8251261-L.jpg", 
      price: "$10.99", 
      author: "J.D. Salinger", 
      publicationDate: "1951", 
      aboutBook: "The journey of Holden Caulfield, a disillusioned teen trying to find meaning in a world he doesn't understand.",
      reviews: [
        { user: "David", comment: "A raw, real portrayal of teenage life.", rating: 5 },
        { user: "Olivia", comment: "I didn't connect with Holden, but the book offers a lot of insight.", rating: 4 }
      ]
    },
    { 
      id: 8, 
      name: "The Odyssey", 
      description: "An ancient Greek epic poem of heroism and adventure.", 
      image: "https://covers.openlibrary.org/b/id/8252852-L.jpg", 
      price: "$13.99", 
      author: "Homer", 
      publicationDate: "8th Century BC", 
      aboutBook: "The legendary journey of Odysseus as he travels home after the Trojan War, facing numerous challenges along the way.",
      reviews: [
        { user: "Liam", comment: "An epic tale that has influenced countless works of literature.", rating: 5 },
        { user: "Zoe", comment: "Some parts were difficult to follow, but the adventure is timeless.", rating: 4 }
      ]
    },
    { 
      id: 9, 
      name: "Crime and Punishment", 
      description: "A psychological thriller about guilt and redemption.", 
      image: "https://covers.openlibrary.org/b/id/8225157-L.jpg", 
      price: "$16.50", 
      author: "Fyodor Dostoevsky", 
      publicationDate: "1866", 
      aboutBook: "The story of Rodion Raskolnikov, a student who commits a crime and wrestles with his conscience in the aftermath.",
      reviews: [
        { user: "Henry", comment: "A deep dive into the human psyche, brilliantly written.", rating: 5 },
        { user: "Chloe", comment: "A dark and intense read that is not for everyone.", rating: 4 }
      ]
    },
    { 
      id: 10, 
      name: "The Hobbit", 
      description: "A fantasy adventure in Middle-earth.", 
      image: "https://covers.openlibrary.org/b/id/8138817-L.jpg", 
      price: "$11.99", 
      author: "J.R.R. Tolkien", 
      publicationDate: "1937", 
      aboutBook: "The story of Bilbo Baggins, a hobbit who embarks on an unexpected journey that leads him to a dragon's lair and beyond.",
      reviews: [
        { user: "Aiden", comment: "A fun and adventurous read for all ages!", rating: 5 },
        { user: "Maya", comment: "A charming tale, though I prefer 'The Lord of the Rings'.", rating: 4 }
      ]
    }
  ];
  