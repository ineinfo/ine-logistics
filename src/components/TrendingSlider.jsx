"use client";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './TrendingSlider.css';

const TrendingSlider = () => {
  const books = [
    {
      title: 'Jane Eyre',
      description: 'Jane Eyre is divided into 38 chapters. It was originally published in three volumes in the 19th century...',
      author: 'Charlotte Brontë',
      authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    },
    {
      title: 'The Lord of the Rings',
      description: 'Epic high-fantasy novel by J. R. R. Tolkien.',
      author: 'J. R. R. Tolkien',
      authorImage: 'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'All Quiet on the Western Front',
      description: 'The book describes the German soldiers\' extreme physical and mental trauma during the war.',
      author: 'Erich Maria Remarque',
      authorImage: 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Romeo and Juliet',
      description: 'A tragedy between two youths from feuding families.',
      author: 'William Shakespeare',
      authorImage: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Of Mice and Men',
      description: 'A novel by John Steinbeck.',
      author: 'John Steinbeck',
      authorImage: 'https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Harry Potter',
      description: 'The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley.',
      author: 'J. K. Rowling',
      authorImage: 'https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    },
  ];

  useEffect(() => {
    const stack = document.querySelector(".stack");
    const cards = Array.from(stack.children)
      .reverse()
      .filter((child) => child.classList.contains("card"));

    cards.forEach((card) => stack.appendChild(card));

    function moveCard() {
      const lastCard = stack.lastElementChild;
      if (lastCard.classList.contains("card")) {
        lastCard.classList.add("swap");

        setTimeout(() => {
          lastCard.classList.remove("swap");
          stack.insertBefore(lastCard, stack.firstElementChild);
        }, 1200);
      }
    }

    let autoplayInterval = setInterval(moveCard, 4000);

    stack.addEventListener("click", function (e) {
      const card = e.target.closest(".card");
      if (card && card === stack.lastElementChild) {
        card.classList.add("swap");

        setTimeout(() => {
          card.classList.remove("swap");
          stack.insertBefore(card, stack.firstElementChild);
        }, 1200);
      }
    });

    return () => clearInterval(autoplayInterval);
  }, []);

  return (
    <main className="TrendingSlider h-screen">
      <div className="content">
        <h1>Our Clients Love Us</h1>
        <p style={{ background: 'linear-gradient(to right, #1e3c72, #2a5298)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Here's what our satisfied clients say about the difference we've made to their businesses. 
        </p>
        <button className="btn" style={{ background: 'linear-gradient(to right, #1e3c72, #2a5298)', color: '#fff' }}>Explore More</button>
      </div>
      <div className="stack">
        {books.map((book, index) => (
          <div key={index} className="card">
            <img src={book.authorImage} alt={book.author} />
            <div className="author-overlay">{book.author}</div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default TrendingSlider;
